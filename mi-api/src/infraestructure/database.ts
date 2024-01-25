import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://arturito:<password>@cluster0.01ghxq5.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any); // Usamos 'as any' para evitar el error de tipo
    console.log('Conexión a MongoDB establecida');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};

export default connectDB;
