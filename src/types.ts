export type Page = 'home' | 'services' | 'about' | 'contact' | 'faq' | 'agb' | 'impressum';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}