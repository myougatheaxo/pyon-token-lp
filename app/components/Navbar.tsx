import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Waves } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D0D1A]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Waves className="w-6 h-6 sm:w-8 sm:h-8 text-[#00E5FF]" />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FF6B8A] to-[#A855F7] bg-clip-text text-transparent">
            $PYON
          </span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-8">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="hidden sm:block text-[#A0ADB8] hover:text-white transition-colors"
          >
            Docs
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hidden sm:block text-[#A0ADB8] hover:text-white transition-colors"
          >
            FAQ
          </button>
          <Button className="bg-gradient-to-r from-[#FF6B8A] to-[#A855F7] hover:opacity-90 transition-opacity text-sm sm:text-base px-4 sm:px-6">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
}