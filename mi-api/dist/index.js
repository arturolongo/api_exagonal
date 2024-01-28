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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./infraestructure/database"));
const userUseCases_1 = require("./application/userUseCases");
const productUseCases_1 = require("./application/productUseCases");
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use(body_parser_1.default.json());
// User Routes
app.post('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const user = yield (0, userUseCases_1.addUser)(name, email, password);
    res.json(user);
}));
app.get('/api/users', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userUseCases_1.getAllUsersUseCase)();
    res.json(users);
}));
// Product Routes
app.post('/api/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price } = req.body;
    const product = yield (0, productUseCases_1.addProduct)(name, description, price);
    res.json(product);
}));
app.get('/api/products', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, productUseCases_1.getAllProductsUseCase)();
    res.json(products);
}));
// Connect to MongoDB and start the server
(0, database_1.default)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
});
