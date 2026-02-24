import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import useUsuarios from '../hooks/useUsuarios';
import UsuarioForm from '../components/UsuarioForm';
import Button from '../../../ui/base/Button';
import Alert from '../../../ui/components/Alert';
import Spinner from '../../../ui/base/Spinner';

export default function UsuarioEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getUsuarioById, updateUsuario, alert, clearAlert } = useUsuarios();
  const [usuario, setUsuario] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    const loadUsuario = async () => {
      setPageLoading(true);
      const data = await getUsuarioById(id);
      if (data) {
        setUsuario(data);
      } else {
        navigate('/usuarios');
      }
      setPageLoading(false);
    };
    loadUsuario();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = useCallback(
    async (formData) => {
      setSubmitLoading(true);
      const success = await updateUsuario(id, formData);
      setSubmitLoading(false);
      if (success) {
        setTimeout(() => navigate('/usuarios'), 800);
      }
    },
    [updateUsuario, id, navigate]
  );

  if (pageLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

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
          Editar Usuario #{id}
        </h2>
        <UsuarioForm
          initialData={usuario}
          onSubmit={handleSubmit}
          loading={submitLoading}
          isEdit={true}
        />
      </div>
    </div>
  );
}
