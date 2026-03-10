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
      {/* DEMOウォーターマーク */}
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        <span
          className="text-white/10 font-black select-none"
          style={{ fontSize: '20vw', transform: 'rotate(-30deg)', letterSpacing: '0.1em' }}
        >
          DEMO
        </span>
      </div>
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
