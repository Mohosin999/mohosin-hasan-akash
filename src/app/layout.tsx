import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name — Full-Stack Engineer",
  description:
    "Full-Stack Engineer. I design and ship reliable systems from database to interface.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Your Name — Full-Stack Engineer",
    description:
      "I design and ship reliable systems from database to interface.",
    type: "website",
  },
};

function themeInitScript() {
  return `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light')}else{document.documentElement.classList.remove('light')}}catch(e){document.documentElement.classList.remove('light')}})();`;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript() }}
        />
      </head>
      <body suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-[#0a0a0a] text-[#ededed]`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-cyan-400 focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
