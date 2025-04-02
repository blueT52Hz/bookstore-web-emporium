
export interface BookType {
  id: string;
  title: string;
  author: string;
  publisher: string;
  publishYear: number;
  category: string;
  pages: number;
  price: number;
  cover: string;
  description: string;
  featured?: boolean;
  bestSeller?: boolean;
  newRelease?: boolean;
}
