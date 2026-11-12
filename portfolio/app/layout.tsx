import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";

export const metadata: Metadata = {
  title: "Sameer Singh – Electronics & Technology Enthusiast",
  description:
    "Personal portfolio of Sameer Singh, an Electrical and Electronics Engineering student at BIT Raipur exploring Embedded Systems, Edge AI, Robotics and Application Development.",
  keywords: [
    "Sameer Singh",
    "EEE",
    "Electrical Engineering",
    "Embedded Systems",
    "Edge AI",
    "Robotics",
    "Flutter",
    "ESP32",
    "Raspberry Pi",
    "Portfolio",
    "BIT Raipur",
  ],
  authors: [{ name: "Sameer Singh" }],
  creator: "Sameer Singh",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Sameer Singh – Electronics & Technology Enthusiast",
    description:
      "EEE undergraduate building at the intersection of hardware and software.",
    siteName: "Sameer Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Singh – Electronics & Technology Enthusiast",
    description:
      "EEE undergraduate building at the intersection of hardware and software.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('sameer_theme');
                if (t === 'dark') {
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.add('light');
                }
              } catch (e) {
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-[#14213D] text-[#F4EDE0] min-h-screen antialiased selection:bg-[#F4EDE0] selection:text-[#14213D]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
