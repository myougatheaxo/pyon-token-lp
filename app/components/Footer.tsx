import { Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left side - Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-[#FF6B8A] to-[#A855F7] bg-clip-text text-transparent">
                $PYON
              </span>
            </div>
            <p className="text-[#A0ADB8] max-w-md leading-relaxed">
              Supporting the TropicalFishAItuber ecosystem through community-driven token rewards.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00E5FF]/50 flex items-center justify-center transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-[#A0ADB8] group-hover:text-[#00E5FF] transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#A855F7]/50 flex items-center justify-center transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 text-[#A0ADB8] group-hover:text-[#A855F7] transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Right side - Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-white">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">Whitepaper</a></li>
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">Brand Kit</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-white">Community</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">Twitter/X</a></li>
                <li><a href="#" className="text-[#A0ADB8] hover:text-white transition-colors">Telegram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="pt-8 border-t border-white/5 space-y-4">
          <div className="p-6 rounded-xl bg-[#FF6B8A]/5 border border-[#FF6B8A]/20">
            <p className="text-sm text-[#A0ADB8] leading-relaxed">
              <span className="font-medium text-[#FF6B8A]">Risk Disclosure:</span> Cryptocurrency investments 
              carry significant risk. $PYON is a fan engagement token and should not be considered a financial 
              investment. Token value may fluctuate and you may lose your entire investment. This is not 
              financial advice. Figma Make is not intended for collecting PII or securing sensitive data.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#A0ADB8]">
            <p>© 2026 $PYON. All rights reserved.</p>
            <p>Not financial advice. Do your own research.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
