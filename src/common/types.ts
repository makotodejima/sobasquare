export type sobayasType = ISobaya[];

export interface ISobaya {
  id: string;
  name: {
    jp: string;
    en: string;
    hiragana: string;
  };
  neighborhood: string;
  address: string;
  googlemaps: string;
  fsq: string;
  coords: { lat: number; lng: number };
  pick: { jp: string; en: string };
  /**
  |--------------------------------------------------
  | Need to write reviews
  |--------------------------------------------------
  */
  review?: {
    en?: string;
    jp?: string;
  };
  url?: string;
  big3?: string;
  vibe: string[];
}

type setSortByType = (sortBy: string) => void;
type setVisibilityFilterType = (visibilityFiler: string) => void;
type setSelectedType = (id: number) => void;
type setLikeType = (id: string, likeSummary: string) => void;

export interface ISearchProps {
  setVisibilityFilter: setVisibilityFilterType;
  setSelected: setSelectedType;
  visibilityFilter: string;
}

export interface ILogoProps {
  setVisibilityFilter: setVisibilityFilterType;
  setSelected: setSelectedType;
  setSortBy: setSortByType;
}

export interface IExpandedListItemProps {
  sobaya: ISobaya;
}

export interface IDetailProps {
  match: any;
  setLike: setLikeType;
  like: any;
  sobayas: sobayasType;
}

export interface IRootState {
  selected: number;
  sobayas: ISobaya[];
  visibilityFilter: string;
  sortBy: string;
  like: any;
}
