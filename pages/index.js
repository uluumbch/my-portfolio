import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Me from "../components/Me";
import Portfolio from "../components/Portfolio";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <div>
      <SocialLinks />
      <HomePage />
      <Portfolio />
      <Experience />
      <Me />
      <Contact />
    </div>
  );
}
