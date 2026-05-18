import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-cream text-dark">
      {/* Philosophy Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-rose text-[9px] uppercase tracking-[5px] mb-8 font-medium">
            Our Philosophy
          </h4>
          <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-10 italic">
            "Beauty is not a mask you wear, but a reflection of the harmony between your inner peace and outer vitality."
          </h2>
          <div className="w-12 h-[1px] bg-rose/30 mx-auto mb-10"></div>
          <p className="text-dark/60 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
            At RARE, we believe in the power of 'Relaxed & Refresh'. Our approach combines 
            advanced technology with wellness wisdom to create a sanctuary 
            that honors the essence of who you are. We don't just treat the surface; we celebrate the soul.
          </p>
        </div>
      </section>

      {/* Brand Values */}
      <section className="bg-dark text-cream py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="font-playfair text-xl mb-4">Mindful</h3>
            <p className="text-[11px] opacity-60 font-light tracking-wide leading-relaxed">Curating experiences that respect your time and mental space.</p>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">Authentic</h3>
            <p className="text-[11px] opacity-60 font-light tracking-wide leading-relaxed">Prioritizing real results and transparent communication above all.</p>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">Innovative</h3>
            <p className="text-[11px] opacity-60 font-light tracking-wide leading-relaxed">Using the Mirror AI technology to bridge the gap between data and feeling.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;