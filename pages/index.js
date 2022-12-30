import Head from "next/head";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Me from "../components/Me";
import Portfolio from "../components/Portfolio";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bachrul Uluum</title>
        <meta name="description" content="Bachrul Uluum's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
      <SocialLinks />
      <HomePage />
      <Portfolio />
      <Experience />
      <Me />
      <Contact />
    </div>
  );
}
