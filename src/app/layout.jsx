import CommonLayout from "@/components/view/common-layout";
import "./globals.css";
import { Inter } from "next/font/google";
import TransitionLayout from "@/components/view/transition-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nacil Portfolio",
  description: "Dibuat Penuh Cinta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
