"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductsUseCase = exports.addProduct = void 0;
const addProduct = (productRepository, name, description, price) => __awaiter(void 0, void 0, void 0, function* () {
    const product = { name, description, price };
    return yield productRepository.createProduct(product);
});
exports.addProduct = addProduct;
const getAllProductsUseCase = (productRepository) => __awaiter(void 0, void 0, void 0, function* () {
    return yield productRepository.getAllProducts();
});
exports.getAllProductsUseCase = getAllProductsUseCase;
