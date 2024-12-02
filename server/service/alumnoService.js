import  pool  from '../config/database.js'; // Asegúrate de que la conexión a la base de datos esté configurada correctamente

export const getAlumnos = async () => {
    const result = await pool.query('SELECT * FROM alumno');
    return result.rows;
};

export const getAlumnoById = async (id) => {
    const result = await pool.query('SELECT * FROM alumno WHERE idalumno = $1', [id]);
    return result.rows[0];
};

export const createAlumno = async (data) => {
    const { carrera, sociedad_cientifica, fecha_ingreso, Usuario_idusuario, centro_estudiantes } = data;
    const result = await pool.query(
        'INSERT INTO alumno (carrera, sociedad_cientifica, fecha_ingreso, usuario_idusuario, centro_estudiantes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [carrera, sociedad_cientifica, fecha_ingreso, Usuario_idusuario, centro_estudiantes]
    );
    return result.rows[0];
};

export const updateAlumno = async (id, data) => {
    const { carrera, sociedad_cientifica, fecha_ingreso, Usuario_idusuario, centro_estudiantes } = data;
    const result = await pool.query(
        'UPDATE alumno SET carrera = $1, sociedad_cientifica = $2, fecha_ingreso = $3, usuario_idusuario = $4, centro_estudiantes = $5 WHERE idalumno = $6 RETURNING *',
        [carrera, sociedad_cientifica, fecha_ingreso, Usuario_idusuario, centro_estudiantes, id]
    );
    return result.rows[0];
};

export const deleteAlumno = async (id) => {
    await pool.query('DELETE FROM alumno WHERE idalumno = $1', [id]);
};