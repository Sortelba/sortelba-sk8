import React, { useState } from 'react';
import type { Page } from '../types';
import Modal from './Modal';
import TrickRandomizerModal from './TrickRandomizerModal';

interface FooterProps {
  onNavigate: (page: Page, subject?: string) => void;
}

const VoucherCard: React.FC<{
    value: string;
    description: string;
    details: string;
    onNavigate: (page: Page, subject?: string) => void;
}> = ({ value, description, details, onNavigate }) => (
    <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col justify-between">
        <div>
            <div className="mb-4">
                <span className="text-5xl font-black text-brand-dark">{value}</span>
            </div>
            <h3 className="text-xl font-bold text-brand-primary">{description}</h3>
            <p className="mt-2 text-brand-gray">{details}</p>
        </div>
        <button
            onClick={() => onNavigate('contact', `Gutscheinanfrage: ${description}`)}
            className="mt-8 w-full py-3 px-6 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
            Gutschein Anfragen
        </button>
    </div>
);


const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [isRandomizerModalOpen, setIsRandomizerModalOpen] = useState(false);
    const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);

    const voucherOptions = [
        {
            value: "€30",
            description: "Für eine Einzelstunde",
            details: "Das perfekte Geschenk, um die Welt des Skateboardens zu entdecken."
        },
        {
            value: "€55",
            description: "Für zwei Einzelstunden, 5€ gespart!",
            details: "Ideal, um erste Grundlagen zu festigen und Fortschritte zu sehen."
        },
        {
            value: "€120",
            description: "Für einen 5er Block",
            details: "Das Rundum-sorglos-Paket für alle, die es ernst meinen."
        }
    ];

  return (
    <>
        <footer className="bg-white border-t border-gray-200">
          <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="mb-10">
                <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wider mb-6">Unterstützt von</h3>
                <div className="flex justify-center items-center gap-x-8 md:gap-x-12 flex-wrap">
                    <a href="https://www.lifeboy-skateshop.de/?s=lifeboy" target="_blank" rel="noopener noreferrer" aria-label="Sponsor Lifeboy" className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <img src="https://raw.githubusercontent.com/Sortelba/assets-sortelba.de/main/images/lifeboy-logo.png" alt="Lifeboy Logo" className="h-8 w-auto" />
                    </a>
                    <a href="https://blackheavenshop.com/Beerrings-Classic-Edition" target="_blank" rel="noopener noreferrer" aria-label="Sponsor Koloss" className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <img src="https://raw.githubusercontent.com/Sortelba/assets-sortelba.de/main/images/koloss-logo.png" alt="Koloss Logo" className="h-8 w-auto" />
                    </a>
                    <a href="https://solide.myspreadshop.de/" target="_blank" rel="noopener noreferrer" aria-label="Sponsor Solide" className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <img src="https://raw.githubusercontent.com/Sortelba/assets-sortelba.de/main/images/solide-logo.png" alt="Solide Logo" className="h-8 w-auto" />
                    </a>
                </div>
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
                    onClick={() => setIsVoucherModalOpen(true)}
                    className="text-brand-gray hover:text-brand-primary transition-colors duration-300"
                >
                    Gutscheine
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
        <Modal
            isOpen={isVoucherModalOpen}
            onClose={() => setIsVoucherModalOpen(false)}
            title="Gutscheine Verschenken"
        >
             <div className="p-6 sm:p-8 bg-brand-light h-full">
                <div className="text-center">
                    <p className="text-lg text-brand-gray max-w-2xl mx-auto">
                        Ein unvergessliches Erlebnis verschenken. Wähle den passenden Wert und mache jemandem eine Freude.
                    </p>
                </div>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {voucherOptions.map(option => <VoucherCard key={option.value} {...option} onNavigate={(page, subject) => {
                        setIsVoucherModalOpen(false);
                        onNavigate(page, subject);
                    }} />)}
                </div>
            </div>
        </Modal>
    </>
  );
};

export default Footer;