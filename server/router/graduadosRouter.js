import express from 'express';
import {
    getGraduadosController,
    getGraduadoByIdController,
    createGraduadoController,
    updateGraduadoController,
    deleteGraduadoController
} from '../controller/graduadosController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Graduados
 *   description: API para gestionar graduados
 */

/**
 * @swagger
 * /api/graduados:
 *   get:
 *     summary: Retrieve a list of graduados
 *     tags: [Graduados]
 *     responses:
 *       200:
 *         description: A list of graduados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idgraduados:
 *                     type: integer
 *                   fecha_graduacion:
 *                     type: string
 *                     format: date
 *                   alumno_idalumno:
 *                     type: integer
 */
router.get('/graduados', getGraduadosController);

/**
 * @swagger
 * /api/graduados/{id}:
 *   get:
 *     summary: Retrieve a single graduado by ID
 *     tags: [Graduados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single graduado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idgraduados:
 *                   type: integer
 *                 fecha_graduacion:
 *                   type: string
 *                   format: date
 *                 alumno_idalumno:
 *                   type: integer
 */
router.get('/graduados/:id', getGraduadoByIdController);

/**
 * @swagger
 * /api/graduados:
 *   post:
 *     summary: Create a new graduado
 *     tags: [Graduados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_graduacion:
 *                 type: string
 *                 format: date
 *               alumno_idalumno:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Graduado created
 */
router.post('/graduados', createGraduadoController);

/**
 * @swagger
 * /api/graduados/{id}:
 *   put:
 *     summary: Update an existing graduado
 *     tags: [Graduados]
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
 *               fecha_graduacion:
 *                 type: string
 *                 format: date
 *               alumno_idalumno:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Graduado updated
 */
router.put('/graduados/:id', updateGraduadoController);

/**
 * @swagger
 * /api/graduados/{id}:
 *   delete:
 *     summary: Delete an existing graduado
 *     tags: [Graduados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Graduado deleted
 */
router.delete('/graduados/:id', deleteGraduadoController);

export default router;
