import React from 'react';

export default function DiningSection({ onReserveTable }) {
  return (
    <section className="w-full py-24 bg-surface-container-high relative overflow-hidden" id="dining">
      <div className="max-w-[1320px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Side 1: Large Gourmet Dining Photo */}
          <div className="lg:col-span-7 relative">
            <div className="p-3 bg-surface shadow-[0_12px_32px_-8px_rgba(36,53,42,0.1)] border border-surface-variant">
              <div className="overflow-hidden aspect-[16/10]">
                <img 
                  alt="Gourmet Sattvic dining experience at The Byke Niranjana Resort" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmjlFL3VBDbHzHj1Kgv0EnwhAQ7Gw39ZThZP42KhkpCGbMJXLNhOl6Q6CMdGCiJFPmlDE4KxYcVULZJCjl-nqeyaYxVmbi-HykTloiHEPQ-Uc6rp7NVasXbqFNopSmuaH1h0LBVVpuijjhUvoyalB1CYvKddZiAUK8BVaSbKijRIFssnPQ-GunQQLMhQci2Msp655BqTIAev8oXK_S8OXAhw6LlQW3ILaDUllMxyWVG6mRwNH22oD-" 
                />
              </div>
            </div>
          </div>

          {/* Side 2: Dining Editorial Copy */}
          <div className="lg:col-span-5 space-y-space-md">
            <div className="space-y-space-xs">
              <span className="font-label-md text-label-md uppercase tracking-[0.25em] text-secondary font-semibold">
                Dining At The Resort
              </span>
              <h2 className="font-display-lg text-display-lg text-primary tracking-tight font-serif">
                Dine. Relax. Enjoy.
              </h2>
              <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Farm Fresh Bodhgaya
              </div>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-light">
              Enjoy delicious food and refreshing beverages in a comfortable setting. Prepared with fresh regional harvest and sattvic care to nourish both body and spirit.
            </p>

            {/* Dining Attributes */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface font-medium">
                  Pure Vegetarian &amp; Sattvic Specialties
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface font-medium">
                  Freshly Brewed Tea, Coffee &amp; Herbal Infusions
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface font-medium">
                  Serene Open-Air Veranda Seating
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button 
                onClick={onReserveTable}
                className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.2em] px-8 py-4 transition-colors hover:bg-secondary font-semibold"
              >
                Explore Dining
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
