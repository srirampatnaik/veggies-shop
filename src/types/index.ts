export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface User {
  email: string;
  name: string;
}

export type Category = {
  id: string;
  name: string;
  image: string;
}