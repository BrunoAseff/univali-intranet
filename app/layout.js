import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UNIVALI - Intranet",
  description: "Clone da Intranet da Univali",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextTopLoader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
