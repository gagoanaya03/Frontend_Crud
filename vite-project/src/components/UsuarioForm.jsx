/**
 * UsuarioForm
 * Componente global de formulario para crear / editar un usuario.
 * Props:
 *   - formData: objeto con los campos del formulario
 *   - onChange(e): handler para actualizar formData
 *   - onSubmit(e): handler del submit
 *   - onCancel(): handler para cancelar / cerrar
 *   - isEditing: boolean — true si estamos editando
 */
const UsuarioForm = ({ formData, onChange, onSubmit, onCancel, isEditing }) => (
    <form onSubmit={onSubmit} className="p-5 space-y-4">
        {/* Nombre */}
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Nombre</label>
            <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={onChange}
                required
                maxLength={100}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Nombre completo"
            />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                required
                maxLength={150}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="correo@ejemplo.com"
            />
        </div>

        {/* Rol */}
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Rol</label>
            <select
                name="rol"
                value={formData.rol}
                onChange={onChange}
                required
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
        </div>

        {/* Estado */}
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Estado</label>
            <select
                name="estado"
                value={formData.estado}
                onChange={onChange}
                required
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
            </select>
        </div>

        {/* Acciones */}
        <div className="flex justify-end gap-3 pt-3 border-t border-gray-200">
            <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white text-sm rounded transition-colors"
            >
                Cancelar
            </button>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
            >
                {isEditing ? 'Actualizar' : 'Crear'}
            </button>
        </div>
    </form>
);

export default UsuarioForm;
