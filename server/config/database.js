import pg from 'pg';

const pool = new pg.Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'sistema_innovacionempresarial',
    password: process.env.DB_PASSWORD || '1234',
    port: process.env.DB_PORT || 5432
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
