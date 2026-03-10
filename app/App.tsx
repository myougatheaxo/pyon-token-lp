import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Utility } from './components/Utility';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D1A] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Utility />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
