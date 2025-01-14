import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DisplayCookies } from "./display-cookies";
import { deleteAllCookies } from "./clear-cookies.action";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer>
          <DisplayCookies deleteAllCookies={deleteAllCookies} />
        </footer>
      </body>
    </html>
  );
}
