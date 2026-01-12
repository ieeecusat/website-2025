import type { Metadata } from "next";
import { Geist, Geist_Mono,Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets:["latin"],
});

export const metadata: Metadata = {
  title: "IEEE CUSAT SB",
  description: "We the management,faculty and students of Cochin University of Science and Technology, make it a point to align ourselves with the goals and vision of IEEE. We push all the members to innovate, partake and grow through the various activities that are conducted for and by the club.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="IEEE CUSAT" />
            <body
              className={`${spaceGrotesk.variable} ${spaceGrotesk.variable} antialiased`}
            >
              <Navbar/>
              {children}
            </body>
          </html>
          );
}
