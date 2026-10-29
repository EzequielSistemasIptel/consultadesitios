import { Router } from 'express';
import { listarSistemas } from '../controllers/sistemas.controller.js';

const router = Router();

// Alta, edición y baja se agregan junto con el login, para que queden protegidas.
router.get('/', listarSistemas);

export default router;
