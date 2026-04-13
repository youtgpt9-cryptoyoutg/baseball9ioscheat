import React, { useState, useEffect } from 'react';
import { Download, ShieldCheck, Zap, Smartphone, ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [downloadState, setDownloadState] = useState<'idle' | 'processing' | 'done'>('idle');
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('');

  const startDownload = () => {
    if (downloadState !== 'idle') return;
    
    setDownloadState('processing');
    setProgress(0);
    setStatusText('Initializing connection...');

    const steps = [
      { p: 15, text: 'Locating Baseball 9 Mod IPA...', time: 1000 },
      { p: 35, text: 'Bypassing iOS security protocols...', time: 2500 },
      { p: 60, text: 'Injecting Baseball 9 unlimited coins ios script...', time: 4000 },
      { p: 85, text: 'Finalizing Baseball 9 hack iphone...', time: 5500 },
      { p: 100, text: 'Download Ready!', time: 7000 },
    ];

    steps.forEach(({ p, text, time }) => {
      setTimeout(() => {
        setProgress(p);
        setStatusText(text);
        if (p === 100) {
          setTimeout(() => setDownloadState('done'), 500);
        }
      }, time);
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-green-500 selection:text-black">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://i.postimg.cc/CLB2Zn7y/unnamed-(1).png" alt="Baseball 9 Logo" className="w-10 h-10 rounded-xl shadow-lg" referrerPolicy="no-referrer" />
            <span className="font-bold text-xl tracking-tight">B9<span className="text-green-500">MODS</span></span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-green-400 transition-colors">Features</a>
            <a href="#download" className="hover:text-green-400 transition-colors">Download</a>
            <a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
            <img src="https://i.postimg.cc/CLB2Zn7y/unnamed-(1).png" alt="Baseball 9" className="w-32 h-32 rounded-3xl shadow-2xl mb-8 border border-slate-800" referrerPolicy="no-referrer" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-mono mb-6 border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              STATUS: WORKING (UPDATED TODAY)
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Baseball 9 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Cheats iPhone</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get the ultimate <strong className="text-slate-200">Baseball 9 mod iOS</strong>. Unlock unlimited coins, gems, and energy instantly with our exclusive <strong className="text-slate-200">Baseball 9 mod ipa</strong>. No jailbreak required.
            </p>
            
            <a href="#download" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)]">
              <Download className="w-5 h-5" />
              Start Generator
            </a>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 px-6 border-y border-slate-800 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">Why use our <span className="text-green-500">Baseball 9 Hacks iOS</span>?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Dominate the league without spending a dime. Our tool is designed specifically for iOS devices.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-colors">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Baseball 9 Unlimited Coins iOS</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Instantly generate millions of coins and gems. Upgrade your players to max tier instantly and build the ultimate dream team.</p>
              </div>
              
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-colors">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Baseball 9 Mod APK iOS</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Fully compatible with all iPhones and iPads. Our custom IPA file works flawlessly on the latest iOS versions without revokes.</p>
              </div>

              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-colors">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Safe & Secure</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Built-in anti-ban protection. Your account remains 100% safe while using our Baseball 9 ios cheat system.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots / Proof Section */}
        <section id="proof" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">See It In <span className="text-green-500">Action</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Real screenshots from users who have successfully used our Baseball 9 hacks iOS.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "https://i.postimg.cc/jdw1WnXB/9s-En-YNzbwe-X1tjv5Jwv32ylk-EDr-BMV3-Kj-K9EO9U-b-g-Ncp-AXZyr4c07Ov-0Ik-FZmds-w1052-h592-rw.png",
                "https://i.postimg.cc/WbFyDq8P/a-E4icnl-b-VQe-Mk7bf-Pe8u-Xbzbm-F357tc-Ddo-GLbdf-GZZla-Tc-Pc4hb-Ua-UKG4y-AIey6Dg-w1052-h592-rw.png",
                "https://i.postimg.cc/HscNJ8z1/Elegant-Summer-Fashion-Blog-Banner-Beige.png",
                "https://i.postimg.cc/SN2PXYdF/Tx-RNv-QI9egz9WQ-q-Gj-U6OOf-MB857cn-WABWKEnj-Obvvdm-FT4vyy-RBi-QRx-NJRo6fa-U-M-w1052-h592-rw.png"
              ].map((src, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-slate-800 hover:border-green-500/50 transition-all group h-64 md:h-80">
                  <img src={src} alt={`Baseball 9 Mod iOS Proof ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download / Generator Section */}
        <section id="download" className="py-24 px-6 relative">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
              
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">Baseball 9 Hack iPhone</h2>
                <p className="text-slate-400">Connect to our secure servers to inject the mod.</p>
              </div>

              <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-slate-400">Target Device:</span>
                  <span className="text-sm font-mono text-green-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> iOS Detected
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-slate-400">App Version:</span>
                  <span className="text-sm font-mono text-slate-200">Latest (v3.5.0+)</span>
                </div>
              </div>

              {downloadState === 'idle' && (
                <button 
                  onClick={startDownload}
                  className="w-full bg-green-500 hover:bg-green-400 text-black font-bold text-lg py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Inject Mod Now
                </button>
              )}

              {downloadState === 'processing' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-sm font-mono">
                    <span className="text-green-400 animate-pulse">{statusText}</span>
                    <span className="text-slate-400">{progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-green-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-center">
                    <Loader2 className="w-6 h-6 text-green-500 animate-spin" />
                  </div>
                </div>
              )}

              {downloadState === 'done' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Injection Ready!</h3>
                    <p className="text-slate-400 text-sm">To prevent bot abuse, please complete a quick human verification to reveal the download link.</p>
                  </div>
                  <button 
                    onClick={() => {
                      if (typeof (window as any)._Kx === 'function') {
                        (window as any)._Kx();
                      } else {
                        console.error("Verification script not loaded");
                      }
                    }}
                    className="w-full bg-white hover:bg-slate-200 text-black font-bold text-lg py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    Verify Now <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section id="faq" className="py-20 px-6 bg-slate-900/30 border-t border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">Frequently Asked <span className="text-green-500">Questions</span></h2>
              <p className="text-slate-400">Everything you need to know about our Baseball 9 hacks iOS.</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold mb-2 text-green-400">How do I use the Baseball 9 cheats iPhone?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Simply click the "Inject Mod Now" button above. Our web-based generator will connect to your device and install the Baseball 9 mod ipa directly without requiring a computer.</p>
              </div>
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold mb-2 text-green-400">Is this Baseball 9 mod iOS safe?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Yes! Our Baseball 9 ios cheat uses advanced encryption and anti-ban protocols to ensure your account remains 100% secure while generating unlimited coins.</p>
              </div>
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold mb-2 text-green-400">Do I need to jailbreak for the Baseball 9 hack iphone?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">No jailbreak is required. We use a unique sideloading method that allows the Baseball 9 mod apk ios equivalent to run on standard, non-jailbroken Apple devices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Text Block */}
        <section className="py-16 px-6 bg-slate-950 border-t border-slate-900">
          <div className="max-w-4xl mx-auto prose prose-invert prose-slate prose-a:text-green-500">
            <h2 className="text-2xl font-bold mb-4">The Ultimate Baseball 9 Cheats iPhone Guide</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              If you've been searching for reliable <strong>baseball 9 cheats iphone</strong>, you've come to the right place. Building a championship team takes time, but with our <strong>baseball 9 hacks ios</strong>, you can bypass the grind. Our custom <strong>baseball 9 mod ios</strong> is designed to give you an unfair advantage, allowing you to recruit prime players instantly.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Many players look for a <strong>baseball 9 mod ipa</strong> to sideload onto their devices. We provide the most stable version that guarantees <strong>baseball 9 unlimited coins ios</strong>. Whether you need to max out your pitcher's stats or buy the best gear, this <strong>baseball 9 hack iphone</strong> has you covered.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Stop wasting money on in-app purchases. While Android users often search for a <strong>baseball 9 mod apk ios</strong> equivalent, our tool is built natively for Apple devices. Experience the best <strong>baseball 9 ios cheat</strong> available today and take your team to the World Class league!
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center border-t border-slate-900 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} B9Mods. This site is not affiliated with playus soft.</p>
      </footer>
    </div>
  );
}
