import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const titleMap = {
  '/usuarios': 'Gestión de Usuarios',
  '/usuarios/crear': 'Crear Usuario',
  '/usuarios/editar': 'Editar Usuario',
};

function getTitle(pathname) {
  if (pathname.startsWith('/usuarios/editar')) return titleMap['/usuarios/editar'];
  return titleMap[pathname] || 'Dashboard';
}

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const title = getTitle(location.pathname);

  return (
    <div className="min-h-screen bg-dark-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content area */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        <Navbar title={title} onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
