import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="bg-white p-8 sm:p-12 rounded-lg border border-gray-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1">
            <img
              src="https://drive.google.com/uc?export=view&id=1gBBUWdiNElFUJItm-AZap2PcdCoLOivt
"
              alt="Steffen Ortelbach, Skateboard Coach"
              className="rounded-lg shadow-md w-full h-auto object-cover aspect-square"
            />
          </div>
          <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">Über Mich</h2>
              <p className="mt-4 text-brand-primary font-semibold text-lg">Dein Coach mit Leidenschaft</p>
              <div className="mt-6 space-y-4 text-brand-gray leading-relaxed">
                  <p>
                      Hi, ich bin Steffen! Seit über 20 Jahren ist das Skateboard meine größte Leidenschaft. Was als Hobby begann, wurde schnell zu meinem Lebensinhalt. Ich habe an unzähligen Wettbewerben teilgenommen und die Skate-Szenen in verschiedenen Städten Europas erlebt.
                  </p>
                  <p>
                      Meine wahre Erfüllung habe ich jedoch darin gefunden, mein Wissen und meine Begeisterung weiterzugeben. Es gibt nichts Schöneres, als das Leuchten in den Augen meiner Schüler zu sehen, wenn sie ihren ersten Trick stehen.
                  </p>
                  <p>
                      Mein Unterrichts-Stil ist geduldig, motivierend und auf Sicherheit bedacht. Wir gehen Schritt für Schritt vor, damit du dich jederzeit wohlfühlst und solide Grundlagen entwickelst. Egal, ob du fünf oder fünfundfünfzig bist – es ist nie zu spät, mit dem Skaten anzufangen!
                  </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;