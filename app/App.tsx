import { LanguageProvider } from './components/LanguageContext';
import { Navbar } from './components/Navbar';
import { UnderwaterBackground } from './components/UnderwaterBackground';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Utility } from './components/Utility';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
    <div className="min-h-screen bg-[#0D0D1A] text-white overflow-x-hidden">
      <UnderwaterBackground />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Utility />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
    </LanguageProvider>
  );
}

export default App;
