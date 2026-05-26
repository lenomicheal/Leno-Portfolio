import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import FirstVisitLoader from "@/components/ui/first-visit-loader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leno Micheal — Full Stack Developer",
  description:
    "Portfolio of Leno Micheal — Full Stack Developer building scalable, high-performance web applications with React, Next.js, and modern technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Portfolio", "Leno Micheal"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <FirstVisitLoader>{children}</FirstVisitLoader>
        </ThemeProvider>
      </body>
    </html>
  );
}
