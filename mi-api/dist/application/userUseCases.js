"use strict";
// En '../application/userUseCases.ts'
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
exports.getAllUsersUseCase = exports.addUser = void 0;
const userRepositorylmpl_1 = __importDefault(require("../infraestructure/userRepositorylmpl"));
// Crear una instancia del repositorio dentro del archivo
const userRepository = new userRepositorylmpl_1.default();
const addUser = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = { _id: '', name, email, password };
    return yield userRepository.createUser(user);
});
exports.addUser = addUser;
const getAllUsersUseCase = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield userRepository.getAllUsers();
});
exports.getAllUsersUseCase = getAllUsersUseCase;
