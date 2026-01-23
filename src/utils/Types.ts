export type VideoBackgroundProps = {
  movieId: number;
};

type Movie = {
  id: number;
  poster_path: string | null;
};

export type MovieListProps = {
  title: string;
  movies: Movie[] | null;
};

 export type MovieCardProps = {
  posterPath: string | null;
};