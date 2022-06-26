/* eslint-disable react/jsx-props-no-spreading */
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-body-dark-mode bg-body-primary selection:bg-color-accent">
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
