import UsuarioForm from './UsuarioForm';

/**
 * UsuarioModal
 * Componente global — overlay + cabecera + formulario de usuario.
 * Props:
 *   - show: boolean — si debe mostrarse
 *   - onClose(): handler para cerrar
 *   - formData, onChange, onSubmit, isEditing → se pasan a UsuarioForm
 */
const UsuarioModal = ({ show, onClose, formData, onChange, onSubmit, isEditing }) => {
    if (!show) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg w-[90%] max-w-md shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Cabecera */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {isEditing ? 'Editar Usuario' : 'Nuevo Usuario'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-700 text-2xl leading-none"
                        aria-label="Cerrar"
                    >
                        ×
                    </button>
                </div>

                {/* Formulario */}
                <UsuarioForm
                    formData={formData}
                    onChange={onChange}
                    onSubmit={onSubmit}
                    onCancel={onClose}
                    isEditing={isEditing}
                />
            </div>
        </div>
    );
};

export default UsuarioModal;
