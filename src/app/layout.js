import "@fortawesome/fontawesome-free/css/all.min.css";
// src/app/layout.js
export const metadata = {
  title: "Sindh Skills Development Program",
  description: "Next.js + Bootstrap + MySQL project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
