import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Lato} from 'next/font/google'
import Head from "next/head";

const lato = Lato({subsets: ['latin'],weight:['400','700']})
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Meals App</title>
    </Head>
    <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>;
}
