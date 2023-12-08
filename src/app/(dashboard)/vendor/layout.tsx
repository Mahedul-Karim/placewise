import Sidebar from "@/components/dashboard/vendor/side/Sidebar";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const VendorLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid !grid-cols-[312px_1fr]">
      <Sidebar />
      <div className="bg-white">{children}</div>
    </div>
  );
};

export default VendorLayout;
