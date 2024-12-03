import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../knexfile.js'; 

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
Model.knex(knex);

export const checkDatabaseConnection = async () => {
    try {
      await knex.raw('SELECT 1+1 AS result');
      console.log('Database connection successful');
    } catch (error) {
      console.error('Database connection failed:', error.message);
      throw error;
    }
  };

export default knex;
