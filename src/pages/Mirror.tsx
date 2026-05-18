import React from 'react';

export const Mirror = () => {
  return (
    <div className="min-h-screen bg-cream text-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-rose text-[10px] uppercase tracking-[6px] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Introducing
          </h4>
          <h1 className="font-playfair text-5xl md:text-7xl mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            The Mirror
          </h1>
          <p className="max-w-2xl mx-auto text-dark/70 font-light leading-relaxed mb-12 text-sm md:text-base">
            Reflecting your inner essence through a curated journey of wellness and transformation. 
            A space designed to reveal the most authentic version of yourself.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-dark text-cream px-10 py-4 text-[10px] uppercase tracking-[2px] hover:bg-rose transition-colors duration-500">
              Begin Analysis
            </button>
          </div>
        </div>
      </section>

      {/* Visual Placeholder Section */}
      <section className="bg-dark text-cream py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto border border-rose/20 p-20 flex items-center justify-center">
          <div>
            <h2 className="font-playfair text-3xl mb-4 italic">Coming Soon</h2>
            <p className="text-cream/50 font-light tracking-widest text-[10px] uppercase">
              Interactive AI Skin Reflection Experience
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};