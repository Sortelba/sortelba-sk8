import React, { useState, useMemo } from 'react';
import { vereine } from '../data/vereine';
import type { Verein } from '../data/vereine';

const WebsiteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.536a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const VereinCard: React.FC<{ verein: Verein }> = ({ verein }) => (
    <div className="relative bg-white p-6 rounded-lg border border-gray-200 shadow-sm w-full h-full flex flex-col">
        <div className="absolute top-4 right-4 flex items-center space-x-3">
            {verein.website && (
                <a href={verein.website} target="_blank" rel="noopener noreferrer" aria-label={`${verein.name} Website`} className="text-gray-400 hover:text-brand-primary transition-colors">
                    <WebsiteIcon className="w-6 h-6" />
                </a>
            )}
            {verein.instagram && (
                <a href={verein.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${verein.name} Instagram`} className="text-gray-400 hover:text-brand-primary transition-colors">
                    <InstagramIcon className="w-6 h-6" />
                </a>
            )}
        </div>
        <h3 className="text-xl font-bold text-brand-primary flex-grow pr-16">{verein.name}</h3>
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