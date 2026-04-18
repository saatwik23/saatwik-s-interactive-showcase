import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saatwik Shrivastava — Frontend Developer & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Saatwik Shrivastava — Frontend Developer, AI Enthusiast and Builder. React, modern UI, AI workflows, and shipped real-world projects.",
      },
      { property: "og:title", content: "Saatwik Shrivastava — Frontend Developer Portfolio" },
      {
        property: "og:description",
        content: "Frontend Developer · AI Enthusiast · Builder. See projects, experience and skills.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="min-h-screen pb-10">
      <Loader onDone={() => setLoaded(true)} />
      {loaded && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </>
      )}
    </main>
  );
}
