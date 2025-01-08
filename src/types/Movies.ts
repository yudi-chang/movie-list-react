export type Movie = {
  Title: string;
  Year: number;
  imdbID: string;
};

export type MoviesFetchPayload = {
  Title?: string;
  page?: number;
};