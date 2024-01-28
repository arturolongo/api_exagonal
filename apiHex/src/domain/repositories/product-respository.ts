// src/domain/repositories/product-repository.ts
import Product from '../entities/product-entity';

export interface ProductRepository {
  createProduct(product: Product): Promise<Product>;
  getAllProducts(): Promise<Product[]>;
}