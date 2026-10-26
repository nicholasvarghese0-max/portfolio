import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <div className="mx-auto max-w-[1440px]">
        <About />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
