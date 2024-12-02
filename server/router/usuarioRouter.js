import express from 'express';
import {
    getUsuariosController,
    getUsuarioByIdController,
    createUsuarioController,
    updateUsuarioController,
    deleteUsuarioController
} from '../controller/usuarioController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API para gestionar usuarios
 */

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Retrieve a list of usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: A list of usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idusuario:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   apellido:
 *                     type: string
 *                   correo:
 *                     type: string
 *                   celular:
 *                     type: string
 *                   rol:
 *                     type: string
 *                   password:
 *                     type: string
 */
router.get('/usuarios', getUsuariosController);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Retrieve a single usuario by ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idusuario:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 apellido:
 *                   type: string
 *                 correo:
 *                   type: string
 *                 celular:
 *                   type: string
 *                 rol:
 *                   type: string
 *                 password:
 *                   type: string
 */
router.get('/usuarios/:id', getUsuarioByIdController);

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Create a new usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               correo:
 *                 type: string
 *               celular:
 *                 type: string
 *               rol:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario created
 */
router.post('/usuarios', createUsuarioController);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Update an existing usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               correo:
 *                 type: string
 *               celular:
 *                 type: string
 *               rol:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario updated
 */
router.put('/usuarios/:id', updateUsuarioController);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Delete an existing usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario deleted
 */
router.delete('/usuarios/:id', deleteUsuarioController);

export default router;