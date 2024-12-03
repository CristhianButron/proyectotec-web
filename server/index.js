import express from 'express';
import cors from 'cors';
import swaggerApp from './swagger.js';
import usuarioRoutes from './router/usuarioRouter.js';
import alumnoRoutes from './router/alumnoRouter.js'; 
import administrativoRoutes from './router/administrativoRouter.js';
import pasantiasRoutes from './router/pasantiasRouter.js';
import forosRoutes from './router/forosRouter.js';
import inscripcionesForosRoutes from './router/inscripcionesForosRouter.js';
import inscripcionesPasantiasRoutes from './router/inscripcionesPasantiasRouter.js';
import graduadosRoutes from './router/graduadosRouter.js';
import loginRoutes from './router/loginRouter.js';
//import cors from 'cors';
import { checkDatabaseConnection } from './config/database.js';


const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());
app.use('/api', usuarioRoutes);
app.use('/api', alumnoRoutes); 
app.use('/api', administrativoRoutes);
app.use('/api', pasantiasRoutes);
app.use('/api', forosRoutes);
app.use('/api', inscripcionesForosRoutes);
app.use('/api', inscripcionesPasantiasRoutes);
app.use('/api', graduadosRoutes);
app.use('/api', loginRoutes);


app.use(cors());
// Usa las rutas de alumno
app.use('/', swaggerApp);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

checkDatabaseConnection();

