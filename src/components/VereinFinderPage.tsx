import React, { useState, useMemo } from 'react';
import { vereine } from '../data/vereine';
import type { Verein } from '../data/vereine';

const VereinCard: React.FC<{ verein: Verein }> = ({ verein }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm w-full h-full flex flex-col">
        <h3 className="text-xl font-bold text-brand-primary flex-grow">{verein.name}</h3>
        <div className="mt-4 space-y-2 text-brand-gray">
            <p><span className="font-semibold text-gray-600">Ort:</span> {verein.city}</p>
            <p><span className="font-semibold text-gray-600">PLZ:</span> {verein.zip}</p>
            <p><span className="font-semibold text-gray-600">Bundesland:</span> {verein.state}</p>
        </div>
    </div>
);

const VereinFinderPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredVereine = useMemo(() => {
        const lowercasedTerm = searchTerm.toLowerCase().trim();
        if (!lowercasedTerm) {
            return vereine;
        }

        return vereine.filter(verein =>
            verein.name.toLowerCase().includes(lowercasedTerm) ||
            verein.city.toLowerCase().includes(lowercasedTerm) ||
            verein.zip.toLowerCase().includes(lowercasedTerm) ||
            verein.state.toLowerCase().includes(lowercasedTerm)
        );
    }, [searchTerm]);

    return (
        <div className="max-w-4xl mx-auto py-16 md:py-24 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Verein Finden</h2>
                <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                    Finde Skateboard-Vereine in deiner Nähe. Suche nach Name, Ort, Postleitzahl oder Bundesland.
                </p>
            </div>

            <div className="mb-8 sticky top-20 bg-brand-light/90 backdrop-blur-sm py-4 z-10">
                 <div className="relative">
                    <input
                        type="text"
                        placeholder="Suche nach Name, Ort, PLZ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-4 pl-12 text-lg bg-white border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-300"
                        aria-label="Skateboard-Vereine suchen"
                    />
                     <svg className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {filteredVereine.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredVereine.map((verein) => (
                        <VereinCard key={verein.name} verein={verein} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                    <p className="text-xl text-brand-gray">Keine Vereine für deine Suche gefunden.</p>
                </div>
            )}
        </div>
    );
};

export default VereinFinderPage;
