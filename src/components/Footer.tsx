import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import type { Page } from '../types';
import Modal from './Modal';
import TrickRandomizerModal from './TrickRandomizerModal';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

// Fictional Sponsor Logos as SVG Components
const SponsorSkatebolt: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" letterSpacing="1">LIFEBOY</text>
    </svg>
);

const SponsorUrbanEdge: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900">KOLOSS</text>
    </svg>
);

const SponsorNollie: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold">SOLIDE</text>
    </svg>
);

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [isRandomizerModalOpen, setIsRandomizerModalOpen] = useState(false);

  return (
    <>
        <footer className="bg-white border-t border-gray-200">
          <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="mb-10">
                <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wider mb-6">Unterstützt von</h3>
                <div className="flex justify-center items-center gap-x-8 md:gap-x-12 flex-wrap">
                    <a href="https://www.lifeboy-skateshop.de/?s=lifeboy" target="_blank" rel="noopener noreferrer" aria-label="Sponsor Skatebolt" className="text-gray-400 hover:text-brand-dark transition-colors duration-300">
                        <SponsorSkatebolt className="h-6" />
                    </a>
                    <a href="https://blackheavenshop.com/Beerrings-Classic-Edition" target="_blank" rel="noopener noreferrer" aria-label="Sponsor UrbanEdge" className="text-gray-400 hover:text-brand-dark transition-colors duration-300">
                        <SponsorUrbanEdge className="h-7" />
                    </a>
                    <a href="https://solide.myspreadshop.de/" target="_blank" rel="noopener noreferrer" aria-label="Sponsor Solide" className="text-gray-400 hover:text-brand-dark transition-colors duration-300">
                        <SponsorNollie className="h-8" />
                    </a>
                </div>
            </div>
            
            <div className="flex justify-center space-x-6 mb-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray hover:text-brand-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-4 text-sm">
                <button
                    onClick={() => onNavigate('agb')}
                    className="text-brand-gray hover:text-brand-primary transition-colors duration-300"
                >
                    AGB
                </button>
                <button
                    onClick={() => onNavigate('impressum')}
                    className="text-brand-gray hover:text-brand-primary transition-colors duration-300"
                >
                    Impressum
                </button>
                <button
                    onClick={() => onNavigate('faq')}
                    className="text-brand-gray hover:text-brand-primary transition-colors duration-300"
                >
                    FAQ
                </button>
                <button
                    onClick={() => setIsMapModalOpen(true)}
                    className="text-brand-gray hover:text-brand-primary transition-colors duration-300"
                >
                    Skate Spots
                </button>
                <button
                    onClick={() => setIsRandomizerModalOpen(true)}
                    className="text-brand-gray hover:text-brand-primary transition-colors duration-300"
                >
                    Trick Randomizer
                </button>
                <button
                    onClick={() => onNavigate('verein-finder')}
                    className="text-brand-gray hover:text-brand-primary transition-colors duration-300"
                >
                    Verein Finden
                </button>
            </div>
            <p className="text-sm text-brand-gray">
              &copy; {new Date().getFullYear()} Sortelba. Alle Rechte vorbehalten.
            </p>
          </div>
        </footer>
        <Modal
            isOpen={isMapModalOpen}
            onClose={() => setIsMapModalOpen(false)}
            title="Skate Spots Karte"
        >
            <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=12o-_NyQri8gq0pW09KzETCsq1ETRAZ4&ehbc=2E312F"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </Modal>
        <TrickRandomizerModal 
            isOpen={isRandomizerModalOpen}
            onClose={() => setIsRandomizerModalOpen(false)}
        />
    </>
  );
};

export default Footer;