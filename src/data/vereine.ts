export interface Verein {
  name: string;
  city: string;
  zip: string;
  state: string;
}

export const vereine: Verein[] = [
  { name: 'Hamburg Skateboard e.V.', city: 'Hamburg', zip: '22083', state: 'Hamburg' },
  { name: '1. Berliner Skateboardverein e.V.', city: 'Berlin', zip: '12555', state: 'Berlin' },
  { name: 'North Brigade e.V.', city: 'Köln', zip: '50737', state: 'Nordrhein-Westfalen' },
  { name: 'Skateboardinitiative Dortmund e.V. (Verein zur Förderung der Jugendkultur Dortmund e.V.)', city: 'Dortmund', zip: '44147', state: 'Nordrhein-Westfalen' },
  { name: 'Vest Skateboarding e.V.', city: 'Recklinghausen', zip: '45659', state: 'Nordrhein-Westfalen' },
  { name: 'Skateboardclub Walhalla e.V.', city: 'Braunschweig', zip: '38102', state: 'Niedersachsen' },
  { name: 'Backyard e.V. – Verein für Skateboard und BMX', city: 'Oldenburg', zip: '26127', state: 'Niedersachsen' },
  { name: '1. Oldenburger Skateboardverein e.V.', city: 'Oldenburg', zip: '26122', state: 'Niedersachsen' },
  { name: '2er Skateboard Verein Hannover e.V.', city: 'Hannover', zip: '30173', state: 'Niedersachsen' },
  { name: 'Rollbrett e.V.', city: 'Karlsruhe', zip: '76185', state: 'Baden-Württemberg' },
  { name: 'Stuttgarter Skateboard e.V.', city: 'Stuttgart', zip: '70329', state: 'Baden-Württemberg' },
  { name: 'OG Skateboard e.V.', city: 'Offenburg', zip: '77656', state: 'Baden-Württemberg' },
  { name: 'KNallbrett e.V.', city: 'Konstanz', zip: '78462', state: 'Baden-Württemberg' },
  { name: 'Skateboarding Freiburg e.V.', city: 'Freiburg im Breisgau', zip: '79115', state: 'Baden-Württemberg' },
  { name: 'Concrete Skate e.V.', city: 'Frankfurt am Main', zip: '60437', state: 'Hessen' },
  { name: 'spot Regensburg e.V.', city: 'Regensburg', zip: '93049', state: 'Bayern' },
  { name: 'Skateboarding München e.V.', city: 'München', zip: '80686', state: 'Bayern' },
  { name: 'SkateMunich! e.V.', city: 'München', zip: '81925', state: 'Bayern' },
  { name: 'Dresden Rollt e.V.', city: 'Dresden', zip: '01067', state: 'Sachsen' },
];
