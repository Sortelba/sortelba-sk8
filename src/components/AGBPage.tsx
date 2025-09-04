import React from 'react';

const AGBPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 md:py-24 px-4">
      <div className="bg-white p-8 sm:p-12 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Allgemeine Geschäftsbedingungen (AGB)</h2>
        <div className="mt-8 space-y-4 text-brand-gray leading-relaxed prose">
          <p>
            Hier stehen Ihre Allgemeinen Geschäftsbedingungen. Dieser Text ist ein Platzhalter. Bitte ersetzen Sie ihn durch Ihre vollständigen und rechtlich geprüften AGB.
          </p>
          
          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 1 Geltungsbereich</h3>
          <p>
            Für die Geschäftsbeziehung zwischen [Ihr Unternehmensname] (nachfolgend „Anbieter“) und dem Kunden (nachfolgend „Kunde“) gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
          </p>

          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 2 Vertragsschluss</h3>
          <p>
            Die Darstellung der Dienstleistungen auf der Website stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe einer Buchung dar. Durch Anklicken des „Jetzt Buchen“-Buttons gibt der Kunde eine verbindliche Anfrage zur Buchung der im Warenkorb enthaltenen Dienstleistungen ab.
          </p>

          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 3 Preise und Zahlungsbedingungen</h3>
          <p>
            Alle Preise, die auf der Website des Anbieters angegeben sind, verstehen sich einschließlich der jeweils gültigen gesetzlichen Umsatzsteuer. Die Zahlung erfolgt per [Zahlungsmethoden, z.B. Vorkasse, PayPal, etc.].
          </p>
          
          <p className="pt-4 font-semibold">
            Dies ist nur ein Beispiel. Fügen Sie hier Ihre vollständigen AGB ein.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AGBPage;