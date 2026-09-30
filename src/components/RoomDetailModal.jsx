import React from 'react';

export default function RoomDetailModal({ room, onClose, onBookNow }) {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface w-full max-w-2xl shadow-2xl border border-surface-variant relative overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={room.image} 
            alt={room.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/20 backdrop-blur-sm hover:bg-surface/40 text-surface flex items-center justify-center focus:outline-none"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className={`inline-block ${room.badgeColor} px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest font-semibold mb-2 shadow-sm`}>
              {room.badge}
            </span>
            <h3 className="font-headline-lg text-headline-lg text-surface font-serif">
              {room.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex items-center justify-between p-4 bg-surface-container-low border border-surface-variant">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                Tariff
              </span>
              <p className="font-headline-sm text-headline-sm text-primary font-serif">
                {room.price} <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">{room.priceNote}</span>
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookNow(room);
              }}
              className="bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.18em] px-6 py-3 hover:bg-secondary transition-colors font-semibold"
            >
              Book Room
            </button>
          </div>

          <div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-2 font-serif">
              Overview &amp; Features
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {room.details}
            </p>
          </div>

          <div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-3 font-serif">
              Room Amenities
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-surface-container-low border border-surface-variant/40">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
