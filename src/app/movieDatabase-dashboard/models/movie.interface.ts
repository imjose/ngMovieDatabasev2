export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  backdrop_path: string | null;
  vote_average: number;
  genres?: Genres[];
}

interface Genres {
  id: number;
  name: string;
}
