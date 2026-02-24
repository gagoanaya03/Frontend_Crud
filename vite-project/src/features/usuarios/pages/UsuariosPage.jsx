import { useNavigate } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi2';
import useUsuarios from '../hooks/useUsuarios';
import UsuarioSearch from '../components/UsuarioSearch';
import UsuarioTable from '../components/UsuarioTable';
import Button from '../../../ui/base/Button';
import Alert from '../../../ui/components/Alert';
import ConfirmDialog from '../../../ui/components/ConfirmDialog';

export default function UsuariosPage() {
  const navigate = useNavigate();
  const {
    usuarios,
    loading,
    searchTerm,
    setSearchTerm,
    alert,
    clearAlert,
    confirmDialog,
    openDeleteConfirm,
    closeDeleteConfirm,
    confirmDelete,
  } = useUsuarios();

  return (
    <div className="space-y-5">
      {/* Alert */}
      {alert.message && (
        <Alert type={alert.type} message={alert.message} onClose={clearAlert} />
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <UsuarioSearch value={searchTerm} onChange={setSearchTerm} />
        <Button onClick={() => navigate('/usuarios/crear')}>
          <HiPlus className="w-4 h-4" />
          Nuevo Usuario
        </Button>
      </div>

      {/* Table */}
      <UsuarioTable
        usuarios={usuarios}
        onDelete={openDeleteConfirm}
        loading={loading}
      />

      {/* Confirm Dialog */}
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title="Eliminar Usuario"
        message="¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer."
        onConfirm={confirmDelete}
        onCancel={closeDeleteConfirm}
      />
    </div>
  );
}
