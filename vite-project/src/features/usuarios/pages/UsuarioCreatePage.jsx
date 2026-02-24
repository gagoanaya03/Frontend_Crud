import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import useUsuarios from '../hooks/useUsuarios';
import UsuarioForm from '../components/UsuarioForm';
import Button from '../../../ui/base/Button';
import Alert from '../../../ui/components/Alert';

export default function UsuarioCreatePage() {
  const navigate = useNavigate();
  const { createUsuario, alert, clearAlert, setAlert } = useUsuarios();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (formData) => {
      setLoading(true);
      const success = await createUsuario(formData);
      setLoading(false);
      if (success) {
        setTimeout(() => navigate('/usuarios'), 800);
      }
    },
    [createUsuario, navigate]
  );

  return (
    <div className="space-y-6">
      {/* Alert */}
      {alert.message && (
        <Alert type={alert.type} message={alert.message} onClose={clearAlert} />
      )}

      {/* Back button */}
      <Button variant="ghost" onClick={() => navigate('/usuarios')}>
        <HiArrowLeft className="w-4 h-4" />
        Volver a la lista
      </Button>

      {/* Form card */}
      <div className="bg-dark-800 border border-dark-600 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-100 mb-6">
          Información del Usuario
        </h2>
        <UsuarioForm onSubmit={handleSubmit} loading={loading} isEdit={false} />
      </div>
    </div>
  );
}
