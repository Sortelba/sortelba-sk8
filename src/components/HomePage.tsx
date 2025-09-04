import React, { useState } from 'react';
import type { Page } from '../types';
import ShopSection from './ShopSection';
import Modal from './Modal';

interface HomePageProps {
    onNavigate: (page: Page, subject?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-full h-[65vh] min-h-[450px] max-h-[700px] shadow-2xl">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/skate-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        >
          Dein Browser unterstützt das Video-Tag nicht.
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center p-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight drop-shadow-lg">
            Lerne Skateboard Fahren
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Vom ersten Schritt auf dem Board bis zu deinem ersten Kickflip – wir bringen dich weiter.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 shadow-lg border-2 border-transparent"
            >
              Kurse ansehen
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-dark transition-colors duration-300"
            >
              Jetzt Anfragen
            </button>
          </div>
        </div>
      </div>
      
      {/* Merch Shop Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Mein Merch-Shop</h2>
              <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                  Zeig deine Unterstützung mit meinen exklusiven Designs auf T-Shirts, Hoodies und mehr.
              </p>
          </div>

          <div className="text-center">
              <button
                  onClick={() => setIsShopModalOpen(true)}
                  className="px-8 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
              >
                  Shop besuchen
              </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isShopModalOpen} 
        onClose={() => setIsShopModalOpen(false)} 
        title="Mein Merch-Shop"
      >
        <ShopSection />
      </Modal>
    </>
  );
};

export default HomePage;