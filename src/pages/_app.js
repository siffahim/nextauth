import Navbar from "@/components/Layout/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}
