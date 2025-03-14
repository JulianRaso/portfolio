import { Geist } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Julian Raso - Portfolio",
  description: "Portfolio generated with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col align-center w-full mt-18">
        {children}
      </body>
    </html>
  );
}
