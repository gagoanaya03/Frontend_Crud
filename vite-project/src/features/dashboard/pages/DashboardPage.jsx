import useModal from '../hooks/useModal';
import useUsuarios from '../hooks/useUsuarios';
import UsuariosTable from '../../../components/UsuariosTable';
import UsuarioModal from '../../../components/UsuarioModal';
import '../styles/dashboard.css';

/**
 * DashboardPage
 * Página principal de la feature — orquesta hooks y componentes.
 * No contiene lógica de negocio propia.
 */
const DashboardPage = () => {
    const {
        showModal, editingUser, formData,
        handleInputChange, openModal, closeModal, handleEdit,
    } = useModal();

    const {
        usuarios, loading, error,
        handleDelete, handleSubmit,
    } = useUsuarios(closeModal);

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData, editingUser);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-gray-500 text-lg">
                Cargando…
            </div>
        );
    }

    return (
        <div className="dashboard-page">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Gestión de Usuarios</h1>
                <button
                    onClick={openModal}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
                >
                    + Nuevo Usuario
                </button>
            </div>

            {/* Error */}
            {error && (
                <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 text-red-700 rounded">
                    {error}
                </div>
            )}

            {/* Tabla */}
            <UsuariosTable
                usuarios={usuarios}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {/* Modal */}
            <UsuarioModal
                show={showModal}
                onClose={closeModal}
                formData={formData}
                onChange={handleInputChange}
                onSubmit={onSubmit}
                isEditing={!!editingUser}
            />
        </div>
    );
};

export default DashboardPage;
