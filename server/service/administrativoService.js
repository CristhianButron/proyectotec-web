import pool from '../config/database.js'; // Asegúrate de que la conexión a la base de datos esté configurada correctamente

export const getAdministrativos = async () => {
    const result = await pool.query('SELECT * FROM administrativo');
    return result.rows;
};

export const getAdministrativoById = async (id) => {
    const result = await pool.query('SELECT * FROM administrativo WHERE idadministrativo = $1', [id]);
    return result.rows[0];
};

export const createAdministrativo = async (data) => {
    const {cargo, oficina, usuario_idusuario } = data;
    const result = await pool.query(
        'INSERT INTO administrativo (cargo, oficina, usuario_idusuario) VALUES ($1, $2, $3) RETURNING *',
        [ cargo, oficina, usuario_idusuario]
    );
    return result.rows[0];
};

export const updateAdministrativo = async (id, data) => {
    const { cargo, oficina, usuario_idusuario } = data;
    const result = await pool.query(
        'UPDATE administrativo SET cargo = $1, oficina = $2, usuario_idusuario = $3 WHERE idadministrativo = $4 RETURNING *',
        [cargo, oficina, usuario_idusuario, id]
    );
    return result.rows[0];
};

export const deleteAdministrativo = async (id) => {
    const result = await pool.query('DELETE FROM administrativo WHERE idadministrativo = $1 RETURNING *', [id]);
    return result.rows[0];
};