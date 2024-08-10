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

interface ListDetail {
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

interface AnimeItem {
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
  producers: ListDetail[];
  licensors: ListDetail[];
  studios: ListDetail[];
  genres: ListDetail[];
  explicit_genres: ListDetail[];
  themes: ListDetail[];
  demographics: ListDetail[];
}

interface AnimeApiResponse {
  data: AnimeItem[];
  pagination: Pagination;
}

//FOR MANGA INTERFACE
interface MangaItem {
  mal_id: number;
  url: string;
  images: Images; // Menggunakan interface Images yang sudah ada
  approved: boolean;
  titles: Title[]; // Menggunakan interface Title yang sudah ada
  title: string;
  title_english: string;
  title_japanese: string;
  type: string;
  chapters: number;
  volumes: number;
  status: string;
  publishing: boolean;
  published: Aired; // Menggunakan interface Aired yang sudah ada
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: ListDetail[]; // Menggunakan interface ListDetail yang sudah ada
  serializations: ListDetail[]; // Menggunakan interface ListDetail yang sudah ada
  genres: ListDetail[]; // Menggunakan interface ListDetail yang sudah ada
  explicit_genres: ListDetail[]; // Menggunakan interface ListDetail yang sudah ada
  themes: ListDetail[]; // Menggunakan interface ListDetail yang sudah ada
  demographics: ListDetail[]; // Menggunakan interface ListDetail yang sudah ada
}

interface MangaApiResponse {
  data: MangaItem[];
  pagination: Pagination; // Menggunakan interface Pagination yang sudah ada
}

//FOR CHARACTER
interface CharacterItem {
  mal_id: number;
  url: string;
  images: Images; // Menggunakan interface Images yang sudah ada
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
}

interface CharacterApiResponse {
  data: CharacterItem[];
  pagination: Pagination; // Menggunakan interface Pagination yang sudah ada
}

type MediaItem = AnimeItem & MangaItem & CharacterItem;
