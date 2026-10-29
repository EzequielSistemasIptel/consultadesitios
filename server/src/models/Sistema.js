import mongoose from 'mongoose';

const sistemaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    descripcion: { type: String, trim: true, default: '' },
    url: { type: String, required: true, trim: true },
    categoria: { type: String, trim: true, default: 'General' },
    icono: { type: String, trim: true, default: '' }, // URL de imagen opcional; sin ícono la card muestra la inicial
    orden: { type: Number, default: 0 },
    activo: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('Sistema', sistemaSchema);
