import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalBackground from "./components/GlobalBackground"; // ← Client Wrapper
import AnimatedLottieBackground from "./components/AnimatedLottieBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Crew5 Agency",
  description: "Digital Marketing | Social Media | Branding | Creative Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-background text-text font-main overflow-x-hidden">
        <div className="relative z-40">
          <AnimatedLottieBackground opacity={0.1} speed={0.3} />
          {/* Global Background - يشتغل في كل الصفحات */}

          {/* Main Content */}

          <Navbar />
          <main className="pt-[100px] pb-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
