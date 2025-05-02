import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-cataliza-bg min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
