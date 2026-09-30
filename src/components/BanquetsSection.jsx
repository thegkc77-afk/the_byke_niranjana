import React from 'react';

export default function BanquetsSection({ onPlanEvent }) {
  return (
    <section className="w-full py-28 bg-primary-container text-surface relative overflow-hidden" id="events">
      {/* Subtle Ambient Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffd1ac_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-[1320px] mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Content */}
          <div className="lg:col-span-6 space-y-space-md">
            <div className="space-y-space-xs">
              <span className="font-label-md text-label-md uppercase tracking-[0.25em] text-on-tertiary-container font-semibold">
                Special Gatherings
              </span>
              <h2 className="font-display-lg text-display-lg text-surface tracking-tight leading-tight font-serif">
                Celebrate Your Special Moments
              </h2>
            </div>

            <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed font-light">
              A comfortable setting for family gatherings, celebrations, events, and group occasions amidst tranquil landscaped greens.
            </p>

            {/* Banqueting Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-surface/5 backdrop-blur-sm border border-surface/10">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container mb-0.5 font-semibold">
                  Capacity
                </p>
                <p className="font-body-md text-body-md text-surface font-medium">Up to 350 Guests</p>
              </div>
              <div className="p-3.5 bg-surface/5 backdrop-blur-sm border border-surface/10">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container mb-0.5 font-semibold">
                  Catering
                </p>
                <p className="font-body-md text-body-md text-surface font-medium">Custom Banqueting Menus</p>
              </div>
              <div className="p-3.5 bg-surface/5 backdrop-blur-sm border border-surface/10">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container mb-0.5 font-semibold">
                  Technology
                </p>
                <p className="font-body-md text-body-md text-surface font-medium">Audio-Visual Setup</p>
              </div>
              <div className="p-3.5 bg-surface/5 backdrop-blur-sm border border-surface/10">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container mb-0.5 font-semibold">
                  Support
                </p>
                <p className="font-body-md text-body-md text-surface font-medium">On-site Event Coordinator</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onPlanEvent}
                className="inline-flex items-center justify-center bg-tertiary-container text-tertiary-fixed font-label-md text-label-md uppercase tracking-[0.2em] px-8 py-4 transition-colors hover:bg-secondary hover:text-on-secondary font-semibold"
              >
                Plan Your Event
              </button>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-surface/10 text-surface font-label-md text-label-md uppercase tracking-[0.2em] px-8 py-4 transition-colors hover:bg-surface hover:text-primary border border-surface/20 font-semibold"
              >
                Contact Us
              </a>
            </div>

          </div>

          {/* Right: Grand Event Photo with Fairy Lighting */}
          <div className="lg:col-span-6">
            <div className="p-3 bg-surface/10 backdrop-blur-sm shadow-2xl border border-surface/20">
              <div className="overflow-hidden aspect-[16/10]">
                <img 
                  alt="Evening banquet and celebration lawn at The Byke Niranjana Resort" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-jP3vI6Qp7cODuGDl4G9eS5d7oUm1jsECGFIdvJgmj9_YPvCgq9TXlypIyOzVOa9Fdy9bm67qSqgkpynfTOP0k5gFiRSedi9S3yeswHOtcrFo1GuVhB_4kXhkcn3psMwISt0JqEF54YPrJQ4llkHBysft9cB0wxupVsfn2d5uSGweA7Ht9ZCZf-gViLY-b7uFU-Vfruy11C37CyweJX_6Jczdpq0ks3uYyJh0xE7WXgsyNMd9_suI" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
