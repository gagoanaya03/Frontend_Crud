import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../features/dashboard';

/**
 * AppRouter
 * Define todas las rutas de la aplicación.
 * Para agregar una nueva ruta: importa el componente de su feature
 * y añade un <Route> dentro de <Routes>.
 */
const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Próximas rutas se agregan aquí:
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="*"        element={<NotFound />}  />
      */}
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
