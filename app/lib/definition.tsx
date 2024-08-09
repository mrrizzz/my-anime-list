interface ImageUrls {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Images {
  jpg: ImageUrls;
  webp: ImageUrls;
}

interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

interface Title {
  type: string;
  title: string;
}

interface AiredProp {
  day: number;
  month: number;
  year: number;
}

interface Aired {
  from: string;
  to: string;
  prop: {
    from: AiredProp;
    to: AiredProp;
    string: string;
  };
}

interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface PaginationItems {
  count: number;
  total: number;
  per_page: number;
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  items: PaginationItems;
}

interface CardData {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Producer[];
  studios: Producer[];
  genres: Producer[];
  explicit_genres: Producer[];
  themes: Producer[];
  demographics: Producer[];
}

interface ApiResponse {
  data: CardData[];
  pagination: Pagination;
}
