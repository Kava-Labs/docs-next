export interface SocialLink {
  name: string;
  url: string;
}

export interface InternalNavLink {
  title: string;
  id: string;
}

export interface TransformedHTML {
  html: string;
  internalNavLinks: InternalNavLink[];
}
