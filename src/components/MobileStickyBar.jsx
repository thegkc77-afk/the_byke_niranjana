import React from 'react';

export default function MobileStickyBar({ onOpenBooking }) {
  return (
    <div className="xl:hidden fixed bottom-0 inset-x-0 z-40 bg-surface shadow-[0_-8px_24px_rgba(0,0,0,0.12)] p-3 border-t border-surface-variant">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Call */}
        <a 
          href="tel:8603850622" 
          className="flex flex-col items-center justify-center py-2 bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wider transition-colors hover:bg-surface-variant border border-surface-variant/60"
        >
          <span className="material-symbols-outlined text-lg mb-0.5">call</span>
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/918603850622" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center justify-center py-2 bg-tertiary-container text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-wider transition-colors hover:bg-secondary font-semibold"
        >
          <span className="material-symbols-outlined text-lg mb-0.5">chat</span>
          <span>WhatsApp</span>
        </a>

        {/* Book Now */}
        <button 
          onClick={onOpenBooking} 
          className="flex flex-col items-center justify-center py-2 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider transition-colors hover:bg-secondary font-semibold"
        >
          <span className="material-symbols-outlined text-lg mb-0.5">calendar_month</span>
          <span>Book Now</span>
        </button>

      </div>
    </div>
  );
}
