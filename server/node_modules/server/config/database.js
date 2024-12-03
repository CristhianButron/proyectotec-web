import pg from 'pg';

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sistema_innovacionempresarial',
    password: '1234',
    port: 5432
});

export const checkDatabaseConnection = async () => {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        client.release();
    } catch (error) {
        console.error('Failed to connect to the database', error);
    }
};

export default pool;
