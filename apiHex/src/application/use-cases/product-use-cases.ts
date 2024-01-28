// src/application/use-cases/product-use-cases.ts
import Product from '../../domain/entities/product-entity';
import { ProductRepository } from '../../domain/repositories/product-respository';

const addProduct = async (productRepository: ProductRepository, name: string, description: string, price: number): Promise<Product> => {
  const product: Product = { name, description, price };
  return await productRepository.createProduct(product);
};

const getAllProductsUseCase = async (productRepository: ProductRepository): Promise<Product[]> => {
  return await productRepository.getAllProducts();
};

export { addProduct, getAllProductsUseCase };