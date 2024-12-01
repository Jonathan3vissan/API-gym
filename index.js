// index.js

import dotenv from 'dotenv'; // Para leer el archivo .env
import server from './server.js'; // Importar el servidor

dotenv.config(); // Cargar las variables de entorno desde .env

const PORT = process.env.PORT || 3000; // Usar el puerto de .env o 3000 por defecto

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
