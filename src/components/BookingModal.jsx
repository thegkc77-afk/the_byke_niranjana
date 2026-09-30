import React, { useState } from 'react';

export default function BookingModal({ isOpen, onClose, selectedRoom, searchData }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: selectedRoom ? selectedRoom.id : (searchData?.accommodation || 'cottage'),
    checkIn: searchData?.checkIn || '2025-03-15',
    checkOut: searchData?.checkOut || '2025-03-18',
    guests: searchData?.guests || '2',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface w-full max-w-xl shadow-2xl border border-surface-variant relative overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-primary text-on-primary flex items-center justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container font-semibold">
              The Byke Niranjana Resort
            </span>
            <h3 className="font-headline-md text-headline-md font-serif text-surface">
              Reserve Your Stay
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 rounded-full bg-surface/10 hover:bg-surface/20 text-surface flex items-center justify-center focus:outline-none"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h4 className="font-headline-lg text-headline-lg text-primary font-serif">
                Booking Request Sent!
              </h4>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
                Thank you, <strong className="text-primary">{formData.name}</strong>. Our Bodhgaya Concierge desk will call you shortly at <strong className="text-primary">{formData.phone}</strong> to confirm your reservation and assist with your pilgrimage arrangements.
              </p>
              <div className="p-4 bg-surface-container-low border border-surface-variant max-w-md mx-auto text-left font-body-sm space-y-1">
                <p><strong>Check-In:</strong> {formData.checkIn}</p>
                <p><strong>Check-Out:</strong> {formData.checkOut}</p>
                <p><strong>Accommodation:</strong> {formData.roomType.toUpperCase()}</p>
              </div>
              <button 
                onClick={onClose}
                className="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.2em] px-8 py-3.5 transition-colors hover:bg-secondary font-semibold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                    Phone Number *
                  </label>
                  <input 
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                    placeholder="+91 Phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                  Email Address
                </label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                  placeholder="your.email@domain.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                    Check-In Date
                  </label>
                  <input 
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                    Check-Out Date
                  </label>
                  <input 
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                    Room Type
                  </label>
                  <select 
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                  >
                    <option value="cottage">Wooden Cottage (₹4,500/night)</option>
                    <option value="bungalow">Bungalow Room (₹3,800/night)</option>
                    <option value="family">Family & Group Stay</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                    Guests
                  </label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                  >
                    <option value="1">1 Guest (Single Stay)</option>
                    <option value="2">2 Guests (Double Bed)</option>
                    <option value="3">3 Guests (Triple)</option>
                    <option value="family">4+ Family Suite</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-1 font-semibold">
                  Special Requests / Pick-up Needs
                </label>
                <textarea 
                  rows="3"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full p-3 bg-surface-container-low border border-surface-variant font-body-sm text-on-surface focus:outline-none focus:border-primary"
                  placeholder="Need Gaya airport pickup, temple guidance, or sattvic diet preferences?"
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.2em] py-4 transition-colors hover:bg-secondary font-semibold shadow-md"
                >
                  Confirm Reservation Inquiry
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
