import express from 'express';
import {
    getForosController,
    getForoByIdController,
    createForoController,
    updateForoController,
    deleteForoController
} from '../controller/forosController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Foros
 *   description: API para gestionar foros
 */

/**
 * @swagger
 * /api/foros:
 *   get:
 *     summary: Retrieve a list of foros
 *     tags: [Foros]
 *     responses:
 *       200:
 *         description: A list of foros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idforo:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   autor:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *                   fecha_inicio:
 *                     type: string
 *                     format: date
 */
router.get('/foros', getForosController);

/**
 * @swagger
 * /api/foros/{id}:
 *   get:
 *     summary: Retrieve a single foro by ID
 *     tags: [Foros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single foro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idforo:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 autor:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *                 fecha_inicio:
 *                   type: string
 *                   format: date
 */
router.get('/foros/:id', getForoByIdController);

/**
 * @swagger
 * /api/foros:
 *   post:
 *     summary: Create a new foro
 *     tags: [Foros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               autor:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Foro created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idforo:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 autor:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *                 fecha_inicio:
 *                   type: string
 *                   format: date
 */
router.post('/foros', createForoController);

/**
 * @swagger
 * /api/foros/{id}:
 *   put:
 *     summary: Update an existing foro
 *     tags: [Foros]
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
 *               autor:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Foro updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idforo:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 autor:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *                 fecha_inicio:
 *                   type: string
 *                   format: date
 */
router.put('/foros/:id', updateForoController);

/**
 * @swagger
 * /api/foros/{id}:
 *   delete:
 *     summary: Delete an existing foro
 *     tags: [Foros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Foro deleted
 */
router.delete('/foros/:id', deleteForoController);

export default router;
