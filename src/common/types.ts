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
  review: {
    en: string;
    jp: string;
  };
  big3: string;
  vibe: string[];
}

type setSortBy = (sortBy: string) => void;
type setVisibilityFilter = (visibilityFiler: string) => void;
type setSelected = (id: number) => void;
type setLike = (id: string, likeSummary: string) => void;

export interface ISearchProps {
  visibilityFilter: string;
  setVisibilityFilter: setVisibilityFilter;
  setSelected: setSelected;
}

export interface IExpandedListItemProps {
  sobaya: ISobaya;
}

export interface IRootState {
  selected: number;
  sobayas: ISobaya[];
  visibilityFilter: string;
  sortBy: string;
  like: any;
}
