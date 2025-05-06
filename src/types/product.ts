export type Product = {
  id: number | string;
  title: string;
  thumbnail: string;
  rating?: number;
  price: number;
  oldPrice?: number;
  isSale?: boolean;
  description?: string;
  category?: string;
  brand?: string;
  stock?: number;
  images?: string[];
}