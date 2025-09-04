import React, { useState, useEffect, useRef } from 'react';

interface ContactPageProps {
    initialSubject?: string;
}

const topicOptions = [
    'Buchungsanfrage',
    'Gutscheinanfrage',
    'Frage zum Kursinhalt',
    'Feedback & Anregungen',
    'Sonstiges'
];

const ContactPage: React.FC<ContactPageProps> = ({ initialSubject = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Set subject when initialSubject prop changes
  useEffect(() => {
    setSubject(initialSubject);
  }, [initialSubject]);

  // Keep selectedTopics in sync with the subject string.
  // This is the single source of truth for what topics are considered "selected".
  useEffect(() => {
    const currentTopics = topicOptions.filter(topic => subject.includes(topic));
    setSelectedTopics(currentTopics);
  }, [subject]);

  // Handle clicks outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
    setIsSubmitted(true);
  };
  
  const handleAddTopic = (topic: string) => {
    // The check uses the selectedTopics state, which is always in sync
    // with the subject field thanks to the useEffect hook.
    if (selectedTopics.length < 2 && !selectedTopics.includes(topic)) {
      setSubject(prev => prev.trim() ? `${prev.trim()}, ${topic}` : topic);
    }
    setIsDropdownOpen(false);
  };

  const resetForm = () => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      // Resetting the subject will trigger the useEffect to also reset the selectedTopics
      setSubject(initialSubject);
  }

  if (isSubmitted) {
    return (
      <div className="py-16 md:py-24 px-4">
        <div className="text-center bg-white p-12 rounded-lg max-w-lg mx-auto border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-bold text-brand-dark">Vielen Dank!</h2>
          <p className="mt-4 text-brand-gray">
            Deine Nachricht wurde erfolgreich versendet. Ich werde mich so schnell wie möglich bei dir melden.
          </p>
          <button
            onClick={resetForm}
            className="mt-8 px-6 py-2 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Weitere Nachricht senden
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-16 md:py-24 px-4">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Kontakt</h2>
            <p className="mt-4 text-lg text-brand-gray">
                Hast du Fragen oder möchtest einen Kurs buchen? Schreib mir!
            </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-Mail
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Betreff
                </label>
                <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                />
                <div className="relative mt-2" ref={dropdownRef}>
                    <button 
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        disabled={selectedTopics.length >= 2}
                        className="text-sm text-brand-primary hover:underline disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                        Thema aus Liste hinzufügen ({selectedTopics.length}/2)
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200">
                            <ul className="py-1">
                                {topicOptions.map((topic) => {
                                    const isDisabled = selectedTopics.includes(topic);
                                    return (
                                        <li key={topic}>
                                            <button
                                                type="button"
                                                onClick={() => handleAddTopic(topic)}
                                                disabled={isDisabled}
                                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed"
                                            >
                                                {topic}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Nachricht
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brand-primary transition-colors duration-300"
                >
                    Nachricht Senden
                </button>
            </div>
        </form>
    </div>
  );
};

export default ContactPage;