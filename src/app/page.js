import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import HomeMenu from "@/components/HomeMenu/HomeMenu";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeMenu />
      <About />
      <Contact />
    </div>
  );
}
