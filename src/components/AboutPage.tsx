import React from 'react';
import ImageCarousel from './ImageCarousel';
import { SOCIAL_LINKS } from '../constants';

const AboutPage: React.FC = () => {
  const carouselImages = [
    'https://raw.githubusercontent.com/Sortelba/assets-sortelba.de/main/images/steffen-ortelbach.jpg',
    'https://raw.githubusercontent.com/Sortelba/assets-sortelba.de/main/images/_DSC3413 2.JPG',
    'https://raw.githubusercontent.com/Sortelba/assets-sortelba.de/main/images/_DSC3384 2.JPG',
    'https://raw.githubusercontent.com/Sortelba/assets-sortelba.de/main/images/Steffen_bsTail_Rottweil.jpg',
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="bg-white p-8 sm:p-12 rounded-lg border border-gray-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1">
             <ImageCarousel images={carouselImages} />
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
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-brand-dark">Folge mir auf:</h3>
                <div className="mt-4 flex items-center space-x-6">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gray hover:text-brand-primary transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <social.icon className="h-8 w-8" />
                    </a>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;