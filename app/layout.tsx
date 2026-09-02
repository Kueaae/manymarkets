import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const displayFont = Chakra_Petch({
  subsets: ["latin", "thai"],
  weight: ["500", "600", "700"],
  variable: "--font-chakra-petch",
  display: "swap",
});

const bodyFont = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ตลาดนัดแคมปัส",
  description: "ซื้อขายของมือสองและของทำมือกันเองในรั้วมหาวิทยาลัย นัดรับง่าย ไม่ต้องส่งไกล",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f2" },
    { media: "(prefers-color-scheme: dark)", color: "#14151a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Runs before paint so the page never flashes the wrong theme on load.
const noFlashThemeScript = `
(function () {
  try {
    var saved = localStorage.getItem("cb-theme");
    var theme = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} font-[family-name:var(--font-body)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}