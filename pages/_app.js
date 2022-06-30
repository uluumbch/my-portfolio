/* eslint-disable react/jsx-props-no-spreading */
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

function MyApp({ Component, pageProps }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="dark:bg-body-dark-mode bg-body-primary selection:bg-color-accent">
      <ThemeProvider attribute="class" themes={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
