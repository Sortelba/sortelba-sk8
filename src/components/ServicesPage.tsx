import React, { useState, useRef, useEffect } from 'react';
import type { Page } from '../types';
import ServiceDetailModal from './ServiceDetailModal';
import Modal from './Modal';

interface Service {
    title: string;
    description: string;
    features: string[];
    detailedDescription: string;
    targetAudience: string;
}

interface Excursion {
    date: string;
    location: string;
    status: string;
    isAvailable: boolean;
}

interface ExcursionData {
    excursionsEnabled: boolean;
    schedule: Excursion[];
}

const services: Service[] = [
    {
        title: "Einsteigerkurs",
        description: "Der perfekte Start für alle, die noch nie auf einem Skateboard standen. Ich bringe dir die Grundlagen sicher und mit viel Spaß bei.",
        features: [
            "Sicherer Stand und Gleichgewicht",
            "Richtiges Abstoßen (Pushen)",
            "Lenken und Kurven fahren",
            "Sicheres Anhalten",
            "Materialkunde und Board-Setup"
        ],
        detailedDescription: "In diesem Kurs lernst du alles von Grund auf. Ich starte mit den absoluten Basics, wie dem sicheren Stehen auf dem Board und dem richtigen Abstoßen. Mein Ziel ist es, dir Selbstvertrauen zu geben und eine solide Grundlage zu schaffen. Am Ende des Kurses wirst du in der Lage sein, entspannt durch die Gegend zu cruisen und erste kleine Hindernisse zu meistern.",
        targetAudience: "Absolute Anfänger ohne Vorkenntnisse."
    },
    {
        title: "Fortgeschrittenenkurs",
        description: "Du fährst schon sicher und willst die ersten Tricks lernen? Hier bist du richtig. Ich hebe deine Skills auf das nächste Level.",
        features: [
            "Der Ollie – die Grundlage aller Tricks",
            "Einfache Flips (Shove-it, Kickflip)",
            "Fahren auf Rampen und in Miniramps",
            "Erste Grinds und Slides",
            "Sicherheit im Skatepark"
        ],
        detailedDescription: "Dieser Kurs baut auf deinen Grundkenntnissen auf. Ich konzentriere mich auf den Ollie, den wichtigsten Trick im Skateboarding, und wagen uns an erste Flip-Tricks. Außerdem zeige ich dir, wie du dich sicher in einem Skatepark bewegst und erste Rampen fährst. Ziel ist es, dein Trick-Repertoire zu erweitern und dir mehr Sicherheit auf unterschiedlichem Terrain zu geben.",
        targetAudience: "Skater, die sicher fahren, lenken und anhalten können."
    },
    {
        title: "Profi-Coaching",
        description: "Individuelles Training für erfahrene Skater. Ich analysiere deine Technik und arbeite gezielt an deinen Wunsch-Tricks.",
        features: [
            "Videoanalyse deiner Tricks",
            "Individueller Trainingsplan",
            "Fortgeschrittene Flip- und Grab-Tricks",
            "Vert- und Bowl-Skating",
            "Wettkampfvorbereitung"
        ],
        detailedDescription: "Mein Profi-Coaching ist ein 1-zu-1-Training, das komplett auf deine Wünsche und Ziele zugeschnitten ist. Egal ob du einen bestimmten Trick lernen, dich auf einen Wettbewerb vorbereiten oder einfach deine Technik verfeinern möchtest – ich erstelle einen individuellen Plan für dich. Mithilfe von Videoanalysen decke ich Verbesserungspotenziale auf und arbeite gezielt an deinen Schwächen.",
        targetAudience: "Ambitionierte und erfahrene Skater."
    },
    {
        title: "Skatepark Ausflüge",
        description: "Entdecke mit mir neue Skateparks! Wir fahren in kleinen Gruppen zu den besten Spots in der Umgebung. Kein Kurs, nur pures Skateboarding.",
        features: [
            "Gemeinsamer Tagesausflug",
            "Transport zum Skatepark & zurück",
            "Freies Skaten in der Gruppe (max. 3 Mitfahrer)",
            "Neue Spots und Leute kennenlernen"
        ],
        detailedDescription: "Du hast Lust, neue Skateparks zu erkunden, aber keine Mitfahrgelegenheit oder Motivation alleine zu fahren? Dann komm mit mir auf einen Tagesausflug! Ich fahre mit einer kleinen Gruppe von bis zu 4 Personen zu einem Skatepark meiner Wahl. Vor Ort gibt es keinen Unterricht, wir skaten einfach zusammen, haben eine gute Zeit und motivieren uns gegenseitig. Es ist die perfekte Gelegenheit, neue Spots zu sehen und andere Skater kennenzulernen. Verpflegung ist selbst mitzubringen.",
        targetAudience: "Alle Skater, die sicher fahren können und Lust auf einen entspannten Tag in einem anderen Skatepark haben."
    },
    {
        title: "Video Analyse",
        description: "Du kommst bei einem Trick nicht weiter? Schick mir ein Video und erhalte professionelles Feedback, um ihn endlich zu landen.",
        features: [
            "Detaillierte Fehleranalyse",
            "Persönliches Feedback per Video/Text",
            "Konkrete Verbesserungsvorschläge",
            "Standortunabhängig & flexibel"
        ],
        detailedDescription: "Manchmal ist es nur eine Kleinigkeit, die den Unterschied macht. Mit der Videoanalyse biete ich dir die Möglichkeit, standortunabhängig an deinen Skills zu feilen. Du schickst mir einfach ein Video von deinen Versuchen (z.B. per WhatsApp oder E-Mail), und ich nehme mir Zeit, deine Technik, dein Timing und deine Körperhaltung genau zu analysieren. Du erhältst von mir ein detailliertes Feedback mit konkreten Tipps und Übungen, damit du den Trick bald sicher stehen kannst.",
        targetAudience: "Skater aller Level, die bei einem bestimmten Trick feststecken und gezieltes Feedback benötigen."
    },
    {
        title: "Collaboration",
        description: "Buchbar für Foto- und Video-Produktionen, Events oder Werbekampagnen. Bringe authentischen Skate-Lifestyle in dein Projekt.",
        features: [
            "Buchbar für Foto- & Videodrehs",
            "Kreative Tricks & Lines nach Wunsch",
            "Flexible Zusammenarbeit mit Teams",
            "Authentischer Skate-Lifestyle"
        ],
        detailedDescription: "Du suchst einen erfahrenen Skateboarder für dein nächstes Projekt? Egal ob für einen Werbespot, ein Musikvideo, ein Fotoshooting oder ein Event – ich bringe die nötige Erfahrung und Kreativität mit. Ich arbeite flexibel mit deinem Team zusammen, um die perfekten Aufnahmen zu kreieren und deinem Projekt einen authentischen Skate-Vibe zu verleihen. Kontaktiere mich, um die Details deines Projekts zu besprechen.",
        targetAudience: "Fotografen, Filmproduktionen, Werbeagenturen, Marken und Eventveranstalter, die einen professionellen Skateboarder benötigen."
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
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
    
    const [excursionsAvailable, setExcursionsAvailable] = useState(false);
    const [excursionSchedule, setExcursionSchedule] = useState<Excursion[]>([]);
    const [isLoadingExcursions, setIsLoadingExcursions] = useState(true);
    const [excursionsError, setExcursionsError] = useState<string | null>(null);
    
    const pricingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchExcursionData = async () => {
            setIsLoadingExcursions(true);
            setExcursionsError(null);
            try {
                // Cache busting to ensure fresh data
                const response = await fetch(`/data/ausfluege.json?v=${new Date().getTime()}`);
                if (!response.ok) {
                    throw new Error('Netzwerk-Antwort war nicht in Ordnung.');
                }
                const data: ExcursionData = await response.json();
                setExcursionsAvailable(data.excursionsEnabled);
                setExcursionSchedule(data.schedule);
            } catch (error) {
                console.error("Fehler beim Laden der Ausflugsdaten:", error);
                setExcursionsError("Die Ausflugsdaten konnten nicht geladen werden.");
                setExcursionsAvailable(false); // Default to false on error
            } finally {
                setIsLoadingExcursions(false);
            }
        };

        fetchExcursionData();
    }, []);

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
                "Lernen mit Freunden (2-4 Pers.)",
                "Gemeinsamer Spaß & Motivation",
                "Günstigerer Preis pro Person",
                "Eigenes Equipment erforderlich",
            ],
            isFeatured: false,
        }
    ];
    
    const getStatusColor = (status: string) => {
        const lowerStatus = status.toLowerCase();
        if (lowerStatus.includes("vorbei")) return "text-gray-500";
        if (lowerStatus.includes("ausgebucht")) return "text-red-600";
        if (lowerStatus.includes("wenige")) return "text-orange-500";
        if (lowerStatus.includes("verfügbar")) return "text-green-600";
        return "text-brand-gray";
    };

    const handleGoToPricing = () => {
        setSelectedService(null);
        setTimeout(() => {
            pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
    };

    const handleExcursionInquiry = (date: string, location: string) => {
        setIsScheduleModalOpen(false);
        onNavigate('contact', `Anfrage Ausflug: ${location} am ${date}`);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="space-y-12">
                <div>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Meine Leistungen</h2>
                        <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                            Egal ob blutiger Anfänger oder erfahrener Ripper, ich habe den passenden Kurs für dich. Klicke auf eine Leistung für mehr Details.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
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

                <div className="pt-16 border-t border-gray-200">
                     <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Neu: Skatepark Ausflüge</h2>
                         {!isLoadingExcursions && !excursionsError && (
                            <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                                {excursionsAvailable
                                    ? "Lust auf Abwechslung? Begleite mich auf einen Tagesausflug zu einem anderen Skatepark."
                                    : "Aktuell in der Winterpause. Neue Termine für gemeinsame Ausflüge folgen im Frühling!"
                                }
                            </p>
                         )}
                    </div>
                    <div className="mt-12 max-w-md mx-auto min-h-[300px] flex items-center justify-center">
                        {isLoadingExcursions ? (
                             <div className="text-center text-brand-gray">Lade Ausflugs-Infos...</div>
                        ) : excursionsError ? (
                            <div className="p-8 rounded-lg border border-dashed border-red-300 bg-red-50 flex flex-col text-center items-center justify-center w-full">
                                <p className="text-red-600">{excursionsError}</p>
                            </div>
                        ) : excursionsAvailable ? (
                            <div className="p-8 rounded-lg border border-gray-200 shadow-sm bg-white transition-all duration-300 flex flex-col text-center w-full">
                                <h3 className="text-2xl font-bold text-brand-dark">Tagesausflug</h3>
                                <div className="my-4">
                                    <span className="text-5xl font-black text-brand-dark">€25</span>
                                    <span className="text-brand-gray ml-1">/ Person</span>
                                </div>
                                <ul className="space-y-3 mb-8 flex-grow text-left">
                                    {[
                                        "Transport zum Skatepark & zurück",
                                        "Maximal 3 Mitfahrer",
                                        "Gratis Wasser",
                                        "Freies Skaten in der Gruppe",
                                        "Verpflegung selbst mitbringen",
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <svg className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setIsScheduleModalOpen(true)}
                                    className="w-full py-3 px-6 font-bold rounded-lg transition-colors duration-300 bg-brand-primary text-white hover:bg-blue-600"
                                >
                                    Termine ansehen
                                </button>
                            </div>
                        ) : (
                            <div className="p-8 rounded-lg border border-dashed border-gray-300 bg-gray-50 flex flex-col text-center items-center justify-center w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <h3 className="text-2xl font-bold text-brand-dark">Winterpause</h3>
                                <p className="mt-2 text-brand-gray">
                                    Aktuell sind keine neuen Ausflüge geplant. Schau im Frühling wieder vorbei!
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                 <div className="pt-16 border-t border-gray-200">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Online: Video Analyse</h2>
                        <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                            Hol dir professionelles Feedback zu deinen Tricks, egal wo du bist.
                        </p>
                    </div>
                    <div className="mt-12 max-w-md mx-auto">
                        <div className="p-8 rounded-lg border border-gray-200 shadow-sm bg-white transition-all duration-300 flex flex-col text-center">
                            <h3 className="text-2xl font-bold text-brand-dark">Trick-Analyse</h3>
                            <div className="my-4">
                                <span className="text-5xl font-black text-brand-dark">€25</span>
                                <span className="text-brand-gray ml-1">/ pro Video</span>
                            </div>
                            <ul className="space-y-3 mb-8 flex-grow text-left">
                                {[
                                    "Analyse deines Tricks via Video",
                                    "Individuelles, detailliertes Feedback",
                                    "Konkrete Tipps zur Fehlerkorrektur",
                                    "Antwort in der Regel innerhalb von 48h",
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => onNavigate('contact', 'Anfrage: Video Analyse')}
                                className="w-full py-3 px-6 font-bold rounded-lg transition-colors duration-300 bg-blue-50 text-brand-primary hover:bg-blue-100"
                            >
                                Analyse Anfragen
                            </button>
                        </div>
                    </div>
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
                        <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Collaboration</h2>
                        <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                           Authentizität und Action für dein Foto- oder Videoprojekt.
                        </p>
                    </div>
                    <div className="mt-12 max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-lg border border-gray-200 shadow-sm text-left">
                        <ul className="space-y-4">
                            {[
                                { title: "Für Foto- & Videoproduktionen", description: "Dynamische Action-Shots oder authentische Lifestyle-Bilder für Werbekampagnen, Musikvideos oder Social Media." },
                                { title: "Kreative Umsetzung", description: "Ich entwickle gemeinsam mit dir kreative Ideen für Tricks und Lines, die perfekt zu deiner Vision passen." },
                                { title: "Flexible Zusammenarbeit", description: "Professionelle und unkomplizierte Kooperation mit Fotografen, Filmteams und Agenturen." },
                                { title: "Authentischer Lifestyle", description: "Verleihe deiner Marke oder Produktion den echten Vibe der Skate-Kultur." }
                            ].map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-6 h-6 mr-4 text-brand-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <div>
                                        <h4 className="font-bold text-brand-dark">{feature.title}</h4>
                                        <p className="text-brand-gray">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                         <div className="mt-10 text-center">
                            <p className="text-4xl font-bold text-brand-dark">Auf Anfrage</p>
                            <p className="text-gray-500 mt-1">Individuell nach Projektumfang.</p>
                        </div>
                        <div className="mt-8">
                            <button
                                onClick={() => onNavigate('contact', 'Anfrage: Collaboration')}
                                className="w-full px-10 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
                            >
                                Projekt Anfragen
                            </button>
                        </div>
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

            {isScheduleModalOpen && (
                 <Modal
                    isOpen={isScheduleModalOpen}
                    onClose={() => setIsScheduleModalOpen(false)}
                    title="Kommende Skatepark Ausflüge"
                >
                    <div className="p-6 sm:p-8">
                        <div className="space-y-4 text-brand-gray">
                            <p>Hier findest du die nächsten geplanten Termine. Die Plätze sind auf 3 Mitfahrer begrenzt. Sei schnell und sichere dir deinen Platz!</p>
                            {excursionSchedule.length > 0 ? (
                                <ul className="space-y-3 pt-4">
                                    {excursionSchedule.map((trip) => (
                                        <li key={trip.date} className={`p-4 rounded-lg border flex items-center justify-between ${trip.isAvailable ? 'bg-brand-light border-gray-200' : 'bg-gray-100 border-gray-200'}`}>
                                            <div>
                                                <p className={`font-bold ${trip.isAvailable ? 'text-brand-dark' : 'text-gray-500'}`}>{trip.date}</p>
                                                <p className={trip.isAvailable ? '' : 'text-gray-500'}>{trip.location}</p>
                                                <p className={`text-sm font-semibold ${getStatusColor(trip.status)}`}>{trip.status}</p>
                                            </div>
                                            <button
                                                onClick={() => handleExcursionInquiry(trip.date, trip.location)}
                                                disabled={!trip.isAvailable}
                                                className="ml-auto flex-shrink-0 px-4 py-2 bg-blue-50 text-brand-primary font-bold rounded-lg hover:bg-blue-100 transition-colors duration-300 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                                            >
                                                Anfragen
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                 <p className="text-center py-8">Aktuell sind keine neuen Ausflüge geplant. Schau bald wieder vorbei!</p>
                            )}
                            <p className="text-sm pt-2">Weitere Termine folgen in Kürze.</p>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ServicesPage;