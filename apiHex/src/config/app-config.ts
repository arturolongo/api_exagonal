// app-config.ts

// Configuración para la base de datos
export const databaseConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '27017',
    dbName: process.env.DB_NAME || 'mydatabase',
    // ... otras configuraciones de base de datos
  };
  
  // Configuración para el servidor web
  export const serverConfig = {
    port: process.env.PORT || 3000,
    // ... otras configuraciones del servidor
  };
  
  // Configuración para servicios externos
  export const externalServiceConfig = {
    apiUrl: process.env.API_URL || 'https://api.example.com',
    apiKey: process.env.API_KEY || 'your-api-key',
    // ... otras configuraciones de servicios externos
  };
  