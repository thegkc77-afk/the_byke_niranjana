import React from 'react';

export default function ExperienceSection() {
  const experiences = [
    {
      icon: 'eco',
      title: 'Peaceful Surroundings',
      desc: 'Relax away from the noise. Meditative lawn paths, birdsong, and shady canopies designed for quiet thought.',
      tag: 'Calm Grounds'
    },
    {
      icon: 'restaurant',
      title: 'Restaurant & Café',
      desc: 'Enjoy food and refreshments during your stay. Nourishing vegetarian fare prepared with warmth.',
      tag: 'Sattvic Flavors'
    },
    {
      icon: 'celebration',
      title: 'Banquets & Events',
      desc: 'Spaces for celebrations and gatherings. Elegant indoor and garden settings accommodating up to 350 guests.',
      tag: 'Social Occasions'
    },
    {
      icon: 'temple_hindu',
      title: 'Explore Bodhgaya',
      desc: 'Discover the spiritual and cultural surroundings. Temple tours, heritage guidance, and smooth transfers.',
      tag: 'Pilgrimage Concierge'
    }
  ];

  return (
    <section className="w-full py-24 bg-surface relative border-b border-surface-variant/40">
      <div className="max-w-[1320px] mx-auto px-gutter">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-space-xs">
            <span className="font-label-md text-label-md uppercase tracking-[0.25em] text-secondary font-semibold">
              Holistic Wellbeing
            </span>
            <h2 className="font-display-lg text-display-lg text-primary tracking-tight font-serif">
              More Than Just a Stay
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md font-light leading-relaxed">
            Thoughtfully curated amenities crafted for spiritual reflection, family joy, and holistic comfort.
          </p>
        </div>

        {/* Four Experience Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="p-8 bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col justify-between min-h-[260px] group border border-surface-variant/50"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-2xl">{exp.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-serif">
                  {exp.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {exp.desc}
                </p>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary pt-4 font-semibold border-t border-surface-variant/40">
                {exp.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
