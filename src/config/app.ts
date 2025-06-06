import express from 'express';
import LibroRoutes from '../routes/libro.routes';
import PrestamoRoutes from '../routes/prestamo.routes'
import { manejoError } from '../middleware/error/ManejoError';
import { validacionCrearLibro } from '../middleware/validadores/web/ValidacionesLibro';
import { validacionIdLibro } from '../middleware/validadores/web/ValidacionesLibro';
import { validacionesCrearPrestamo } from '../middleware/validadores/web/ValidacionesPrestamo';

const app = express();

app.use(express.json());

//middles que validad solicitudes a los libros
app.use('/api/libro/crear', validacionCrearLibro);
app.use('/api/libro/actualizar', validacionCrearLibro, validacionIdLibro);
app.use('/api/libro/eliminar', validacionIdLibro);

//middleware for validate borrow information
app.use('/api/prestamo/crear', validacionesCrearPrestamo);


// rutas
app.use('/api', LibroRoutes);
app.use('/api', PrestamoRoutes);


// middleware de errores
app.use(manejoError);

export default app;