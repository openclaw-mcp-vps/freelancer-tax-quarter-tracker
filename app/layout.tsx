import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceTax — Track Quarterly Taxes Automatically",
  description: "Automatically calculates and tracks quarterly tax payments for freelancers. Connect your bank, get instant estimates, never miss a deadline."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5c572594-5243-4e01-a0cb-0a9e49bbe82d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
