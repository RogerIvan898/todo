import { Inter } from "next/font/google";
import "./globals.css";
import {ReactNode, Suspense} from "react";
import Head from "next/head";
import {AuthProvider} from "../components/context/auth-context";
import LoadingSpinner from "@/components/cusom/loading-spinner";
import Loading from "@/app/Loading";
import GlobalLoading from "@/components/cusom/global-loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <title>To do</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    </Head>
      <body className={inter.className}>
      <Suspense fallback={<Loading/>}>
        <AuthProvider>
          { children }
        </AuthProvider>
      </Suspense>
      </body>

    </html>
  );
}
