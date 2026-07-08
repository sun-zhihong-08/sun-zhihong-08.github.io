import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "孙志宏 — 品牌公关与市场传播",
  description: "18年+品牌公关与市场传播实战经验，深耕科技互联网赛道。品牌战略、创始人IP、全媒体传播、AI赋能营销。",
  keywords: ["品牌公关", "市场传播", "品牌战略", "创始人IP", "全媒体传播", "AI营销", "孙志宏"],
  authors: [{ name: "孙志宏" }],
  openGraph: {
    title: "孙志宏 — 品牌公关与市场传播",
    description: "18年+品牌公关与市场传播实战经验，深耕科技互联网赛道。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "孙志宏 — 品牌公关与市场传播",
    description: "18年+品牌公关与市场传播实战经验，深耕科技互联网赛道。",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
