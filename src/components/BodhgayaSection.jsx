import React from 'react';

export default function BodhgayaSection() {
  const attractions = [
    {
      title: 'Mahabodhi Temple',
      sub: 'UNESCO World Heritage Site',
      dist: '900 Meters from Resort',
      time: '12 min peaceful walk',
      icon: 'directions_walk',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXmIJsEXM5oh3x6QnClSdMhQKdPBju779yWI3P54c2zbv5Q63Dtvd4cX6HTLtyAcNQfCuqUZd2-nAWZUhZgmzoVNNKthc70tEzOVNPWxP9XRezUR_knytbZy_6BnquimNgPoDskvRlaFkuEX1CxiKt5yfqt-RnmHjcvgQR8n8gbLWs_SmltyT2gHw75SkTiyi_66Bd1HhvkfuEY0BprpuW4kw5m2FqwNvdDwhvDWUp0LDxv6U0sscU',
      desc: 'The hallowed sanctuary marking the sacred Bodhi Tree, beneath which Prince Siddhartha attained Enlightenment. Experience morning meditation chants and serene circumambulation.'
    },
    {
      title: 'The Great Buddha Statue',
      sub: 'Monolithic Wonder',
      dist: '1.4 km from Resort',
      time: '5 min resort shuttle',
      icon: 'directions_car',
      image: null,
      symbol: 'temple_buddhist',
      desc: 'Majestic 80-foot stone statue surrounded by peaceful Japanese-style gardens and ten carved disciple statues. A monument of immense poise, meditative majesty, and artistic elegance.'
    },
    {
      title: 'International Monasteries',
      sub: 'Global Traditions',
      dist: 'Within 2 km Radius',
      time: 'Curated day itineraries',
      icon: 'explore',
      image: null,
      symbol: 'public',
      desc: 'Explore Thai, Japanese (Indosan Nipponji), Bhutanese, and Tibetan architectural treasures across the sacred town, presenting a living panorama of global Buddhist arts.'
    }
  ];

  return (
    <section className="w-full py-24 bg-surface relative" id="bodhgaya">
      <div className="max-w-[1320px] mx-auto px-gutter">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-space-xs mb-16">
          <span className="font-label-md text-label-md uppercase tracking-[0.25em] text-secondary font-semibold">
            Sacred Geography
          </span>
          <h2 className="font-display-lg text-display-lg text-primary tracking-tight font-serif">
            Your Stay in Bodhgaya
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
            Stay comfortably while experiencing one of India's most important spiritual destinations.
          </p>
        </div>

        {/* 3 Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((item, idx) => (
            <div 
              key={idx}
              className="bg-surface-container-low flex flex-col justify-between shadow-[0_8px_24px_-4px_rgba(36,53,42,0.06)] border border-surface-variant/60 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-surface-container-high flex items-center justify-center">
                {item.image ? (
                  <img 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={item.image} 
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-md">
                    <span className="material-symbols-outlined text-4xl">{item.symbol}</span>
                  </div>
                )}
                
                <div className="absolute bottom-3 left-3 bg-primary/90 text-surface px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  {item.dist}
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                    {item.sub}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-1 mb-2 font-serif">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-surface-variant/50 flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  <span className="material-symbols-outlined text-base text-secondary">{item.icon}</span>
                  <span>{item.time}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
