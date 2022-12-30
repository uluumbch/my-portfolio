/* eslint-disable react/jsx-props-no-spreading */
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="dark:bg-body-dark-mode bg-body-primary selection:bg-color-accent">
       <Head>
        <title>Bachrul Uluum</title>
        <meta name="description" content="Bachrul Uluum's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
      <ThemeProvider attribute="class" themes={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
