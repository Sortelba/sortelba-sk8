import React from 'react';
import type { Page } from '../types';

interface VouchersPageProps {
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

const VouchersPage: React.FC<VouchersPageProps> = ({ onNavigate }) => {
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
        <div className="space-y-12">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Gutscheine Verschenken</h2>
                <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                    Ein unvergessliches Erlebnis verschenken. Wähle den passenden Wert und mache jemandem eine Freude.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {voucherOptions.map(option => <VoucherCard key={option.value} {...option} onNavigate={onNavigate} />)}
            </div>
        </div>
    );
};

export default VouchersPage;