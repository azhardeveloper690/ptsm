import { pool } from "@/lib/db";
import { buildEmailViewTemplate } from "@/lib/emailViewTemplate";
import { coursesData } from "@/components/CoursesList";

// 🔹 Main entry point
export async function sendTemplatedEmail(emailType, user) {
  try {
    // 1. Fetch template & tags
    const [tags] = await pool.query("SELECT * FROM mailandsmstemplatetag");
    const [templates] = await pool.query(
      "SELECT * FROM email_templates WHERE email_type = ? LIMIT 1",
      [emailType]
    );
    if (!templates.length) throw new Error(`Template not found: ${emailType}`);
    const template = templates[0];

    // 2. Replace tags
    const parsedBody = await replaceTemplateTags(tags, user, template.email_body);
    const emailHTML = buildEmailViewTemplate(parsedBody);
    const subject = template.email_subject || "Hunarmand Punjab Notification";

    // 3. Send email
    await sendElasticEmail(user.email, subject, emailHTML);
    console.log(`✅ Email sent to ${user.email} for ${emailType}`);
    return true;
  } catch (err) {
    console.error("sendTemplatedEmail error:", err.message);
    return false;
  }
}

// 🔹 Replace template placeholders
async function replaceTemplateTags(tags, user, message) {
  let text = message;

  for (const tag of tags) {
    const tagName = tag.tagname;

    switch (tagName) {
      case "[name]":
        text = text.replace(/\[name\]/g, user.full_name || "");
        break;

      case "[email]":
        text = text.replace(/\[email\]/g, user.email || "");
        break;

      case "[DATE]":
        text = text.replace(/\[DATE\]/g, new Date().toLocaleDateString());
        break;

      case "[password]":
        text = text.replace(/\[password\]/g, user.password || "");
        break;
      case "[CODE]":
        text = text.replace(/\[CODE\]/g, user.code || "");
        break;

      case "[course]":
        try {
          const courseIds = JSON.parse(user.selected_courses || "[]");
          if (courseIds.length) {
            // ✅ fetch from imported component array instead of DB
            const titles = courseIds
              .map((id) => {
                const found = coursesData.find((c) => c.id === id);
                return found ? found.title : null;
              })
              .filter(Boolean)
              .join(", ");
            text = text.replace(/\[course\]/g, titles);
          } else {
            text = text.replace(/\[course\]/g, "");
          }
        } catch {
          text = text.replace(/\[course\]/g, "");
        }
        break;

      default:
        break;
    }
  }

  return text;
}

// 🔹 Elastic Email API call
async function sendElasticEmail(to, subject, html) {
  const apiKey = process.env.ELASTIC_API_KEY;
  const url = "https://api.elasticemail.com/v2/email/send";

  const data = new URLSearchParams({
    apikey: apiKey,
    from: "admissions@ssdp.pk",
    fromName: "Hunarmand Punjab",
    to,
    subject,
    bodyHtml: html,
    isTransactional: "true",
  });

  const res = await fetch(url, { method: "POST", body: data });
  const result = await res.text();
  console.log("Elastic Email:", result);
  return result;
}
