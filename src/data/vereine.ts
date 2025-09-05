export interface Verein {
  name: string;
  city: string;
  zip: string;
  state: string;
  website?: string;
  instagram?: string;
}

export const vereine: Verein[] = [
  { name: 'Hamburg Skateboard e.V.', city: 'Hamburg', zip: '22083', state: 'Hamburg', website: 'https://www.skateboardev.de/', instagram: 'https://www.instagram.com/skateboard_ev_hamburg/' },
  { name: '1. Berliner Skateboardverein e.V.', city: 'Berlin', zip: '12555', state: 'Berlin', website: 'http://www.skateboard-berlin.de/', instagram: 'https://www.instagram.com/1.berlinerskateboardverein/' },
  { name: 'North Brigade e.V.', city: 'Köln', zip: '50737', state: 'Nordrhein-Westfalen', website: 'https://northbrigade.de/', instagram: 'https://www.instagram.com/northbrigade/' },
  { name: 'Skateboardinitiative Dortmund e.V. (Verein zur Förderung der Jugendkultur Dortmund e.V.)', city: 'Dortmund', zip: '44147', state: 'Nordrhein-Westfalen', instagram: 'https://www.instagram.com/skateboard_initiative_dortmund/' },
  { name: 'Vest Skateboarding e.V.', city: 'Recklinghausen', zip: '45659', state: 'Nordrhein-Westfalen', instagram: 'https://www.instagram.com/vest_skateboarding_ev/' },
  { name: 'Skateboardclub Walhalla e.V.', city: 'Braunschweig', zip: '38102', state: 'Niedersachsen', instagram: 'https://www.instagram.com/walhalla_ev/' },
  { name: 'Backyard e.V. – Verein für Skateboard und BMX', city: 'Oldenburg', zip: '26127', state: 'Niedersachsen', website: 'https://www.backyard-oldenburg.de/', instagram: 'https://www.instagram.com/backyardev/' },
  { name: '1. Oldenburger Skateboardverein e.V.', city: 'Oldenburg', zip: '26122', state: 'Niedersachsen' },
  { name: '2er Skateboard Verein Hannover e.V.', city: 'Hannover', zip: '30173', state: 'Niedersachsen', website: 'https://www.2erskate.de/', instagram: 'https://www.instagram.com/2erskateboarding/' },
  { name: 'Rollbrett e.V.', city: 'Karlsruhe', zip: '76185', state: 'Baden-Württemberg', website: 'https://www.rollbrett-karlsruhe.de/', instagram: 'https://www.instagram.com/rollbrett_ev/' },
  { name: 'Stuttgarter Skateboard e.V.', city: 'Stuttgart', zip: '70329', state: 'Baden-Württemberg', website: 'https://www.stuttgarter-skateboard-verein.de/', instagram: 'https://www.instagram.com/stuttgarter.skateboard.verein/' },
  { name: 'OG Skateboard e.V.', city: 'Offenburg', zip: '77656', state: 'Baden-Württemberg' },
  { name: 'KNallbrett e.V.', city: 'Konstanz', zip: '78462', state: 'Baden-Württemberg', website: 'https://www.knallbrett.de/', instagram: 'https://www.instagram.com/knallbrett_ev/' },
  { name: 'Skateboarding Freiburg e.V.', city: 'Freiburg im Breisgau', zip: '79115', state: 'Baden-Württemberg', website: 'https://www.skateboarding-freiburg.de/', instagram: 'https://www.instagram.com/skateboardingfreiburg/' },
  { name: 'Concrete Skate e.V.', city: 'Frankfurt am Main', zip: '60437', state: 'Hessen', website: 'https://www.concreteskate.de/', instagram: 'https://www.instagram.com/concrete.skate.ffm/' },
  { name: 'spot Regensburg e.V.', city: 'Regensburg', zip: '93049', state: 'Bayern', instagram: 'https://www.instagram.com/spot_regensburg/' },
  { name: 'Skateboarding München e.V.', city: 'München', zip: '80686', state: 'Bayern', website: 'https://skateboarding-muenchen.org/', instagram: 'https://www.instagram.com/skateboarding_muenchen_ev/' },
  { name: 'SkateMunich! e.V.', city: 'München', zip: '81925', state: 'Bayern' },
  { name: 'Dresden Rollt e.V.', city: 'Dresden', zip: '01067', state: 'Sachsen', website: 'https://dresden-rollt.de/', instagram: 'https://www.instagram.com/dresdenrollt/' },
  { name: 'Pusher e.V.', city: 'Bühl', zip: '77815', state: 'Baden-Württemberg' },
  { name: 'Rollbrett Rottweil e.V.', city: 'Rottweil', zip: '78628', state: 'Baden-Württemberg', website: 'https://www.rollbrett-rottweil.de/', instagram: 'https://www.instagram.com/rollbrett_rottweil/' },
];