import React from 'react';
import type { Page } from '../types';

interface PricingPageProps {
    onNavigate: (page: Page, subject?: string) => void;
}

const PriceCard: React.FC<{
    title: string;
    price: string;
    priceDetails: string;
    features: string[];
    isFeatured?: boolean;
    onNavigate: (page: Page, subject?: string) => void;
}> = ({ title, price, priceDetails, features, isFeatured = false, onNavigate }) => (
    <div className={`p-8 rounded-lg border ${isFeatured ? 'border-brand-primary shadow-lg transform md:scale-105' : 'border-gray-200 shadow-sm'} bg-white transition-all duration-300 flex flex-col`}>
        <h3 className={`text-2xl font-bold ${isFeatured ? 'text-brand-primary' : 'text-brand-dark'}`}>{title}</h3>
        <div className="my-4">
            <span className="text-5xl font-black text-brand-dark">{price}</span>
            <span className="text-brand-gray ml-1">{priceDetails}</span>
        </div>
        <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button
            onClick={() => onNavigate('contact', `Buchungsanfrage: ${title}`)}
            className={`w-full py-3 px-6 font-bold rounded-lg transition-colors duration-300 ${isFeatured ? 'bg-brand-primary text-white hover:bg-blue-600' : 'bg-blue-50 text-brand-primary hover:bg-blue-100'}`}
        >
            Jetzt Buchen
        </button>
    </div>
);

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


const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {

    const pricingOptions = [
        {
            title: "Einzelkurs",
            price: "€30",
            priceDetails: "/ 60 Min.",
            features: [
                "Individueller Einzelunterricht",
                "Volle Aufmerksamkeit des Coaches",
                "Perfekt für den Einstieg",
                "Leih-Equipment für 5€ Aufpreis",
            ],
            isFeatured: false,
        },
        {
            title: "5er Karte",
            price: "€120",
            priceDetails: "/ 5x 60 Min.",
            features: [
                "1 Kurs geschenkt (5 zum Preis von 4)",
                "Flexibel einlösbare Termine",
                "Konsequenter Lernfortschritt",
                "Leih-Equipment für 5€ Aufpreis",
            ],
            isFeatured: true,
        },
        {
            title: "Gruppenkurs",
            price: "€25",
            priceDetails: "/ Pers. / 90 Min.",
            features: [
                "Lernen mit Freunden (2-4 Pers.)",
                "Gemeinsamer Spaß & Motivation",
                "Günstigerer Preis pro Person",
                "Leih-Equipment für 5€ Aufpreis",
            ],
            isFeatured: false,
        }
    ];

    const voucherOptions = [
        {
            value: "€45",
            description: "Für eine Einzelstunde",
            details: "Das perfekte Geschenk, um die Welt des Skateboardens zu entdecken."
        },
        {
            value: "€90",
            description: "Für zwei Einzelstunden",
            details: "Ideal, um erste Grundlagen zu festigen und Fortschritte zu sehen."
        },
        {
            value: "€200",
            description: "Für einen 5er Block",
            details: "Das Rundum-sorglos-Paket für alle, die es ernst meinen."
        }
    ];

  return (
    <div className="space-y-16 py-16 md:py-24">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Preise</h2>
            <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                Finde das perfekte Paket für dich. Transparent, fair und ohne versteckte Kosten.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingOptions.map((option, index) => <PriceCard key={`${option.title}-${index}`} {...option} onNavigate={onNavigate} />)}
        </div>

        <div className="bg-brand-dark text-white p-8 sm:p-12 rounded-lg shadow-xl text-center">
            <h3 className="text-3xl font-black tracking-tight text-brand-primary">Profi-Coaching</h3>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Für ambitionierte Skater, die ihre Skills auf Wettbewerbsniveau heben wollen.
            </p>
            <div className="mt-8 text-left max-w-md mx-auto">
                <ul className="space-y-3">
                    {[
                        'Videoanalyse & Technik-Korrektur', 
                        'Individueller Trainingsplan', 
                        'Wettkampfvorbereitung & Mentoring', 
                        'Zugang zu exklusiven Spots'
                    ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="w-6 h-6 mr-3 text-brand-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-10">
                <p className="text-4xl font-bold text-white">Auf Anfrage</p>
                <p className="text-gray-400 mt-1">Individuell auf deine Ziele zugeschnitten.</p>
            </div>
            <div className="mt-8">
                <button
                    onClick={() => onNavigate('contact', 'Anfrage: Profi-Coaching')}
                    className="px-10 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
                >
                    Jetzt Anfragen
                </button>
            </div>
        </div>

        <div className="pt-16 border-t border-gray-200">
             <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Gutscheine Verschenken</h2>
                <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                    Ein unvergessliches Erlebnis verschenken. Wähle den passenden Wert und mache jemandem eine Freude.
                </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {voucherOptions.map(option => <VoucherCard key={option.value} {...option} onNavigate={onNavigate} />)}
            </div>
        </div>
    </div>
  );
};

export default PricingPage;