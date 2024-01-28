import express from 'express';
import bodyParser from 'body-parser';
import { addUser, getAllUsersUseCase } from '../application/userUseCases';
import connectDB from './database';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await addUser(name, email, password);
  res.json(user);
});

app.get('/api/users', async (_, res) => {
  const users = await getAllUsersUseCase();
  res.json(users);
});

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
