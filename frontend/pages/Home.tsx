import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import Faq from "@/components/Faq";
import Features from "@/components/Features";

import UpcomingMatches from "@/components/UpcomingMatches";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="text-white min-h-screen relative">
      <Header />
      <Hero />
      <Navbar />
      <Features />
      <UpcomingMatches />
      <Faq />
      <Footer />
    </main>
  );
};

export default Home;
