/**
 * UsuariosTable
 * Componente global presentacional — renderiza la tabla de usuarios.
 * Props:
 *   - usuarios: array de objetos usuario
 *   - onEdit(usuario): handler para iniciar edición
 *   - onDelete(id): handler para eliminar
 */
const UsuariosTable = ({ usuarios, onEdit, onDelete }) => (
    <div className="overflow-hidden rounded-lg shadow bg-white">
        <table className="w-full border-collapse">
            <thead className="bg-gray-50">
                <tr>
                    {['ID', 'Nombre', 'Email', 'Rol', 'Estado', 'Acciones'].map((h) => (
                        <th
                            key={h}
                            className="px-4 py-3 text-left text-sm font-semibold text-gray-600 border-b-2 border-gray-200"
                        >
                            {h}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {usuarios.length === 0 ? (
                    <tr>
                        <td colSpan={6} className="py-8 text-center text-gray-400">
                            No hay usuarios registrados
                        </td>
                    </tr>
                ) : (
                    usuarios.map((usuario) => (
                        <tr key={usuario.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 border-b border-gray-100 text-sm">{usuario.id}</td>
                            <td className="px-4 py-3 border-b border-gray-100 text-sm">{usuario.nombre}</td>
                            <td className="px-4 py-3 border-b border-gray-100 text-sm">{usuario.email}</td>
                            <td className="px-4 py-3 border-b border-gray-100">
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize
                    ${usuario.rol === 'admin'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-purple-100 text-purple-700'}`}
                                >
                                    {usuario.rol}
                                </span>
                            </td>
                            <td className="px-4 py-3 border-b border-gray-100">
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize
                    ${usuario.estado === 'activo'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-orange-100 text-orange-700'}`}
                                >
                                    {usuario.estado}
                                </span>
                            </td>
                            <td className="px-4 py-3 border-b border-gray-100 space-x-2">
                                <button
                                    onClick={() => onEdit(usuario)}
                                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded transition-colors"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => onDelete(usuario.id)}
                                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    </div>
);

export default UsuariosTable;
