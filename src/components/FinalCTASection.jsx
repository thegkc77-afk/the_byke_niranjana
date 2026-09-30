import React from 'react';

export default function FinalCTASection({ onOpenBooking }) {
  return (
    <section className="relative w-full py-28 bg-primary text-surface overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <img 
          alt="The Byke Niranjana Resort Twilight" 
          className="w-full h-full object-cover object-center" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbF9dgN8f3Dbg-YKOTpV5sOZnJOHUXxW_Uu6kfKb5czx1EmUPycMq4JkAGjsyb2MAQ70lr7A03o87c8ohV4posT6cz0YYALVAIKC05J6vz44UGYwYvg-MTqcvQhGYa2NG97FNLOQuYcObgWv_2s_OG2WAYsDEtOC7R5Ggmv9gSYTuH-4SkHeVFNPLm2ShutbGetXtrLGy9HLLq_8fKoHSVyqxeIF3yFR-c-3IH6HAo7DDirPkLFMH" 
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-gutter text-center space-y-space-md">
        <div className="max-w-3xl mx-auto space-y-space-sm">
          <span className="font-label-md text-label-md uppercase tracking-[0.25em] text-tertiary-fixed font-semibold">
            Peaceful Stays In Bodhgaya
          </span>
          <h2 className="font-display-lg text-display-lg text-surface tracking-tight font-serif">
            Your Bodhgaya Stay Starts Here
          </h2>
          <p className="font-body-lg text-body-lg text-surface-container-high max-w-xl mx-auto font-light leading-relaxed">
            Experience comfort, peace, and warm hospitality at The Byke Niranjana. Reserve your wooden cottage or suite today.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center bg-tertiary-container text-tertiary-fixed font-label-md text-label-md uppercase tracking-[0.2em] px-10 py-5 transition-all duration-300 hover:bg-secondary hover:text-on-secondary shadow-xl font-semibold"
          >
            Book Your Stay
          </button>
          <a 
            href="tel:8603850622" 
            className="inline-flex items-center justify-center bg-surface/15 backdrop-blur-sm text-surface font-label-md text-label-md uppercase tracking-[0.2em] px-8 py-5 transition-all duration-300 hover:bg-surface hover:text-primary border border-surface/20 font-semibold"
          >
            <span className="material-symbols-outlined mr-2 text-sm">phone</span>
            Call 8603850622
          </a>
        </div>
      </div>
    </section>
  );
}
