import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "News Homepage",
  description: "News homepage app challenge by FrontendMentor.io",
  icons: ["icon.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} desktop:bg-slate-400`}>
        {children}
      </body>
    </html>
  );
}
