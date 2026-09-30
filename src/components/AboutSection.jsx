import React from 'react';

export default function AboutSection({ onExploreMore }) {
  return (
    <section className="w-full py-24 bg-surface relative overflow-hidden" id="about-sanctuary">
      <div className="max-w-[1320px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Vertical Image with Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-3 bg-surface-container-low shadow-[0_12px_32px_-8px_rgba(36,53,42,0.08)] border border-surface-variant">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img 
                  alt="Veranda architecture of The Byke Niranjana Resort" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlxz5MzoapKG9a6rUTGATfIzitMX1Dzzfixe6NxGJXCdJM45PnJTYGngsdFZ277WawinfqygdZay1iVNICt9XdWFBvZHd6DCmY5Bp54tpbpZK8zwe8ZugcjuIaKLi_uRPKFnz13X3uvXi9KFxIDP17V10eaC6RFXHO3JZYw9pinqxz9JlHptgKciLx6UMImSMZY1X4GW8p-Wxo5hV-5alXPNSLWr9R-_WWWGt5gKOWz7CHu5LWbks7" 
                />
              </div>
              
              {/* Inset Badge */}
              <div className="absolute -bottom-5 -right-5 bg-primary-container text-surface px-6 py-4 shadow-xl hidden sm:flex flex-col items-center justify-center border border-on-tertiary-container/30">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-tertiary-container">
                  Est. Bodhgaya
                </span>
                <span className="font-headline-sm text-headline-sm text-surface font-serif font-light">
                  Sanctuary
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-space-md lg:pl-6">
            <div className="space-y-space-xs">
              <div className="flex items-center gap-2 text-secondary">
                <span className="w-6 h-[1px] bg-secondary"></span>
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] font-semibold">
                  Welcome to The Byke Niranjana
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-serif">
                A Peaceful Stay in Bodhgaya
              </h2>
            </div>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
              The Byke Niranjana Resort offers a comfortable and relaxing stay for travelers visiting Bodhgaya. Discover peaceful surroundings, comfortable accommodation, dining, and spaces for gatherings.
            </p>
            
            <p className="font-body-md text-body-md text-on-surface-variant/90 leading-relaxed">
              Nestled amid whispering foliage, our property bridges traditional Indian warm-hearted service with mindful quietude. Whether you arrive on pilgrimage to the revered Mahabodhi Temple, seek an unhurried family retreat, or convene with fellow seekers, every corner of our resort inspires inner quiet.
            </p>
            
            <div className="pt-2">
              <button 
                onClick={onExploreMore}
                className="inline-flex items-center gap-3 font-label-md text-label-md uppercase tracking-[0.2em] text-primary hover:text-secondary group transition-colors focus:outline-none"
              >
                <span className="pb-1 border-b border-on-tertiary-container group-hover:border-secondary font-semibold">
                  Discover The Resort
                </span>
                <span className="material-symbols-outlined text-sm transform transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Key Highlights Counter Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-4 bg-surface-container-low transition-colors hover:bg-surface-container border border-surface-variant/50">
                <span className="material-symbols-outlined text-secondary text-2xl mb-1">spa</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1 font-serif">100%</h3>
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                  Pure Vegetarian Kitchen
                </p>
              </div>
              <div className="p-4 bg-surface-container-low transition-colors hover:bg-surface-container border border-surface-variant/50">
                <span className="material-symbols-outlined text-secondary text-2xl mb-1">deck</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1 font-serif">Private</h3>
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                  Lush Landscaped Verandas
                </p>
              </div>
              <div className="p-4 bg-surface-container-low transition-colors hover:bg-surface-container border border-surface-variant/50">
                <span className="material-symbols-outlined text-secondary text-2xl mb-1">temple_buddhist</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1 font-serif">Minutes</h3>
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                  Walking to Sacred Shrines
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
