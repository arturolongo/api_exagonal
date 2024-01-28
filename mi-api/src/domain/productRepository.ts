// En '../domain/productRepository.ts'

import Product from './productEntity'; // Asegúrate de tener la ruta correcta
import { Document } from 'mongoose';

export interface ProductRepository {
  createProduct(product: Product): Promise<Product>;
  getAllProducts(): Promise<Product[]>;
}
