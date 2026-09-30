import React, { useState, useEffect } from 'react';

export default function Header({ activeSection, setActiveSection, onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'stay', label: 'Stay' },
    { id: 'dining', label: 'Dining' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'bodhgaya', label: 'Bodhgaya' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-surface/95 backdrop-blur-md shadow-[0_4px_20px_rgba(15,32,22,0.08)] py-1' 
        : 'bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] py-0'
    }`}>
      <div className="h-20 max-w-[1320px] mx-auto px-gutter flex items-center justify-between">
        
        {/* Logo & Resort Title */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-space-md text-left group focus:outline-none"
        >
          <img 
            alt="The Byke Niranjana Resort Logo" 
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida/AEtjO1UBflSXrQwC4JtuaIP-XBPb4VC7jPAbq6tlpJOqrxN8L3ya5RTClVnI61dAXHIx-Q4XubOsZscYl_ZsyvxT79iAke72c8_b9Nwu1rXhh0jusxDEE4Ymedf7NXejG4UoZlYf-KoOMcX_SJ_iIrTrpp2ql-skTkHfu6iXLTeX4gFxQQQERdvID3o7GwwUhPae6TmSK_LE0lBb7AL5wIRENTnlT0M-7KDdNeifU_mWAI4zJJahS3Zvfe6PuxE" 
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-wide text-primary font-serif font-medium">
              The Byke Niranjana
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">
              Resort • Bodhgaya
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-label-md text-label-md uppercase transition-all pb-1 tracking-wider ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-on-tertiary-container'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions CTA */}
        <div className="flex items-center gap-space-md">
          <button 
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider px-6 py-3 transition-all duration-300 hover:bg-secondary hover:text-on-secondary shadow-[0_12px_32px_-8px_rgba(36,53,42,0.12)] hover:shadow-lg"
          >
            Book Now
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors text-on-primary"
            title="Account / Help Desk"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-primary focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface border-b border-surface-variant px-6 py-6 space-y-4 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-label-md text-label-md uppercase tracking-wider py-2 border-b border-surface-container-low transition-colors ${
                  activeSection === item.id ? 'text-primary font-bold text-lg' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-3 text-center"
              >
                Book Your Stay Now
              </button>
              <a
                href="tel:8603850622"
                className="w-full bg-tertiary-container text-tertiary-fixed font-label-md text-label-md uppercase tracking-widest py-3 text-center flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                Direct Call: +91 86038 50622
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
