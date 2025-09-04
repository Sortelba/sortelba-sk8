import React, { useState, useRef } from 'react';
import type { Page } from '../types';
import ServiceDetailModal from './ServiceDetailModal';

interface Service {
    title: string;
    description: string;
    features: string[];
    detailedDescription: string;
    targetAudience: string;
}

const services: Service[] = [
    {
        title: "Einsteigerkurs",
        description: "Der perfekte Start für alle, die noch nie auf einem Skateboard standen. Wir bringen dir die Grundlagen sicher und mit viel Spaß bei.",
        features: [
            "Sicherer Stand und Gleichgewicht",
            "Richtiges Abstoßen (Pushen)",
            "Lenken und Kurven fahren",
            "Sicheres Anhalten",
            "Materialkunde und Board-Setup"
        ],
        detailedDescription: "In diesem Kurs lernst du alles von Grund auf. Wir starten mit den absoluten Basics, wie dem sicheren Stehen auf dem Board und dem richtigen Abstoßen. Unser Ziel ist es, dir Selbstvertrauen zu geben und eine solide Grundlage zu schaffen. Am Ende des Kurses wirst du in der Lage sein, entspannt durch die Gegend zu cruisen und erste kleine Hindernisse zu meistern.",
        targetAudience: "Absolute Anfänger ohne Vorkenntnisse."
    },
    {
        title: "Fortgeschrittenenkurs",
        description: "Du fährst schon sicher und willst die ersten Tricks lernen? Hier bist du richtig. Wir heben deine Skills auf das nächste Level.",
        features: [
            "Der Ollie – die Grundlage aller Tricks",
            "Einfache Flips (Shove-it, Kickflip)",
            "Fahren auf Rampen und in Miniramps",
            "Erste Grinds und Slides",
            "Sicherheit im Skatepark"
        ],
        detailedDescription: "Dieser Kurs baut auf deinen Grundkenntnissen auf. Wir konzentrieren uns auf den Ollie, den wichtigsten Trick im Skateboarding, und wagen uns an erste Flip-Tricks. Außerdem zeigen wir dir, wie du dich sicher in einem Skatepark bewegst und erste Rampen fährst. Ziel ist es, dein Trick-Repertoire zu erweitern und dir mehr Sicherheit auf unterschiedlichem Terrain zu geben.",
        targetAudience: "Skater, die sicher fahren, lenken und anhalten können."
    },
    {
        title: "Profi-Coaching",
        description: "Individuelles Training für erfahrene Skater. Wir analysieren deine Technik und arbeiten gezielt an deinen Wunsch-Tricks.",
        features: [
            "Videoanalyse deiner Tricks",
            "Individueller Trainingsplan",
            "Fortgeschrittene Flip- und Grab-Tricks",,
            "Wettkampfvorbereitung"
        ],
        detailedDescription: "Unser Profi-Coaching ist ein 1-zu-1-Training, das komplett auf deine Wünsche und Ziele zugeschnitten ist. Egal ob du einen bestimmten Trick lernen, dich auf einen Wettbewerb vorbereiten oder einfach deine Technik verfeinern möchtest – wir erstellen einen individuellen Plan für dich. Mithilfe von Videoanalysen decken wir Verbesserungspotenziale auf und arbeiten gezielt an deinen Schwächen.",
        targetAudience: "Ambitionierte und erfahrene Skater."
    }
];

const ServiceCard: React.FC<{ service: Service; onClick: () => void; }> = ({ service, onClick }) => (
    <button onClick={onClick} className="w-full h-full text-left bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50 flex flex-col">
        <div className="flex-grow">
            <h3 className="text-2xl font-bold text-brand-primary">{service.title}</h3>
            <p className="mt-4 text-brand-gray">{service.description}</p>
            <ul className="mt-6 space-y-2">
                {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="mt-6 text-right font-semibold text-brand-primary">
            Mehr erfahren &rarr;
        </div>
    </button>
);

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

interface ServicesPageProps {
  onNavigate: (page: Page, subject?: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const pricingRef = useRef<HTMLDivElement>(null);

    const pricingOptions = [
        {
            title: "Einzelkurs",
            price: "€30",
            priceDetails: "/ 60 Min.",
            features: [
                "Individueller Einzelunterricht",
                "Volle Aufmerksamkeit des Coaches",
                "Perfekt für den Einstieg",
                "Eigenes Equipment erforderlich",
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
                "Eigenes Equipment erforderlich",
            ],
            isFeatured: true,
        },
        {
            title: "Gruppenkurs",
            price: "€25",
            priceDetails: "/ Pers. / 90 Min.",
            features: [
                "Lernen mit Freunden (bis zu 5 Pers.)",
                "Gemeinsamer Spaß & Motivation",
                "Günstigerer Preis pro Person",
                "Eigenes Equipment erforderlich",
            ],
            isFeatured: false,
        }
    ];

    const handleGoToPricing = () => {
        setSelectedService(null);
        setTimeout(() => {
            pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="space-y-12">
                <div>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Unsere Leistungen</h2>
                        <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                            Egal ob blutiger Anfänger oder erfahrener Ripper, wir haben den passenden Kurs für dich. Klicke auf eine Leistung für mehr Details.
                        </p>
                    </div>
                    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {services.map(service => (
                            <ServiceCard key={service.title} service={service} onClick={() => setSelectedService(service)} />
                        ))}
                    </div>
                </div>
            </div>
            
            <div ref={pricingRef} className="space-y-16 pt-16 md:pt-24 mt-16 md:mt-24 border-t border-gray-200">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Preise & Pakete</h2>
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
            </div>

            {selectedService && (
                <ServiceDetailModal
                    service={selectedService}
                    onClose={() => setSelectedService(null)}
                    onGoToPricing={handleGoToPricing}
                />
            )}
        </div>
    );
};

export default ServicesPage;