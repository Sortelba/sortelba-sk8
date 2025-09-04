import React from 'react';

const AGBPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 md:py-24 px-4">
      <div className="bg-white p-8 sm:p-12 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Allgemeine Geschäftsbedingungen (AGB)</h2>
        <div className="mt-8 space-y-4 text-brand-gray leading-relaxed prose">
          
          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 1 Geltungsbereich</h3>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Teilnahme an Skatekursen, die zwischen Steffen Ortelbach, Gaußstr. 8, 76131 Karlsruhe und den Teilnehmer*innen geschlossen werden.
          </p>

          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 2 Vertragsschluss</h3>
          <p>
            Die Buchung eines Kurses erfolgt per E-Mail, Telefon oder über das Kontaktformular auf der Website. Mit der Bestätigung durch uns kommt der Vertrag zustande.
          </p>

          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 3 Leistungen</h3>
          <p>
            Wir bieten Skatekurse für verschiedene Alters- und Leistungsgruppen an. Die Inhalte, Termine und Preise der Kurse sind den jeweiligen Kursbeschreibungen auf der Website oder in der individuellen Absprache zu entnehmen.
          </p>

          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 4 Preise und Zahlungsbedingungen</h3>
          <p>Die angegebenen Preise sind Endpreise.</p>
          <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).</p>
          <p>Die Kursgebühr ist nach der Buchungsbestätigung spätestens am ersten Kurstag in bar oder per Überweisung zu zahlen.</p>

          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 5 Rücktritt und Stornierung</h3>
          <p>Eine kostenfreie Stornierung ist bis 7 Tage vor Kursbeginn möglich.</p>
          <p>Bei späterem Rücktritt wird die volle Kursgebühr fällig, es sei denn, es wird eine Ersatzperson gestellt.</p>
          <p>Bei Krankheit oder Ausfall aufgrund höherer Gewalt kann ein Ersatztermin angeboten werden.</p>

          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 6 Haftung</h3>
          <p>Die Teilnahme am Kurs erfolgt auf eigene Gefahr.</p>
          <p>Für Schäden an Gesundheit, Kleidung oder Ausrüstung übernehmen wir keine Haftung, außer bei Vorsatz oder grober Fahrlässigkeit unsererseits.</p>
          <p>Die Teilnehmer*innen sind verpflichtet, geeignete Schutzausrüstung (Helm, Knie-, Ellenbogen- und Handgelenkschoner) zu tragen.</p>
          
          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 7 Absage von Kursen durch den Anbieter</h3>
          <p>
            Wir behalten uns vor, Kurse aus wichtigen Gründen (z. B. Krankheit, Wetterbedingungen, zu geringe Teilnehmerzahl) abzusagen. Bereits gezahlte Gebühren werden in diesem Fall vollständig erstattet.
          </p>

          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 8 Datenschutz</h3>
          <p>
            Personenbezogene Daten der Teilnehmer*innen werden ausschließlich zur Abwicklung des Kurses verwendet. Eine Weitergabe an Dritte erfolgt nicht.
          </p>

          <h3 className="text-xl font-bold text-brand-dark pt-4">§ 9 Schlussbestimmungen</h3>
          <p>Es gilt deutsches Recht.</p>
          <p>Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>

        </div>
      </div>
    </div>
  );
};

export default AGBPage;