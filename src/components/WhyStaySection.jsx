import React from 'react';

export default function WhyStaySection() {
  const benefits = [
    {
      icon: 'yard',
      title: 'Peaceful Surroundings',
      desc: 'Sprawling landscaped green lawns and tranquil stone walkways providing complete sanctuary from town center bustling.'
    },
    {
      icon: 'bed',
      title: 'Comfortable Rooms',
      desc: 'Plush custom mattresses, immaculate white linen, modern climate control, and generous ensuite bathrooms for deep rejuvenation.'
    },
    {
      icon: 'holiday_village',
      title: 'Wooden Cottages',
      desc: 'Bespoke eco-conscious timber architecture providing warm acoustic privacy, natural wood aroma, and private sitting verandas.'
    },
    {
      icon: 'local_dining',
      title: 'Restaurant & Café',
      desc: 'Authentic pure vegetarian culinary journey featuring organic produce, sattvic preparation, and delightful morning teas.'
    },
    {
      icon: 'diversity_3',
      title: 'Banquet Facilities',
      desc: 'Comprehensive indoor hall and open manicured lawns equipped for spiritual congresses, weddings, and memorable family milestones.'
    },
    {
      icon: 'pin_drop',
      title: 'Bodhgaya Location',
      desc: 'Unbeatable quiet proximity—under 10 minutes to the Mahabodhi Temple, with convenient access to Gaya Airport (GAY).'
    }
  ];

  return (
    <section className="w-full py-24 bg-surface relative">
      <div className="max-w-[1320px] mx-auto px-gutter">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-space-xs mb-16">
          <span className="font-label-md text-label-md uppercase tracking-[0.25em] text-secondary font-semibold">
            The Byke Standard
          </span>
          <h2 className="font-display-lg text-display-lg text-primary tracking-tight font-serif">
            Why Stay With Us
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
            Quiet luxury grounded in genuine Indian warmth and spiritual stillness.
          </p>
        </div>

        {/* 6 Minimalist Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => (
            <div 
              key={idx}
              className="p-8 bg-surface-container-low hover:bg-surface-container transition-all duration-300 border border-surface-variant/50 group"
            >
              <span className="material-symbols-outlined text-3xl text-secondary mb-4 group-hover:scale-110 transition-transform block">
                {b.icon}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-serif">
                {b.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
