import pool from '../config/database.js'; // Asegúrate de que la conexión a la base de datos esté configurada correctamente

export const getForos = async () => {
    const result = await pool.query('SELECT * FROM foros');
    return result.rows;
};

export const getForoById = async (id) => {
    const result = await pool.query('SELECT * FROM foros WHERE idforo = $1', [id]);
    return result.rows[0];
};

export const createForo = async (data) => {
    const { nombre, autor, descripcion, fecha_inicio } = data;
    const result = await pool.query(
        'INSERT INTO foros (nombre, autor, descripcion, fecha_inicio) VALUES ($1, $2, $3, $4) RETURNING *',
        [nombre, autor, descripcion, fecha_inicio]
    );
    return result.rows[0];
};

export const updateForo = async (id, data) => {
    const { nombre, autor, descripcion, fecha_inicio } = data;
    const result = await pool.query(
        'UPDATE foros SET nombre = $1, autor = $2, descripcion = $3, fecha_inicio = $4 WHERE idforo = $5 RETURNING *',
        [nombre, autor, descripcion, fecha_inicio, id]
    );
    return result.rows[0];
};

export const deleteForo = async (id) => {
    await pool.query('DELETE FROM foros WHERE idforo = $1', [id]);
};
