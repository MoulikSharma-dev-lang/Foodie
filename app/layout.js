import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Foodie: A Culinary Adventure Awaits",
  description: "Discover a world of flavors with Foodie! From delicious recipes and cooking tips to restaurant reviews and food trends, Foodie is your go-to source for all things food. Whether you're a seasoned chef or a casual home cook, join our community of food lovers and explore new dishes, culinary techniques, and the stories behind your favorite meals. Taste the world, one bite at a time"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="FVG369IH--kKq7CaH9FBIKR7WMoc5JXL1fwjKGiDBLE" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-black font-sans`}
      >
        <Navbar />
        <main className="min-h-[90vh]">
          {children}
        </main>
        <p className="font-bold text-xl text-center bg-blue-950 text-white"><b>Note: </b><span>This is just a dummy website for my practice! It means that it will not deliver anything to your home</span></p>
        <Footer />
      </body>
    </html>
  );
}