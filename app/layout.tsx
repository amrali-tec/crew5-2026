import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: "Crew5 Agency",
  description: "Creative Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
