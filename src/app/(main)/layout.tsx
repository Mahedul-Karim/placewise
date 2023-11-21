import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
