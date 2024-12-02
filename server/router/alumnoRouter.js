import express from 'express';
import {
    getAlumnosController,
    getAlumnoByIdController,
    createAlumnoController,
    updateAlumnoController,
    deleteAlumnoController
} from '../controller/alumnoController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Alumnos
 *   description: API para gestionar alumnos
 */

/**
 * @swagger
 * /api/alumnos:
 *   get:
 *     summary: Retrieve a list of alumnos
 *     tags: [Alumnos]
 *     responses:
 *       200:
 *         description: A list of alumnos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idalumno:
 *                     type: integer
 *                   carrera:
 *                     type: string
 *                   sociedad_cientifica:
 *                     type: boolean
 *                   fecha_ingreso:
 *                     type: string
 *                     format: date
 *                   Usuario_idusuario:
 *                     type: integer
 */
router.get('/alumnos', getAlumnosController);

/**
 * @swagger
 * /api/alumnos/{id}:
 *   get:
 *     summary: Retrieve a single alumno by ID
 *     tags: [Alumnos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single alumno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idalumno:
 *                   type: integer
 *                 carrera:
 *                   type: string
 *                 sociedad_cientifica:
 *                   type: boolean
 *                 fecha_ingreso:
 *                   type: string
 *                   format: date
 *                 Usuario_idusuario:
 *                   type: integer
 */
router.get('/alumnos/:id', getAlumnoByIdController);

/**
 * @swagger
 * /api/alumnos:
 *   post:
 *     summary: Create a new alumno
 *     tags: [Alumnos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               carrera:
 *                 type: string
 *               sociedad_cientifica:
 *                 type: boolean
 *               fecha_ingreso:
 *                 type: string
 *                 format: date
 *               Usuario_idusuario:
 *                 type: integer
 *               centro_estudiantes:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Alumno created
 */
router.post('/alumnos', createAlumnoController);

/**
 * @swagger
 * /api/alumnos/{id}:
 *   put:
 *     summary: Update an existing alumno
 *     tags: [Alumnos]
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
 *               carrera:
 *                 type: string
 *               sociedad_cientifica:
 *                 type: boolean
 *               fecha_ingreso:
 *                 type: string
 *                 format: date
 *               Usuario_idusuario:
 *                 type: integer
 *               centro_estudiantes:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Alumno updated
 */
router.put('/alumnos/:id', updateAlumnoController);

/**
 * @swagger
 * /api/alumnos/{id}:
 *   delete:
 *     summary: Delete an existing alumno
 *     tags: [Alumnos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Alumno deleted
 */
router.delete('/alumnos/:id', deleteAlumnoController);

export default router;