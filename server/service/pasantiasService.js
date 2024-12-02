import pool from '../config/database.js'; // Asegúrate de que la conexión a la base de datos esté configurada correctamente

export const getPasantias = async () => {
    const result = await pool.query('SELECT * FROM pasantias');
    return result.rows;
};

export const getPasantiaById = async (id) => {
    const result = await pool.query('SELECT * FROM pasantias WHERE idpasantia = $1', [id]);
    return result.rows[0];
};

export const createPasantia = async (data) => {
    const { empresa, descripcion, fecha_inicio, fecha_final } = data;
    const result = await pool.query(
        'INSERT INTO pasantias (empresa, descripcion, fecha_inicio, fecha_final) VALUES ($1, $2, $3, $4) RETURNING *',
        [empresa, descripcion, fecha_inicio, fecha_final]
    );
    return result.rows[0];
};

export const updatePasantia = async (id, data) => {
    const { empresa, descripcion, fecha_inicio, fecha_final } = data;
    const result = await pool.query(
        'UPDATE pasantias SET empresa = $1, descripcion = $2, fecha_inicio = $3, fecha_final = $4 WHERE idpasantia = $5 RETURNING *',
        [empresa, descripcion, fecha_inicio, fecha_final, id]
    );
    return result.rows[0];
};

export const deletePasantia = async (id) => {
    await pool.query('DELETE FROM pasantias WHERE idpasantia = $1', [id]);
};
