import raw from "./data.json";

export interface NavigationLink {
  label: string;
  href: string;
}

export interface HeroData {
  titleLine1: string;
  titleLine2: string;
  subtitle: string[];
  primaryCta: string;
  secondaryCta: string;
}

export interface AboutData {
  eyebrow: string;
  scrollTitle: string;
  scrollHint: string;
  title: string;
  highlight: string;
  paragraph1: string;
  paragraph2: string;
  domainsEyebrow: string;
  domains: string[];
}

export interface TechStage {
  number: string;
  label: string;
  title: string;
  description: string;
  accent: "neutral" | "orange" | "emerald";
  coords: string;
}

export interface InfrastructureMetric {
  label: string;
  caption: string;
}

export interface TechnologyData {
  eyebrow: string;
  title: string[];
  description: string;
  stages: TechStage[];
  infrastructureNote: {
    eyebrow: string;
    description: string;
    metrics: InfrastructureMetric[];
  };
}

export interface ApplicationItem {
  id: string;
  image: string;
  label: string;
  shortLabel: string;
  alt: string;
  description: string;
  tag: string;
  coords: string;
}

export interface ApplicationsData {
  eyebrow: string;
  title: string[];
  description: string;
  items: ApplicationItem[];
}

export interface CredentialRecognition {
  id: string;
  category: string;
  title: string;
  description: string;
  year?: string;
  image?: string;
}

export interface CredentialMedia {
  id: string;
  publication: string;
  title: string;
  description: string;
  year?: string;
  link?: string;
  image?: string;
}

export interface CredentialForum {
  id: string;
  title: string;
  venue: string;
  location: string;
  description: string;
  year?: string;
  image?: string;
}

export interface CredentialEcosystem {
  id: string;
  phase: string;
  title: string;
  description: string;
  status?: string;
  image?: string;
}

export interface CredentialAffiliation {
  id: string;
  name: string;
  type: string;
  description: string;
  year?: string;
  image?: string;
}

export interface CredentialSectionHeader {
  eyebrow: string;
  title: string;
  description: string;
}

export interface CredentialsData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  sections: {
    recognition: CredentialSectionHeader;
    media: CredentialSectionHeader;
    forums: CredentialSectionHeader;
    ecosystem: CredentialSectionHeader;
    affiliations: CredentialSectionHeader;
  };
  recognition: CredentialRecognition[];
  media: CredentialMedia[];
  forums: CredentialForum[];
  ecosystem: CredentialEcosystem[];
  affiliations: CredentialAffiliation[];
}

export interface CtaData {
  title: string;
  buttonLabel: string;
}

export interface SiteData {
  site: {
    name: string;
    shortName: string;
    tagline: string;
    websiteUrl: string;
    website: string;
    phone: string;
  };
  navigation: {
    links: NavigationLink[];
    actions: NavigationLink[];
  };
  hero: HeroData;
  about: AboutData;
  technology: TechnologyData;
  applications: ApplicationsData;
  credentials: CredentialsData;
  cta: CtaData;
  footer: {
    brandDescription: string;
    contact: {
      phone: string;
      addressLines: string[];
      website: string;
      websiteUrl: string;
    };
    copyright: string;
    tagline: string;
  };
}

export const data = raw as SiteData;
