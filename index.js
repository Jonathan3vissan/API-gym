import dotenv from 'dotenv';
import server from './server.js';
dotenv.config()

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});