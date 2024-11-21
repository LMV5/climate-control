import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Climate Control Hub",
  description:
    "Climate Control Hub is your reliable assistant for managing indoor climate. Easily monitor temperature and humidity, access change history, and customize settings for each room.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
