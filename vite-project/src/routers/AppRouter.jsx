import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../ui/layout/MainLayout';
import UsuariosPage from '../features/usuarios/pages/UsuariosPage';
import UsuarioCreatePage from '../features/usuarios/pages/UsuarioCreatePage';
import UsuarioEditPage from '../features/usuarios/pages/UsuarioEditPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/usuarios" replace />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/usuarios/crear" element={<UsuarioCreatePage />} />
          <Route path="/usuarios/editar/:id" element={<UsuarioEditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
