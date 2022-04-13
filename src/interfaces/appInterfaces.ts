export interface LoginResponse {
  usuario: Usuario;
  token: string;
}

export interface Usuario {
  rol: string;
  estado: boolean;
  google: boolean;
  nombre: string;
  correo: string;
  uid: string;
  img?: string;
}

export interface LoginData {
  correo: string;
  password: string;
}

export interface RegisterData {
  nombre: string;
  correo: string;
  password: string;
}

export interface ProductosResponse {
  total: number;
  productos: Producto[];
}

export interface Producto {
  precio: number;
  _id: string;
  nombre: string;
  categoria: Categoria | null;
  usuario: Usuario;
  img?: string;
}

export interface Usuario {
  _id: string;
  nombre: string;
}

export interface CategoriesResponse {
  total: number;
  categorias: Categoria[];
}

export interface Categoria {
  _id: string;
  nombre: string;
  usuario?: CreadoPor;
}

export interface CreadoPor {
  _id: string;
  nombre: string;
}
