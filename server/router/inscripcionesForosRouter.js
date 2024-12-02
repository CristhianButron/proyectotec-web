import express from 'express';
import {
    getInscripcionesForos,
    getInscripcionForoById,
    createInscripcionForo,
    updateInscripcionForo,
    deleteInscripcionForo
} from '../service/inscripcionForosService.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: InscripcionesForos
 *   description: API para gestionar inscripciones en foros
 */

/**
 * @swagger
 * /api/inscripcionesforos:
 *   get:
 *     summary: Retrieve a list of inscripciones foros
 *     tags: [InscripcionesForos]
 *     responses:
 *       200:
 *         description: A list of inscripciones foros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idinscripciones_foros:
 *                     type: integer
 *                   fecha_inscripcion:
 *                     type: string
 *                     format: date
 *                   alumno_idalumno:
 *                     type: integer
 *                   foros_idforo:
 *                     type: integer
 */
router.get('/inscripcionesforos', async (req, res) => {
    const inscripciones = await getInscripcionesForos();
    res.json(inscripciones);
});

/**
 * @swagger
 * /api/inscripcionesforos/{id}:
 *   get:
 *     summary: Retrieve a single inscripcion foro by ID
 *     tags: [InscripcionesForos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single inscripcion foro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idinscripciones_foros:
 *                   type: integer
 *                 fecha_inscripcion:
 *                   type: string
 *                   format: date
 *                 alumno_idalumno:
 *                   type: integer
 *                 foros_idforo:
 *                   type: integer
 */
router.get('/inscripcionesforos/:id', async (req, res) => {
    const inscripcion = await getInscripcionForoById(req.params.id);
    res.json(inscripcion);
});

/**
 * @swagger
 * /api/inscripcionesforos:
 *   post:
 *     summary: Create a new inscripcion foro
 *     tags: [InscripcionesForos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_inscripcion:
 *                 type: string
 *                 format: date
 *               alumno_idalumno:
 *                 type: integer
 *               foros_idforo:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Inscripcion foro created
 */
router.post('/inscripcionesforos', async (req, res) => {
    const newInscripcion = await createInscripcionForo(req.body);
    res.status(201).json(newInscripcion);
});

/**
 * @swagger
 * /api/inscripcionesforos/{id}:
 *   put:
 *     summary: Update an existing inscripcion foro
 *     tags: [InscripcionesForos]
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
 *               fecha_inscripcion:
 *                 type: string
 *                 format: date
 *               alumno_idalumno:
 *                 type: integer
 *               foros_idforo:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Inscripcion foro updated
 */
router.put('/inscripcionesforos/:id', async (req, res) => {
    const updatedInscripcion = await updateInscripcionForo(req.params.id, req.body);
    res.json(updatedInscripcion);
});

/**
 * @swagger
 * /api/inscripcionesforos/{id}:
 *   delete:
 *     summary: Delete an existing inscripcion foro
 *     tags: [InscripcionesForos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inscripcion foro deleted
 */
router.delete('/inscripcionesforos/:id', async (req, res) => {
    await deleteInscripcionForo(req.params.id);
    res.status(200).send();
});

export default router;
