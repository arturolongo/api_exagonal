import Product from '../domain/productEntity';
import { ProductRepository } from '../domain/productRepository';

// Asegúrate de tener la implementación correcta de tu repositorio (ProductRepositoryImpl)
import ProductRepositoryImpl from '../infraestructure/productRepositorylmpl';

const productRepository: ProductRepository = new ProductRepositoryImpl();

const addProduct = async (name: string, description: string, price: number): Promise<Product> => {
  const product: Product = { _id: '', name, description, price };
  return await productRepository.createProduct(product);
};

const getAllProductsUseCase = async (): Promise<Product[]> => {
  return await productRepository.getAllProducts();
};

export { addProduct, getAllProductsUseCase };
