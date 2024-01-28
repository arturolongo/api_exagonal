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
// src/infrastructure/database.ts
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = "mongodb+srv://223271:123456A@cluster0.fb745ce.mongodb.net/";
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(MONGODB_URI, {
            useNewUrlParser: false,
            useUnifiedTopology: true,
        });
        console.log('Conexión a MongoDB establecida');
    }
    catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
});
exports.default = connectDB;
