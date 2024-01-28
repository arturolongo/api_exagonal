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
exports.startServer = void 0;
// expressApp.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_use_cases_1 = require("./application/use-cases/user-use-cases");
const product_use_cases_1 = require("./application/use-cases/product-use-cases");
const database_1 = __importDefault(require("./infrastructure/database"));
const user_repository_impl_1 = __importDefault(require("./infrastructure/repositories/user-repository-impl"));
const product_repository_impl_1 = __importDefault(require("./infrastructure/repositories/product-repository-impl"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(body_parser_1.default.json());
// Repositorios
const userRepository = new user_repository_impl_1.default();
const productRepository = new product_repository_impl_1.default();
// Routes
app.post('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const user = yield (0, user_use_cases_1.addUser)(userRepository, name, email, password);
    res.json(user);
}));
app.get('/api/users', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_use_cases_1.getAllUsersUseCase)(userRepository);
    res.json(users);
}));
app.post('/api/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price } = req.body;
    const product = yield (0, product_use_cases_1.addProduct)(productRepository, name, description, price);
    res.json(product);
}));
app.get('/api/products', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, product_use_cases_1.getAllProductsUseCase)(productRepository);
    res.json(products);
}));
// Connect to MongoDB and start the server
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, database_1.default)();
            app.listen(PORT, () => {
                console.log(`Server is running at http://localhost:${PORT}`);
            });
        }
        catch (error) {
            console.error('Error al conectar a la base de datos:', error);
            process.exit(1);
        }
    });
}
exports.startServer = startServer;
