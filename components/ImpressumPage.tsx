import React from 'react';

const ImpressumPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 md:py-24 px-4">
      <div className="bg-white p-8 sm:p-12 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Impressum</h2>
        <div className="mt-8 space-y-4 text-brand-gray leading-relaxed prose">
            <h3 className="text-xl font-bold text-brand-dark">Angaben gemäß § 5 TMG</h3>
            <p>
                [Max Mustermann]<br />
                [Musterstraße 123]<br />
                [12345 Musterstadt]<br />
                [Deutschland]
            </p>

            <h3 className="text-xl font-bold text-brand-dark pt-4">Kontakt</h3>
            <p>
                Telefon: [Ihre Telefonnummer]<br />
                E-Mail: [Ihre E-Mail-Adresse]
            </p>
            
            <h3 className="text-xl font-bold text-brand-dark pt-4">Umsatzsteuer-ID</h3>
            <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [Ihre USt-IdNr.]
            </p>

            <h3 className="text-xl font-bold text-brand-dark pt-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>
                [Max Mustermann]<br />
                [Anschrift wie oben]
            </p>

            <h3 className="text-xl font-bold text-brand-dark pt-4">Haftungsausschluss</h3>
            <p>
                <strong>Haftung für Inhalte</strong><br />
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>

            <p className="pt-4 font-semibold">
              Dies ist nur ein Beispiel. Bitte ersetzen Sie die Platzhalter durch Ihre eigenen, korrekten Angaben und lassen Sie Ihr Impressum ggf. rechtlich prüfen.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;