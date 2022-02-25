export interface TransformedHTML {
  html: string;
  tableOfContents: { title: string; id: string }[];
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface TableOfContentEntry {}
