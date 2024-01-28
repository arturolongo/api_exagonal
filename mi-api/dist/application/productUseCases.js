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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductsUseCase = exports.addProduct = void 0;
// Asegúrate de tener la implementación correcta de tu repositorio (ProductRepositoryImpl)
const productRepositorylmpl_1 = __importDefault(require("../infraestructure/productRepositorylmpl"));
const productRepository = new productRepositorylmpl_1.default();
const addProduct = (name, description, price) => __awaiter(void 0, void 0, void 0, function* () {
    const product = { _id: '', name, description, price };
    return yield productRepository.createProduct(product);
});
exports.addProduct = addProduct;
const getAllProductsUseCase = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield productRepository.getAllProducts();
});
exports.getAllProductsUseCase = getAllProductsUseCase;
