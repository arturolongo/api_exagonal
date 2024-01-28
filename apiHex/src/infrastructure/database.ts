// src/infrastructure/database.ts
import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://223271:123456A@cluster0.fb745ce.mongodb.net/";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: false,
      useUnifiedTopology: true,
    } as any);
    console.log('Conexión a MongoDB establecida');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};

export default connectDB;