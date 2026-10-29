// Carga los sistemas de sistemas.json en la base, reemplazando los existentes.
// Uso: npm run seed
import 'dotenv/config';
import { readFile } from 'node:fs/promises';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import Sistema from '../models/Sistema.js';

const archivo = new URL('./sistemas.json', import.meta.url);
const sistemas = JSON.parse(await readFile(archivo, 'utf8'));

await connectDB(process.env.MONGO_URI);
await Sistema.deleteMany({});
await Sistema.insertMany(sistemas);
console.log(`${sistemas.length} sistemas cargados`);
await mongoose.disconnect();
