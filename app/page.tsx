import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Menu } from '@/components/Menu';
import { About } from '@/components/About';
import { Location } from '@/components/Location';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { StoreStatusModal } from '@/components/StoreStatusModal';
import { AcaiBuilder } from '@/components/AcaiBuilder';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <StoreStatusModal />
      <AcaiBuilder />
      <Header />
      <Hero />
      <Menu />
      <About />
      <Location />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
