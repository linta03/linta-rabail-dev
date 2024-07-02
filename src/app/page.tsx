import Hero from "@/components/HomePage";
import VelocityText from "@/components/HomePage/VelocityText";
import Projects from "@/components/HomePage/Projects";
import Paragraph from "@/components/HomePage/Paragraph";

export default function Home() {
  return (
    <>
      <Hero />
      <VelocityText />
      <Paragraph/>
      <Projects />
    </>
  );
}
