import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/Header"; // Adjust the path as needed
import Footer from "@/components/Footer"; // Adjust the path as needed

const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Governor Initiative",
  description: "Governor Initiative for Artificial Intelligence, Web 3.0 and Metaverse",
  icons: {
    icon: { url: "/Logo.png", type: "image/png" }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
