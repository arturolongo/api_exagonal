import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './infraestructure/database';
import { addUser, getAllUsersUseCase } from './application/userUseCases';
import { addProduct, getAllProductsUseCase } from './application/productUseCases';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// User Routes
app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await addUser(name, email, password);
  res.json(user);
});

app.get('/api/users', async (_, res) => {
  const users = await getAllUsersUseCase();
  res.json(users);
});

// Product Routes
app.post('/api/products', async (req, res) => {
  const { name, description, price } = req.body;
  const product = await addProduct(name, description, price);
  res.json(product);
});

app.get('/api/products', async (_, res) => {
  const products = await getAllProductsUseCase();
  res.json(products);
});

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
