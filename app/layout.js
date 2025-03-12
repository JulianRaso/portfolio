import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Julian Raso Portfolio",
  description: "Portfolio generated with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex flex-col align-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
