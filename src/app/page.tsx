import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Footer } from "./_components/footer";
import './globals.css'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services/>
      <Footer/>
    </main>
  );
}
