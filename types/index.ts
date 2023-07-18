export interface MainSliders {
  id: string;
  title: string;
  images: [{ id: string; url: string }];
  imageUrl: string;
}

export interface Billboard {
  id: string;
  title: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  billboard: MainSliders;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  isDiscount: boolean;
  description: string;
  options: string;
  priceDiscount: string;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}
