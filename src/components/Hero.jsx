import React, { useState } from 'react';

export default function Hero({ onSearchAvailability, onExploreResort }) {
  const [checkIn, setCheckIn] = useState('2025-03-15');
  const [checkOut, setCheckOut] = useState('2025-03-18');
  const [accommodation, setAccommodation] = useState('cottage');
  const [guests, setGuests] = useState('2');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchAvailability({ checkIn, checkOut, accommodation, guests });
  };

  return (
    <section className="relative w-full -mt-20 min-h-[92vh] flex flex-col justify-between overflow-hidden bg-primary" id="home">
      
      {/* Hero Background Image with Editorial Scrim */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="The Byke Niranjana Resort Cottages in Bodhgaya" 
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbF9dgN8f3Dbg-YKOTpV5sOZnJOHUXxW_Uu6kfKb5czx1EmUPycMq4JkAGjsyb2MAQ70lr7A03o87c8ohV4posT6cz0YYALVAIKC05J6vz44UGYwYvg-MTqcvQhGYa2NG97FNLOQuYcObgWv_2s_OG2WAYsDEtOC7R5Ggmv9gSYTuH-4SkHeVFNPLm2ShutbGetXtrLGy9HLLq_8fKoHSVyqxeIF3yFR-c-3IH6HAo7DDirPkLFMH" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/40"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-gutter pt-36 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-space-md">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-space-sm px-3.5 py-1.5 bg-surface/10 backdrop-blur-sm rounded-none border border-surface/15">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            <span className="font-label-md text-label-md uppercase tracking-[0.25em] text-tertiary-fixed font-semibold">
              The Byke Niranjana Resort
            </span>
          </div>

          {/* Main Display Title */}
          <h1 className="font-display-lg text-display-lg text-surface tracking-tight leading-[1.08] drop-shadow-sm font-serif">
            Stay Close to the Spirit of Bodhgaya
          </h1>

          {/* Supporting Editorial Subtitle */}
          <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl font-light leading-relaxed">
            Comfortable stays, peaceful surroundings, and warm hospitality in the heart of Bodhgaya. An unhurried sanctuary steps from timeless pilgrimage routes.
          </p>

          {/* CTA Buttons */}
          <div className="pt-space-sm flex flex-wrap items-center gap-space-md">
            <a 
              href="#booking-dock" 
              className="inline-flex items-center justify-center bg-tertiary-container text-tertiary-fixed font-label-md text-label-md uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 hover:bg-secondary hover:text-on-secondary shadow-lg hover:shadow-xl font-semibold"
            >
              Book Your Stay
            </a>
            <button 
              onClick={onExploreResort}
              className="inline-flex items-center justify-center bg-surface/10 backdrop-blur-sm text-surface font-label-md text-label-md uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 hover:bg-surface hover:text-primary border border-surface/20"
            >
              Explore The Resort
              <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </button>
          </div>

        </div>
      </div>

      {/* Floating Luxury Booking Bar Widget */}
      <div className="relative z-20 max-w-[1320px] w-full mx-auto px-gutter pb-8" id="booking-dock">
        <div className="bg-surface shadow-[0_16px_40px_-12px_rgba(15,32,22,0.35)] p-3 border border-surface-variant">
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 items-center" onSubmit={handleSubmit}>
            
            {/* Check In */}
            <div className="p-3 bg-surface-container-low hover:bg-surface-container transition-colors border border-surface-variant/40">
              <label className="block font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1 font-semibold">
                Check-In
              </label>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">calendar_today</span>
                <input 
                  type="date" 
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none cursor-pointer"
                  required
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="p-3 bg-surface-container-low hover:bg-surface-container transition-colors border border-surface-variant/40">
              <label className="block font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1 font-semibold">
                Check-Out
              </label>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">event_available</span>
                <input 
                  type="date" 
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none cursor-pointer"
                  required
                />
              </div>
            </div>

            {/* Accommodation */}
            <div className="p-3 bg-surface-container-low hover:bg-surface-container transition-colors border border-surface-variant/40">
              <label className="block font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1 font-semibold">
                Accommodation
              </label>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">cottage</span>
                <select 
                  value={accommodation}
                  onChange={(e) => setAccommodation(e.target.value)}
                  className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none cursor-pointer"
                >
                  <option value="cottage">Wooden Cottage (₹4,500/night)</option>
                  <option value="bungalow">Bungalow Room (₹3,800/night)</option>
                  <option value="family">Family & Group Suite</option>
                </select>
              </div>
            </div>

            {/* Guests */}
            <div className="p-3 bg-surface-container-low hover:bg-surface-container transition-colors border border-surface-variant/40">
              <label className="block font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1 font-semibold">
                Guests
              </label>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">group</span>
                <select 
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none cursor-pointer"
                >
                  <option value="2">2 Adults, 0 Children</option>
                  <option value="1">1 Adult, Single Stay</option>
                  <option value="3">3 Adults, Triple</option>
                  <option value="family">4+ Family Suite</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="h-full flex items-center">
              <button 
                type="submit"
                className="w-full h-full min-h-[56px] bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.2em] px-6 py-4 transition-all duration-300 hover:bg-secondary hover:text-on-secondary flex items-center justify-center gap-2 font-semibold shadow-md"
              >
                <span>Check Availability</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

          </form>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-4 flex items-center justify-center gap-3 text-surface-container-high/80">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.3em]">Discover Peace</span>
          <span className="material-symbols-outlined text-sm animate-bounce">arrow_downward</span>
        </div>
      </div>

    </section>
  );
}
