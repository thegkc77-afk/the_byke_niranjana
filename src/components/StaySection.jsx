import React from 'react';

export default function StaySection({ onSelectRoom, onBookRoom }) {
  const rooms = [
    {
      id: 'cottage',
      title: 'Wooden Cottage',
      badge: 'Signature Cottage',
      badgeColor: 'bg-primary text-on-primary',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ0-6RcHjlL1Gr-HAwWanXyCUfkTFkYY6HEAYxT07QT11m8OpkvhOxAQ0Tj5BxnRPvB27-Cj3R2L_2BKRXxOSGSxVZCCCmSa4zmDciyrHLIpmO6k_WcOj3ghHgKbbDzckEjKzd1LkVkAnzZJTqcDVHxqVhlgWZU__cxajWwavNqp__YzT_LHMCZrXW9ij0CoMa2_BvTJDKLa1ui1bzPnKPM3kOHjng0kz1pVI1GBFnPgunpPXZnJF8',
      description: 'Natural surroundings • Comfortable private stay • Teak Balcony',
      price: '₹4,500',
      priceNote: '/ night',
      details: 'Handcrafted timber cottage featuring plush king-size bedding, private teak wood veranda overlooking tranquil resort gardens, organic aromatherapy bath amenities, air conditioning, and complimentary Wi-Fi.',
      amenities: ['King Bed', 'Teak Balcony', 'AC & Heating', 'Free Wi-Fi', '24h Room Service', 'Garden View']
    },
    {
      id: 'bungalow',
      title: 'Bungalow Rooms',
      badge: 'Spacious Living',
      badgeColor: 'bg-secondary text-on-secondary',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA93kQlITHa2uC7lACAJY-ybQHhnFXItVgKUYGh3j11DZ3mUsgXtrbvSeek5j3Pyv3yEriSB5KVFUsq10TbBpHI1VFc3lLvZIhvXj6w9F-uOOdLEj9gIXltjsIlsa7hb_1rWpy10StRuXbUydsREHA77WbDkax3Cpm9E3vdjtdhkxP91mifNTqj-sdRamJlfiSnvQN6xPvrsvb3W1oWTQzCDyO9yD0dAbyClQoKQIbiiVYZpUl3m1Lk',
      description: 'Spacious and comfortable accommodation • Ideal for families • Garden View',
      price: '₹3,800',
      priceNote: '/ night',
      details: 'Generous bungalow room with twin queen beds, expansive glass windows facing green lawns, cozy seating area, tea/coffee maker, and modern marble bathroom.',
      amenities: ['2 Queen Beds', 'Garden Patio', 'Climate Control', 'LED TV', 'Mini Fridge', 'Work Desk']
    },
    {
      id: 'family',
      title: 'Family & Group Stay',
      badge: 'Group Suites',
      badgeColor: 'bg-primary-container text-on-tertiary-container',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlxz5MzoapKG9a6rUTGATfIzitMX1Dzzfixe6NxGJXCdJM45PnJTYGngsdFZ277WawinfqygdZay1iVNICt9XdWFBvZHd6DCmY5Bp54tpbpZK8zwe8ZugcjuIaKLi_uRPKFnz13X3uvXi9KFxIDP17V10eaC6RFXHO3JZYw9pinqxz9JlHptgKciLx6UMImSMZY1X4GW8p-Wxo5hV-5alXPNSLWr9R-_WWWGt5gKOWz7CHu5LWbks7',
      description: 'Comfortable options for groups and families • Interconnecting verandas • Peaceful setting',
      price: 'Custom Tariff',
      priceNote: 'Flexible Plans',
      details: 'Interconnecting cottage suites suited for multi-generational families, pilgrimage delegations, and retreats. Includes spacious common verandas and dedicated hospitality assistance.',
      amenities: ['Multiple Bedrooms', 'Private Veranda', 'Dedicated Concierge', 'Sattvic Meal Options', 'Group Transfers']
    }
  ];

  return (
    <section className="w-full py-24 bg-surface-container-low relative" id="stay-options">
      <div className="max-w-[1320px] mx-auto px-gutter">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-space-xs mb-16">
          <span className="font-label-md text-label-md uppercase tracking-[0.25em] text-secondary font-semibold">
            Mindful Comfort & Living
          </span>
          <h2 className="font-display-lg text-display-lg text-primary tracking-tight font-serif">
            Stay Your Way
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
            Comfortable spaces designed for relaxing stays in Bodhgaya.
          </p>
        </div>

        {/* 3 Accommodation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="bg-surface-container-lowest flex flex-col justify-between shadow-[0_12px_32px_-8px_rgba(36,53,42,0.06)] border border-surface-variant/60 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={room.image} 
                />
                <div className={`absolute top-4 left-4 ${room.badgeColor} px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest font-semibold shadow-sm`}>
                  {room.badge}
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-space-md">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-headline-md text-headline-md text-primary font-serif">
                      {room.title}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {room.description}
                  </p>
                  <div className="mt-4 pt-4 bg-surface-container-low p-3 border border-surface-variant/40">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                      {room.priceNote === 'Flexible Plans' ? 'Flexible Plans' : 'Starting Tariff'}
                    </span>
                    <p className="font-headline-sm text-headline-sm text-primary font-serif">
                      {room.price} {room.priceNote !== 'Flexible Plans' && <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">{room.priceNote}</span>}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button 
                    onClick={() => onSelectRoom(room)}
                    className="w-full inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.18em] py-3.5 px-4 transition-colors hover:bg-secondary font-semibold"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => onBookRoom(room)}
                    className="w-full inline-flex items-center justify-center bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-[0.15em] py-2 px-4 transition-colors hover:bg-surface-variant font-semibold"
                  >
                    Reserve Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
