"use client";

import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";

const ConditionalWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const isAdminRoute =
    pathname === "/admin" ||
    pathname === "/adminDeshboard" ||
    pathname === "/adminDeshboard/b2brepair" ||
    pathname === "/adminDeshboard/b2brepair/b2brepairdata" ||
    pathname === "/adminDeshboard/blogs" ||
    pathname === "/adminDeshboard/privacypolicy" ||
    pathname ===  "/adminDeshboard/bloglisting" ||
    pathname ===  "/adminDeshboard/privacypolicyListing";

  return (
    <>
      {!isAdminRoute && <Header />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default ConditionalWrapper;
