import React, { useState } from 'react';
import type { Page } from '../types';
import Modal from './Modal';

interface SkateEvent {
    id: number;
    date: string; // YYYY-MM-DD format
    title: string;
    time: string;
    location: string;
    description: string;
}

// Sample data for events
const events: SkateEvent[] = [
    {
        id: 1,
        date: '2024-08-10',
        title: 'Beginner Workshop',
        time: '14:00 - 16:00',
        location: 'Skatepark am Hauptbahnhof',
        description: 'Lerne die Grundlagen des Skateboardens in einer sicheren und freundlichen Umgebung. Perfekt für absolute Anfänger.'
    },
    {
        id: 2,
        date: '2024-08-24',
        title: 'Summer Skate Jam',
        time: '12:00 - 18:00',
        location: 'Mellowpark',
        description: 'Ein Tag voller Skateboarding, Musik und guter Laune. Offen für alle Levels, mit kleinen Contests und Preisen.'
    },
    {
        id: 3,
        date: '2024-09-07',
        title: 'Advanced Ollie Clinic',
        time: '15:00 - 17:00',
        location: 'Skatehalle Berlin',
        description: 'Perfektioniere deinen Ollie und lerne Variationen wie den 180 Ollie. Für Skater, die die Grundlagen bereits beherrschen.'
    }
];

interface EventsPageProps {
    onNavigate: (page: Page, subject?: string) => void;
}

const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState<SkateEvent | null>(null);

    const daysOfWeek = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Adjust for week starting on Monday (0=Sunday, 1=Monday...)
    const startOffset = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    };
    
    const handleEventClick = (event: SkateEvent) => {
        setSelectedEvent(event);
    }
    
    const handleModalClose = () => {
        setSelectedEvent(null);
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Events & Workshops</h2>
                <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                    Bleib auf dem Laufenden über unsere kommenden Kurse, Jams und Special Events.
                </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-6 h-6 text-brand-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <h3 className="text-xl font-bold text-brand-dark">
                        {currentDate.toLocaleString('de-DE', { month: 'long', year: 'numeric' })}
                    </h3>
                    <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <svg className="w-6 h-6 text-brand-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center font-semibold text-brand-gray text-sm">
                    {daysOfWeek.map(day => <div key={day} className="py-2">{day}</div>)}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: startOffset }).map((_, index) => (
                        <div key={`empty-${index}`} className="border-t border-gray-200"></div>
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, dayIndex) => {
                        const day = dayIndex + 1;
                        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                        const eventOnDay = events.find(e => e.date === dateStr);
                        
                        return (
                            <div key={day} className="border-t border-gray-200 py-2">
                                <button
                                    onClick={() => eventOnDay && handleEventClick(eventOnDay)}
                                    disabled={!eventOnDay}
                                    className={`w-10 h-10 mx-auto flex items-center justify-center rounded-full transition-colors text-gray-700 ${eventOnDay ? 'cursor-pointer hover:bg-blue-100' : 'text-gray-400'}`}
                                >
                                    <span className={`relative ${eventOnDay ? 'font-bold' : ''}`}>
                                        {day}
                                        {eventOnDay && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full"></span>}
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {selectedEvent && (
                <Modal isOpen={!!selectedEvent} onClose={handleModalClose} title={selectedEvent.title}>
                    <div className="p-6 sm:p-8 space-y-4">
                        <div className="text-brand-gray">
                            <p><strong>Datum:</strong> {new Date(selectedEvent.date).toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            <p><strong>Uhrzeit:</strong> {selectedEvent.time}</p>
                            <p><strong>Ort:</strong> {selectedEvent.location}</p>
                        </div>
                        <p className="text-gray-700">{selectedEvent.description}</p>
                        <div className="pt-4 border-t border-gray-200">
                            <button
                                onClick={() => {
                                    handleModalClose();
                                    onNavigate('contact', `Anmeldung für: ${selectedEvent.title} am ${selectedEvent.date}`);
                                }}
                                className="w-full py-3 px-6 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
                            >
                                Jetzt Anmelden
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default EventsPage;