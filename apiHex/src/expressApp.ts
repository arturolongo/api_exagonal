// expressApp.ts
import express from 'express';
import bodyParser from 'body-parser';
import { addUser, getAllUsersUseCase } from './application/use-cases/user-use-cases';
import { addProduct, getAllProductsUseCase } from './application/use-cases/product-use-cases';
import connectDB from './infrastructure/database';
import UserRepositoryImpl from './infrastructure/repositories/user-repository-impl';
import ProductRepositoryImpl from './infrastructure/repositories/product-repository-impl';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Repositorios
const userRepository = new UserRepositoryImpl();
const productRepository = new ProductRepositoryImpl();

// Routes
app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await addUser(userRepository, name, email, password);
  res.json(user);
});

app.get('/api/users', async (_, res) => {
  const users = await getAllUsersUseCase(userRepository);
  res.json(users);
});

app.post('/api/products', async (req, res) => {
  const { name, description, price } = req.body;
  const product = await addProduct(productRepository, name, description, price);
  res.json(product);
});

app.get('/api/products', async (_, res) => {
  const products = await getAllProductsUseCase(productRepository);
  res.json(products);
});

// Connect to MongoDB and start the server
async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }
}

// Exporta la función startServer
export { startServer };
