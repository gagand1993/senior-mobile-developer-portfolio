import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gagandeep Singh | Senior Mobile Application Developer",
  description:
    "Portfolio of Gagandeep Singh, Senior Mobile Application Developer specializing in Android and Flutter apps.",
  openGraph: {
    title: "Gagandeep Singh | Senior Mobile Application Developer",
    description:
      "Android and Flutter developer with 8+ years of experience building scalable, secure, high-performance mobile applications.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    try {
      var theme = window.localStorage.getItem("theme") === "light" ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
      document.documentElement.classList.toggle("light", theme === "light");
      document.documentElement.classList.toggle("dark", theme === "dark");
    } catch (_) {
      document.documentElement.dataset.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-ink font-sans text-slate-100 antialiased light:bg-cloud light:text-slate-950">
        {children}
      </body>
    </html>
  );
}
