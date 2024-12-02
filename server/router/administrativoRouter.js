import express from 'express';
import {
    getAdministrativosController,
    getAdministrativoByIdController,
    createAdministrativoController,
    updateAdministrativoController,
    deleteAdministrativoController
} from '../controller/administrativoController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Administrativos
 *   description: API para gestionar administrativos
 */

/**
 * @swagger
 * /api/administrativos:
 *   get:
 *     summary: Retrieve a list of administrativos
 *     tags: [Administrativos]
 *     responses:
 *       200:
 *         description: A list of administrativos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idadministrativo:
 *                     type: integer
 *                   cargo:
 *                     type: string
 *                   oficina:
 *                     type: string
 *                   usuario_idusuario:
 *                     type: integer
 */
router.get('/administrativos', getAdministrativosController);

/**
 * @swagger
 * /api/administrativos/{id}:
 *   get:
 *     summary: Retrieve a single administrativo by ID
 *     tags: [Administrativos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single administrativo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idadministrativo:
 *                   type: integer
 *                 cargo:
 *                   type: string
 *                 oficina:
 *                   type: string
 *                 usuario_idusuario:
 *                   type: integer
 */
router.get('/administrativos/:id', getAdministrativoByIdController);

/**
 * @swagger
 * /api/administrativos:
 *   post:
 *     summary: Create a new administrativo
 *     tags: [Administrativos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cargo:
 *                 type: string
 *               oficina:
 *                 type: string
 *               usuario_idusuario:
 *                 type: integer
 *     responses:
 *       201:
 *         description: The created administrativo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idadministrativo:
 *                   type: integer
 *                 cargo:
 *                   type: string
 *                 oficina:
 *                   type: string
 *                 usuario_idusuario:
 *                   type: integer
 */
router.post('/administrativos', createAdministrativoController);

/**
 * @swagger
 * /api/administrativos/{id}:
 *   put:
 *     summary: Update an existing administrativo
 *     tags: [Administrativos]
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
 *               cargo:
 *                 type: string
 *               oficina:
 *                 type: string
 *               usuario_idusuario:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The updated administrativo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cargo:
 *                   type: string
 *                 oficina:
 *                   type: string
 *                 usuario_idusuario:
 *                   type: integer
 */
router.put('/administrativos/:id', updateAdministrativoController);

/**
 * @swagger
 * /api/administrativos/{id}:
 *   delete:
 *     summary: Delete an existing administrativo
 *     tags: [Administrativos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The deleted administrativo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idadministrativo:
 *                   type: integer
 *                 cargo:
 *                   type: string
 *                 oficina:
 *                   type: string
 *                 usuario_idusuario:
 *                   type: integer
 */
router.delete('/administrativos/:id', deleteAdministrativoController);

export default router;