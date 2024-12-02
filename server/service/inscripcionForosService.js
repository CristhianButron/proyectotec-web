import pool from '../config/database.js'; // Asegúrate de que la conexión a la base de datos esté configurada correctamente

export const getInscripcionesForos = async () => {
    const result = await pool.query('SELECT * FROM inscripcionesforos');
    return result.rows;
};

export const getInscripcionForoById = async (id) => {
    const result = await pool.query('SELECT * FROM inscripcionesforos WHERE idinscripciones_foros = $1', [id]);
    return result.rows[0];
};

export const createInscripcionForo = async (data) => {
    const { fecha_inscripcion, alumno_idalumno, foros_idforo } = data;
    const result = await pool.query(
        'INSERT INTO inscripcionesforos (fecha_inscripcion, alumno_idalumno, foros_idforo) VALUES ($1, $2, $3) RETURNING *',
        [fecha_inscripcion, alumno_idalumno, foros_idforo]
    );
    return result.rows[0];
};

export const updateInscripcionForo = async (id, data) => {
    const { fecha_inscripcion, alumno_idalumno, foros_idforo } = data;
    const result = await pool.query(
        'UPDATE inscripcionesforos SET fecha_inscripcion = $1, alumno_idalumno = $2, foros_idforo = $3 WHERE idinscripciones_foros = $4 RETURNING *',
        [fecha_inscripcion, alumno_idalumno, foros_idforo, id]
    );
    return result.rows[0];
};

export const deleteInscripcionForo = async (id) => {
    await pool.query('DELETE FROM inscripcionesforos WHERE idinscripciones_foros = $1', [id]);
};
