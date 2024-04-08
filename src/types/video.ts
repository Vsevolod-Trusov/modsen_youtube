export interface VideoState {
  value: number;
}

export type Film = {
  id: string;
  title: string;
  image: string;
  year: number;
  genre: Array<string>;
  trailer_embed_link?: string;
};
