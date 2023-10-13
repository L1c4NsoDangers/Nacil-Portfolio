"use client";
import { usePathname } from "next/navigation";
import Navbar from "../navbar";
import Footer from "../footer";
import HireMe from "../hire-me";

export default function CommonLayout({ children }) {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/admin" ? <Navbar /> : null}
      {children}

      {pathName !== "/" ? <HireMe /> : null}
      {pathName !== "/admin" ? <Footer /> : null}
    </>
  );
}
