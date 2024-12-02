import pool from '../config/database.js';

export const getInscripcionesPasantias = async () => {
    const result = await pool.query('SELECT * FROM inscripcionespasantias');
    return result.rows;
};

export const getInscripcionPasantiaById = async (id) => {
    const result = await pool.query('SELECT * FROM inscripcionespasantias WHERE idinscripciones_pasantias = $1', [id]);
    return result.rows[0];
};

export const createInscripcionPasantia = async (data) => {
    const { fecha_postulacion, estado, alumno_idalumno, pasantias_idpasantia } = data;
    const result = await pool.query(
        'INSERT INTO inscripcionespasantias (fecha_postulacion, estado, alumno_idalumno, pasantias_idpasantia) VALUES ($1, $2, $3, $4) RETURNING *',
        [fecha_postulacion, estado, alumno_idalumno, pasantias_idpasantia]
    );
    return result.rows[0];
};

export const updateInscripcionPasantia = async (id, data) => {
    const { fecha_postulacion, estado, alumno_idalumno, pasantias_idpasantia } = data;
    const result = await pool.query(
        'UPDATE inscripcionespasantias SET fecha_postulacion = $1, estado = $2, alumno_idalumno = $3, pasantias_idpasantia = $4 WHERE idinscripciones_pasantias = $5 RETURNING *',
        [fecha_postulacion, estado, alumno_idalumno, pasantias_idpasantia, id]
    );
    return result.rows[0];
};

export const deleteInscripcionPasantia = async (id) => {
    await pool.query('DELETE FROM inscripcionespasantias WHERE idinscripciones_pasantias = $1', [id]);
};
