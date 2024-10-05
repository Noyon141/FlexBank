import ThemeProvider from "@/components/theme-provider";
import Wrapper from "@/components/wrapper";
import { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlexBank",
  description:
    "FlexBank is an innovative web application designed to simplify and enhance your banking journey. Built on Next.js, it offers a user-friendly interface that allows you to effortlessly manage your finances from anywhere, at any time. With real-time insights into your accounts and transactions, you can make informed financial decisions with ease.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
