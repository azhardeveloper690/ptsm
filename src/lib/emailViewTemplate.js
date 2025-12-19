// src/lib/emailViewTemplate.js

export function buildEmailViewTemplate(email_body = "") {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hunarmand Punjab</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

      body {
        margin: 0;
        padding: 0;
        background: #f4f4f4;
        font-family: 'Open Sans', sans-serif;
        color: #444;
      }

      .container {
        max-width: 650px;
        margin: 20px auto;
        background: #fff;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      }

      .header {
        background-color: #123214;
        color: #fff;
        text-align: center;
        padding: 15px 10px;
      }

      .header img {
        height: 40px;
        margin-bottom: 5px;
      }

      .body {
        padding: 25px;
        line-height: 1.6;
        font-size: 15px;
      }

      .body p {
        margin-bottom: 10px;
      }

      .footer {
        background: #123214;
        color: #fff;
        text-align: center;
        padding: 12px;
        font-size: 13px;
      }

      a.button {
        display: inline-block;
        background: #22BC66;
        color: #fff;
        text-decoration: none;
        padding: 10px 18px;
        border-radius: 4px;
        margin-top: 10px;
      }

      hr {
        border: 0;
        border-top: 1px solid #eee;
        margin: 20px 0;
      }

      @media (max-width: 600px) {
        .container { width: 90%; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://hunarmandpunjab.pk/static/media/logo.a719fa2442d81f50b38e.png" alt="Hunarmand Punjab" />
        <h3>Hunarmand Punjab</h3>
      </div>
      <div class="body">
        ${email_body}
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} Hunarmand Punjab. All rights reserved.
      </div>
    </div>
  </body>
  </html>`;
}
