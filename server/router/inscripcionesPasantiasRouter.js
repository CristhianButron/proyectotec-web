import express from 'express';
import {
    getInscripcionesPasantiasController,
    getInscripcionPasantiaByIdController,
    createInscripcionPasantiaController,
    updateInscripcionPasantiaController,
    deleteInscripcionPasantiaController
} from '../controller/inscripcionesPasantiasController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: InscripcionesPasantias
 *   description: API para gestionar inscripciones a pasantias
 */

/**
 * @swagger
 * /api/inscripcionesPasantias:
 *   get:
 *     summary: Retrieve a list of inscripciones pasantias
 *     tags: [InscripcionesPasantias]
 *     responses:
 *       200:
 *         description: A list of inscripciones pasantias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idinscripciones_pasantias:
 *                     type: integer
 *                   fecha_postulacion:
 *                     type: string
 *                     format: date
 *                   estado:
 *                     type: string
 *                   alumno_idalumno:
 *                     type: integer
 *                   pasantias_idpasantia:
 *                     type: integer
 */
router.get('/inscripcionesPasantias', getInscripcionesPasantiasController);

/**
 * @swagger
 * /api/inscripcionesPasantias/{id}:
 *   get:
 *     summary: Retrieve a single inscripcion pasantia by ID
 *     tags: [InscripcionesPasantias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single inscripcion pasantia
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idinscripciones_pasantias:
 *                   type: integer
 *                 fecha_postulacion:
 *                   type: string
 *                   format: date
 *                 estado:
 *                   type: string
 *                 alumno_idalumno:
 *                   type: integer
 *                 pasantias_idpasantia:
 *                   type: integer
 */
router.get('/inscripcionesPasantias/:id', getInscripcionPasantiaByIdController);

/**
 * @swagger
 * /api/inscripcionesPasantias:
 *   post:
 *     summary: Create a new inscripcion pasantia
 *     tags: [InscripcionesPasantias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_postulacion:
 *                 type: string
 *                 format: date
 *               estado:
 *                 type: string
 *               alumno_idalumno:
 *                 type: integer
 *               pasantias_idpasantia:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Inscripcion pasantia created
 */
router.post('/inscripcionesPasantias', createInscripcionPasantiaController);

/**
 * @swagger
 * /api/inscripcionesPasantias/{id}:
 *   put:
 *     summary: Update an existing inscripcion pasantia
 *     tags: [InscripcionesPasantias]
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
 *               fecha_postulacion:
 *                 type: string
 *                 format: date
 *               estado:
 *                 type: string
 *               alumno_idalumno:
 *                 type: integer
 *               pasantias_idpasantia:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Inscripcion pasantia updated
 */
router.put('/inscripcionesPasantias/:id', updateInscripcionPasantiaController);

/**
 * @swagger
 * /api/inscripcionesPasantias/{id}:
 *   delete:
 *     summary: Delete an existing inscripcion pasantia
 *     tags: [InscripcionesPasantias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inscripcion pasantia deleted
 */
router.delete('/inscripcionesPasantias/:id', deleteInscripcionPasantiaController);

export default router;
