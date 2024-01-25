export interface PalI {
  id: number;
  key: string;
  image: string;
  name: string;
  wiki: string;
  types: string[];
  imageWiki: string;
  suitability: SuitabilityI[];
  drops: string[];
  aura: AuraI;
  description: string;
}

export interface SuitabilityI {
  type: string;
  level: number;
}

export interface AuraI {
  name: string;
  description: string;
}
