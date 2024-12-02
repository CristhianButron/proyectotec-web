import pool from '../config/database.js'; // Asegúrate de que la conexión a la base de datos esté configurada correctamente

export const getGraduados = async () => {
    const result = await pool.query('SELECT * FROM graduados');
    return result.rows;
};

export const getGraduadoById = async (id) => {
    const result = await pool.query('SELECT * FROM graduados WHERE idgraduados = $1', [id]);
    return result.rows[0];
};

export const createGraduado = async (data) => {
    const { fecha_graduacion, alumno_idalumno } = data;
    const result = await pool.query(
        'INSERT INTO graduados (fecha_graduacion, alumno_idalumno) VALUES ($1, $2) RETURNING *',
        [fecha_graduacion, alumno_idalumno]
    );
    return result.rows[0];
};

export const updateGraduado = async (id, data) => {
    const { fecha_graduacion, alumno_idalumno } = data;
    const result = await pool.query(
        'UPDATE graduados SET fecha_graduacion = $1, alumno_idalumno = $2 WHERE idgraduados = $3 RETURNING *',
        [fecha_graduacion, alumno_idalumno, id]
    );
    return result.rows[0];
};

export const deleteGraduado = async (id) => {
    await pool.query('DELETE FROM graduados WHERE idgraduados = $1', [id]);
};
