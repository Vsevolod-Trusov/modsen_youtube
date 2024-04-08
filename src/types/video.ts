export interface VideoState {
  value: number;
}

export type Film = {
  title: string;
  image: string;
  year: number;
  genre: Array<string>;
};
