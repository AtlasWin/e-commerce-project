export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt?: Date | string;
  updatedAt?: Date | string;
}

export interface EachCategory {
  name: string;
}

export interface CategoryProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date | string;
  updatedAt: Date | string;
  category: Category;
}

export interface AllProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt?: Date | string;
  updatedAt?: Date | string;
  category: Category;
}

export interface SingleProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt?: Date | string;
  updatedAt?: Date | string;
  quantity?: number;
}

export interface Initial {
  cart: SingleProduct[];
}

export interface Pagination {
  page: number;
  offset: number;
  limit: number;
}

export interface User {
  id?: number;
  email: string;
  password: string;
  name: string;
  role?: string;
  avatar?: string;
  creationAt?: Date | string;
  updatedAt?: Date | string;
}

export interface UserLogin {
  email: string;
  password: string;
}
