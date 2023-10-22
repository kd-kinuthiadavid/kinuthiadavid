import Image from "next/image";
import { Quicksand } from "next/font/google";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { useState } from "react";

const quickSand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin", "vietnamese"],
});

export default function Home() {
  const [background, setBackground] = useState("bg-kd-primary");
  const [textColor, setTextColor] = useState("text-kd-primary");

  function handleBgColorChange(bgColor: string) {
    setBackground(bgColor);
  }

  function updateHeroColors(bg: string, text: string) {
    setBackground(bg);
    setTextColor(text);
  }

  return (
    <main
      className={`transition-colors ease-in-out ${background} min-h-screen flex flex-col gap-y-10 md:gap-y-20 items-center pb-10 ${quickSand.className}`}
    >
      {/* hero section */}
      <Hero
        updateHeroColors={updateHeroColors}
        parentTextColor={textColor}
        parentBgColor={background}
      />

      {/* projects */}
      <Projects updateHeroColors={updateHeroColors} />

      {/* About */}
      <About
        updateParentBgColor={handleBgColorChange}
        background={background}
      />

      {/* Experience */}
      <Experience updateParentBgColor={handleBgColorChange} />

      {/* Contact */}
      <Contact updateParentBgColor={handleBgColorChange} />
    </main>
  );
}
