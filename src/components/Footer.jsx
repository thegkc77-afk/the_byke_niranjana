import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="w-full bg-primary-container text-surface pt-space-xl pb-space-lg border-t border-surface/10">
      <div className="max-w-[1320px] mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <img 
                alt="The Byke Niranjana Resort Logo" 
                className="h-8 w-auto object-contain brightness-0 invert" 
                src="https://lh3.googleusercontent.com/aida/AEtjO1UBflSXrQwC4JtuaIP-XBPb4VC7jPAbq6tlpJOqrxN8L3ya5RTClVnI61dAXHIx-Q4XubOsZscYl_ZsyvxT79iAke72c8_b9Nwu1rXhh0jusxDEE4Ymedf7NXejG4UoZlYf-KoOMcX_SJ_iIrTrpp2ql-skTkHfu6iXLTeX4gFxQQQERdvID3o7GwwUhPae6TmSK_LE0lBb7AL5wIRENTnlT0M-7KDdNeifU_mWAI4zJJahS3Zvfe6PuxE" 
              />
              <span className="font-headline-sm text-headline-sm text-surface font-serif">
                The Byke Niranjana
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed font-light">
              An oasis of serene contemplative luxury steps from the sacred Mahabodhi Temple. Experiential Indian hospitality rooted in mindful living.
            </p>
            <div className="flex items-center gap-space-sm text-on-tertiary-container">
              <span className="material-symbols-outlined text-sm">spa</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">
                Sacred Tranquility
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-space-md">
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-tertiary-container font-semibold">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-space-sm">
              <button 
                onClick={() => onNavigate('home')} 
                className="text-left font-body-sm text-body-sm text-surface-container-high hover:text-surface transition-colors"
              >
                Home &amp; Philosophy
              </button>
              <button 
                onClick={() => onNavigate('stay')} 
                className="text-left font-body-sm text-body-sm text-surface-container-high hover:text-surface transition-colors"
              >
                Suites &amp; Accommodations
              </button>
              <button 
                onClick={() => onNavigate('dining')} 
                className="text-left font-body-sm text-body-sm text-surface-container-high hover:text-surface transition-colors"
              >
                Sattvic &amp; Global Dining
              </button>
              <button 
                onClick={() => onNavigate('events')} 
                className="text-left font-body-sm text-body-sm text-surface-container-high hover:text-surface transition-colors"
              >
                Spiritual Gatherings &amp; Events
              </button>
              <button 
                onClick={() => onNavigate('gallery')} 
                className="text-left font-body-sm text-body-sm text-surface-container-high hover:text-surface transition-colors"
              >
                Sanctuary Gallery
              </button>
              <button 
                onClick={() => onNavigate('bodhgaya')} 
                className="text-left font-body-sm text-body-sm text-surface-container-high hover:text-surface transition-colors"
              >
                Bodhgaya Pilgrimage Guide
              </button>
            </nav>
          </div>

          {/* Column 3: The Sanctuary */}
          <div className="space-y-space-md">
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-tertiary-container font-semibold">
              The Sanctuary
            </h3>
            <div className="font-body-sm text-body-sm text-surface-container-high space-y-space-sm leading-relaxed">
              <p>Near Hari Om International, Mastipur, Bodhgaya, Bihar 824231, India</p>
              <p className="text-surface font-medium pt-1">Direct Reservations:</p>
              <a 
                href="tel:8603850622" 
                className="block text-on-tertiary-container font-headline-sm text-headline-sm hover:underline font-serif"
              >
                +91 86038 50622
              </a>
              <p>Email: reservations@thebykeniranjana.com</p>
            </div>
          </div>

          {/* Column 4: Mindful Presence */}
          <div className="space-y-space-md">
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-tertiary-container font-semibold">
              Mindful Presence
            </h3>
            <p className="font-body-sm text-body-sm text-surface-container-high font-light leading-relaxed">
              Follow our quiet chronicles, morning chants, and seasonal culinary offerings.
            </p>
            <div className="flex items-center gap-space-md pt-space-xs">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container hover:text-surface transition-colors"
              >
                Instagram @TheBykeNiranjana
              </a>
            </div>
            <div className="p-space-md bg-primary/40 rounded-DEFAULT border border-surface/10">
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high mb-1 font-semibold">
                Sacred Distance
              </p>
              <p className="font-body-sm text-body-sm text-surface">900m from Mahabodhi Temple Sanctuary</p>
            </div>
          </div>

        </div>

        <div className="pt-space-lg border-t border-surface/10 flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-body-sm text-surface-container-high font-light">
            © 2025 The Byke Niranjana Resort, Bodhgaya. All rights reserved.
          </p>
          <div className="flex items-center gap-space-lg">
            <button onClick={() => onNavigate('contact')} className="font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high hover:text-surface transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('contact')} className="font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high hover:text-surface transition-colors">
              Terms of Stay
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
