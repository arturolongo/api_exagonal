// src/infrastructure/repositories/product-repository-impl.ts
import mongoose, { Schema, Document } from 'mongoose';
import Product from '../../domain/entities/product-entity';
import { ProductRepository } from '../../domain/repositories/product-respository';

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const ProductModel = mongoose.model<Product & Document>('Product', ProductSchema);

class ProductRepositoryImpl implements ProductRepository {
  async createProduct(product: Product): Promise<Product> {
    const newProduct = new ProductModel(product);
    return await newProduct.save();
  }

  async getAllProducts(): Promise<Product[]> {
    return await ProductModel.find().exec();
  }
}

export default ProductRepositoryImpl;