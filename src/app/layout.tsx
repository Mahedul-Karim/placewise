import type { Metadata } from "next";
import "./globals.css";
import cloudinary from "cloudinary";
import ContextProvider from "@/context/ContextProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Placewise-Book tours",
  description: "A tour booking website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-clip">
      <body className={`font-poppins bg-grey text-neutral overflow-x-clip`}>
        <ContextProvider>{children}</ContextProvider>
        <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#243757",
            zIndex:99999999
          },
        }}
      />
      </body>
    </html>
  );
}
