import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 h-16 glass">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white font-['Inter']">D</div>
        <span className="text-xl font-semibold tracking-tight uppercase italic text-white">DevFolio.in</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#how" className="hover:text-white transition-colors">How it Works</a>
        <a href="#templates" className="hover:text-white transition-colors">Templates</a>
        <a href="#pricing" className="hover:text-white transition-colors text-indigo-400">Pricing</a>
        <a href="#pay" className="hover:text-white transition-colors">Pay & Activate</a>
        <a href="#owner" className="hover:text-white transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-xs uppercase tracking-widest text-gray-400 font-bold hover:text-white transition-colors" onClick={() => {}}>
          Support
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tighter hover:bg-gray-200 transition-all">
          Sign Up Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
