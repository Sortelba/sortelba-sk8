export type Page = 'home' | 'services' | 'about' | 'contact' | 'faq' | 'agb' | 'impressum' | 'verein-finder';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}