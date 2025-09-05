import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <dt>
        <button
          onClick={onClick}
          className="w-full flex justify-between items-center text-left text-gray-800"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-medium">{question}</span>
          <span className="ml-6 h-7 flex items-center">
            <svg
              className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </dt>
      <dd className={`mt-2 pr-12 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="text-base text-brand-gray pt-4">{answer}</p>
      </dd>
    </div>
  );
};

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Was muss ich zur ersten Stunde mitbringen?',
      answer: 'Du brauchst nur bequeme Kleidung und flache Schuhe (am besten Skateschuhe). Ein Skateboard und Schutzausrüstung (Helm, Knie-, Ellbogen- und Handgelenkschoner).',
    },
    {
      question: 'Für welches Alter sind die Kurse geeignet?',
      answer: 'Skateboarding ist für alle da! Ich biete Kurse für Kinder ab 5 Jahren, Jugendliche und Erwachsene an. Es ist nie zu spät, anzufangen.',
    },
    {
      question: 'Finden die Kurse bei schlechtem Wetter statt?',
      answer: 'Meine Kurse finden draußen statt. Bei starkem Regen oder Unwetter wird der Kurs verschoben. Ich informiere dich rechtzeitig per E-Mail oder SMS über einen Ersatztermin.',
    },
    {
      question: 'Wie sicher ist der Unterricht?',
      answer: 'Sicherheit hat oberste Priorität. Schutzausrüstung ist für alle Anfänger Pflicht. Als erfahrener Coach achte ich darauf, dass du die Techniken Schritt für Schritt und in einer sicheren Umgebung lernst.',
    },
    {
      question: 'Kann ich eine Probestunde buchen?',
      answer: 'Ja, der Einzelkurs eignet sich perfekt als Probestunde. Du kannst eine einzelne 60-minütige Session buchen, um zu sehen, ob Skateboarding das Richtige für dich ist und wie dir mein Coaching-Stil gefällt.',
    },
  ];
  
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Häufig gestellte Fragen</h2>
        <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
          Hier findest du Antworten auf die wichtigsten Fragen rund um meine Skateschule.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
        <dl className="space-y-2">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </dl>
      </div>
    </div>
  );
};

export default FAQPage;