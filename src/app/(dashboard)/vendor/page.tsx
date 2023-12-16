import Sidebar from "@/components/dashboard/vendor/side/Sidebar";
import React from "react";
import dynamic from "next/dynamic";

const Vendor = dynamic(
  () => import("@/components/dashboard/vendor/main/vendor-dashboard/Vendor"),
  { ssr: false }
);

const VendorPage = () => {
  return (
    <>
      <Vendor />
    </>
  );
};

export default VendorPage;
