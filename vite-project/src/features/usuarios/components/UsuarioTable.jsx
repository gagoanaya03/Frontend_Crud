import { useNavigate } from 'react-router-dom';
import { HiPencilSquare, HiTrash } from 'react-icons/hi2';
import Badge from '../../../ui/base/Badge';
import Spinner from '../../../ui/base/Spinner';

const rolVariant = {
  Admin: 'info',
  User: 'warning',
};

const estadoVariant = {
  Activo: 'success',
  Inactivo: 'danger',
};

export default function UsuarioTable({ usuarios, onDelete, loading }) {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!usuarios || usuarios.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dark-600 flex items-center justify-center">
          <HiTrash className="w-7 h-7 text-gray-600" />
        </div>
        <p className="text-gray-500 text-sm">No se encontraron usuarios</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-dark-600">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-dark-700/60 border-b border-dark-600">
            <th className="px-4 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              ID
            </th>
            <th className="px-4 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-4 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden sm:table-cell">
              Email
            </th>
            <th className="px-4 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">
              Rol
            </th>
            <th className="px-4 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">
              Estado
            </th>
            <th className="px-4 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-dark-600">
          {usuarios.map((usuario) => (
            <tr
              key={usuario.id}
              className="bg-dark-800 hover:bg-dark-700/50 transition-colors duration-150"
            >
              <td className="px-4 py-3 text-gray-500 font-mono text-xs">
                #{usuario.id}
              </td>
              <td className="px-4 py-3">
                <div>
                  <p className="text-gray-200 font-medium">{usuario.nombre}</p>
                  <p className="text-gray-500 text-xs sm:hidden">{usuario.email}</p>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-400 hidden sm:table-cell">
                {usuario.email}
              </td>
              <td className="px-4 py-3 hidden md:table-cell">
                <Badge variant={rolVariant[usuario.rol] || 'info'}>
                  {usuario.rol}
                </Badge>
              </td>
              <td className="px-4 py-3 hidden md:table-cell">
                <Badge variant={estadoVariant[usuario.estado] || 'info'}>
                  {usuario.estado}
                </Badge>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-end gap-1">
                  <button
                    onClick={() => navigate(`/usuarios/editar/${usuario.id}`)}
                    className="p-2 rounded-lg text-gray-400 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-200 cursor-pointer"
                    title="Editar"
                  >
                    <HiPencilSquare className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(usuario.id)}
                    className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 cursor-pointer"
                    title="Eliminar"
                  >
                    <HiTrash className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
