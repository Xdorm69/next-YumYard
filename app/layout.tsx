import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import Footer from "@/components/Sections/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["200", "400", "600", "700"], // load exactly the weights you want
  subsets: ["latin", "latin-ext"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["200", "400", "600", "700"],
  subsets: ["latin", "latin-ext"],
});
export const metadata: Metadata = {
  title: "YumYard",
  description:
    "YumYard is a restaurant that provides the best of American cuisine with a modern twist. Our menu is designed to satisfy any craving, whether you're in the mood for something classic or adventurous. We're committed to using only the freshest ingredients and providing exceptional service to ensure that every guest leaves feeling satisfied and eager to return.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${montserrat.variable} ${roboto.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
