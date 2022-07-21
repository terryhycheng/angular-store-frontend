type image = {
  id: number;
  url: string;
};

export interface ToyData {
  id: number;
  name: string;
  movie: string;
  model: string;
  quote: string;
  scale: string;
  release_date_short: string;
  intro: string;
  release_date: string;
  price: number;
  images: image[];
}
