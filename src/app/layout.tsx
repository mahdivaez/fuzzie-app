import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers"

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fuzzie.",
  description: "Automate Your Work with Fuzzie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
