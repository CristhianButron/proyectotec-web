import bcrypt from 'bcrypt';
import pool from '../config/database.js';

export const getUsuarios = async () => {
    const result = await pool.query('SELECT * FROM usuario');
    return result.rows;
};

export const getUsuarioById = async (id) => {
    const result = await pool.query('SELECT * FROM usuario WHERE idusuario = $1', [id]);
    return result.rows[0];
};

export const createUsuario = async (data) => {
    const { nombre, apellido, correo, celular, rol, password } = data;

    // Verificar si el correo ya existe
    const existingUser = await pool.query('SELECT * FROM usuario WHERE correo = $1', [correo]);
    if (existingUser.rows.length > 0) {
        throw new Error('El correo ya está en uso');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
        'INSERT INTO usuario (nombre, apellido, correo, celular, rol, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [nombre, apellido, correo, celular, rol, hashedPassword]
    );
    return result.rows[0];
};

export const updateUsuario = async (id, data) => {
    const { nombre, apellido, correo, celular, rol, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
        'UPDATE usuario SET nombre = $1, apellido = $2, correo = $3, celular = $4, rol = $5, password = $6 WHERE idusuario = $7 RETURNING *',
        [nombre, apellido, correo, celular, rol, hashedPassword, id]
    );
    return result.rows[0];
};

export const deleteUsuario = async (id) => {
    await pool.query('DELETE FROM usuario WHERE idusuario = $1', [id]);
};