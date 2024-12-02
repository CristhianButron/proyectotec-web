import express from 'express';
import {
    getPasantias,
    getPasantiaById,
    createPasantia,
    updatePasantia,
    deletePasantia
} from '../service/pasantiasService.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pasantias
 *   description: API para gestionar pasantias
 */

/**
 * @swagger
 * /api/pasantias:
 *   get:
 *     summary: Retrieve a list of pasantias
 *     tags: [Pasantias]
 *     responses:
 *       200:
 *         description: A list of pasantias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idpasantia:
 *                     type: integer
 *                   empresa:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *                   fecha_inicio:
 *                     type: string
 *                     format: date
 *                   fecha_final:
 *                     type: string
 *                     format: date
 */
router.get('/pasantias', async (req, res) => {
    try {
        const pasantias = await getPasantias();
        res.json(pasantias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/pasantias/{id}:
 *   get:
 *     summary: Retrieve a single pasantia by ID
 *     tags: [Pasantias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single pasantia
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idpasantia:
 *                   type: integer
 *                 empresa:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *                 fecha_inicio:
 *                   type: string
 *                   format: date
 *                 fecha_final:
 *                   type: string
 *                   format: date
 */
router.get('/pasantias/:id', async (req, res) => {
    try {
        const pasantia = await getPasantiaById(req.params.id);
        if (pasantia) {
            res.json(pasantia);
        } else {
            res.status(404).json({ error: 'Pasantia not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/pasantias:
 *   post:
 *     summary: Create a new pasantia
 *     tags: [Pasantias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               empresa:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *               fecha_final:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Pasantia created
 */
router.post('/pasantias', async (req, res) => {
    try {
        const newPasantia = await createPasantia(req.body);
        res.status(201).json(newPasantia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/pasantias/{id}:
 *   put:
 *     summary: Update an existing pasantia
 *     tags: [Pasantias]
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
 *               empresa:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *               fecha_final:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Pasantia updated
 */
router.put('/pasantias/:id', async (req, res) => {
    try {
        const updatedPasantia = await updatePasantia(req.params.id, req.body);
        if (updatedPasantia) {
            res.json(updatedPasantia);
        } else {
            res.status(404).json({ error: 'Pasantia not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/pasantias/{id}:
 *   delete:
 *     summary: Delete an existing pasantia
 *     tags: [Pasantias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pasantia deleted
 */
router.delete('/pasantias/:id', async (req, res) => {
    try {
        await deletePasantia(req.params.id);
        res.status(200).json({ message: 'Pasantia deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
