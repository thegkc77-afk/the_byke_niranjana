import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WhyStaySection from './components/WhyStaySection';
import StaySection from './components/StaySection';
import DiningSection from './components/DiningSection';
import BanquetsSection from './components/BanquetsSection';
import ExperienceSection from './components/ExperienceSection';
import GallerySection from './components/GallerySection';
import BodhgayaSection from './components/BodhgayaSection';
import ContactSection from './components/ContactSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import BookingModal from './components/BookingModal';
import RoomDetailModal from './components/RoomDetailModal';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleSearchAvailability = (data) => {
    setBookingData(data);
    setIsBookingOpen(true);
  };

  const handleExploreResort = () => {
    const stayEl = document.getElementById('stay');
    if (stayEl) {
      stayEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
  };

  const handleBookRoom = (room) => {
    setSelectedRoom(null);
    setBookingData({ accommodation: room ? room.id : 'cottage' });
    setIsBookingOpen(true);
  };

  const handleBookTable = () => {
    setBookingData({ accommodation: 'dining' });
    setIsBookingOpen(true);
  };

  const handleInquireBanquets = () => {
    setBookingData({ accommodation: 'banquet' });
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface flex flex-col selection:bg-secondary-container selection:text-on-secondary-fixed">
      {/* Navigation Header */}
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        <Hero 
          onSearchAvailability={handleSearchAvailability}
          onExploreResort={handleExploreResort}
        />
        
        <AboutSection />
        
        <WhyStaySection />
        
        <StaySection 
          onSelectRoom={handleSelectRoom}
          onBookRoom={handleBookRoom}
        />
        
        <DiningSection 
          onBookTable={handleBookTable}
        />
        
        <BanquetsSection 
          onInquireBanquets={handleInquireBanquets}
        />
        
        <ExperienceSection />
        
        <GallerySection />
        
        <BodhgayaSection />
        
        <ContactSection />
        
        <FinalCTASection 
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer 
        setActiveSection={setActiveSection}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Mobile Quick Action Sticky Bar */}
      <MobileStickyBar 
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Modals */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingData}
      />

      <RoomDetailModal 
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onBook={handleBookRoom}
      />
    </div>
  );
}

export default App;

