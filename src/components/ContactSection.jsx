import React, { useState } from 'react';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '', dates: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '', dates: '' });
    }, 6000);
  };

  return (
    <section className="w-full py-24 bg-surface-container-high relative" id="contact">
      <div className="max-w-[1320px] mx-auto px-gutter">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-space-xs mb-16">
          <span className="font-label-md text-label-md uppercase tracking-[0.25em] text-secondary font-semibold">
            Concierge &amp; Access
          </span>
          <h2 className="font-display-lg text-display-lg text-primary tracking-tight font-serif">
            Plan Your Stay
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
            Our front desk is here to assist with bookings, airport transfers from Gaya (GAY), and temple itineraries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-surface p-8 md:p-10 shadow-[0_12px_32px_-8px_rgba(36,53,42,0.08)] border border-surface-variant space-y-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">
                Hospitality Desk
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mt-1 font-serif">
                The Byke Niranjana Resort
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Near Hari Om International, Mastipur, Bodhgaya, Bihar 824231, India
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-surface-variant/50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-primary border border-surface-variant">
                  <span className="material-symbols-outlined text-lg">call</span>
                </div>
                <div>
                  <span className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Reservations Direct
                  </span>
                  <a 
                    href="tel:8603850622" 
                    className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors font-serif"
                  >
                    +91 86038 50622
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-primary border border-surface-variant">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </div>
                <div>
                  <span className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Electronic Enquiries
                  </span>
                  <a 
                    href="mailto:reservations@thebykeniranjana.com" 
                    className="font-body-md text-body-md text-primary hover:text-secondary transition-colors underline"
                  >
                    reservations@thebykeniranjana.com
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Contact Action Buttons */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a 
                href="tel:8603850622" 
                className="inline-flex items-center justify-center bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider py-3.5 px-3 transition-colors hover:bg-secondary text-center font-semibold"
              >
                Call Now
              </a>
              <a 
                href="https://wa.me/918603850622" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-tertiary-container text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-wider py-3.5 px-3 transition-colors hover:bg-secondary hover:text-on-secondary text-center font-semibold"
              >
                WhatsApp
              </a>
              <a 
                href="https://maps.google.com/?q=The+Byke+Niranjana+Resort+Bodhgaya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wider py-3.5 px-3 transition-colors hover:bg-surface-variant text-center font-semibold border border-surface-variant"
              >
                Directions
              </a>
            </div>

            {/* Interactive Quick Form */}
            <div className="pt-6 border-t border-surface-variant/60">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-3 font-serif">
                Send Direct Inquiry
              </h4>
              
              {submitted ? (
                <div className="p-4 bg-primary/10 border border-primary text-primary font-body-md space-y-1">
                  <p className="font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">check_circle</span>
                    Inquiry Received!
                  </p>
                  <p className="text-sm">Our reservations desk will contact you within 30 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                    />
                  </div>
                  <textarea
                    rows="3"
                    placeholder="Tell us your travel dates or special requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.2em] py-3.5 hover:bg-secondary transition-colors font-semibold"
                  >
                    Submit Reservation Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Stylized Map Card with Coordinates & Proximity Gauges */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location map preview container */}
            <div 
              className="w-full h-80 bg-surface-container rounded-none shadow-md overflow-hidden relative border border-surface-variant"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbeanz18ytQZK3mMkEkp-t9XY20IamJp6paGxLcvotIUQy0zRZptmigViZFNz55rlKwFk2uUxnwZ0zukjtndW3iyKRNn70B6OL-Dd-ZbjECtauvlJnC3VW_I5R3UM53tEZTrZyrRv5wsx3slbALGYxe80GgNdF7sx3C8fTHECG4pxGyS2cViIK_CUNPgVw5YlL9HtiGD4CElJS4w8xNd00B7TyCPa6rIQRR-Q1rm2bUBkMWIXNZFvC')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute top-4 left-4 bg-surface/95 backdrop-blur-sm p-4 max-w-xs shadow-md border border-surface-variant">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                  Resort Coordinates
                </span>
                <p className="font-body-sm text-body-sm text-primary font-medium">24.6951° N, 84.9912° E</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Mastipur Sanctuary Lane, Bodhgaya</p>
              </div>
            </div>

            {/* Transit & Landmark Distances */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-surface shadow-sm border border-surface-variant/50">
                <div className="flex items-center gap-2 text-secondary mb-1">
                  <span className="material-symbols-outlined text-lg">temple_buddhist</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Mahabodhi</span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary font-serif">900 m</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">12 min walking path</p>
              </div>
              
              <div className="p-4 bg-surface shadow-sm border border-surface-variant/50">
                <div className="flex items-center gap-2 text-secondary mb-1">
                  <span className="material-symbols-outlined text-lg">flight</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Gaya Airport</span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary font-serif">10.5 km</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">18 min drive via NH22</p>
              </div>
              
              <div className="p-4 bg-surface shadow-sm border border-surface-variant/50">
                <div className="flex items-center gap-2 text-secondary mb-1">
                  <span className="material-symbols-outlined text-lg">train</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Gaya Junction</span>
                </div>
                <p className="font-headline-sm text-headline-sm text-primary font-serif">15 km</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">30 min express transit</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
