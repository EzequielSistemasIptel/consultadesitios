import Sistema from '../models/Sistema.js';

export async function listarSistemas(req, res, next) {
  try {
    const sistemas = await Sistema.find({ activo: true })
      .sort({ categoria: 1, orden: 1, nombre: 1 })
      .lean();
    res.json(sistemas);
  } catch (err) {
    next(err);
  }
}
