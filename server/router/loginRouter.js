import express from 'express';
import { loginController } from '../controller/loginController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: API para autenticación de usuarios
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Autenticar un usuario y obtener un token
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               correo:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario autenticado y token generado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */
router.post('/login', loginController);

export default router;
