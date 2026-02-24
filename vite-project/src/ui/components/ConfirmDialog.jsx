import { HiExclamationTriangle } from 'react-icons/hi2';
import Button from '../base/Button';

export default function ConfirmDialog({
  isOpen = false,
  title = '¿Estás seguro?',
  message = 'Esta acción no se puede deshacer.',
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onCancel}
      />

      {/* Dialog */}
      <div
        className="
          relative bg-dark-700 border border-dark-400
          rounded-xl p-6 w-full max-w-md
          shadow-2xl
          animate-[fadeIn_0.2s_ease-out]
        "
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
            <HiExclamationTriangle className="h-5 w-5 text-red-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
            <p className="mt-2 text-sm text-gray-400">{message}</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="ghost" onClick={onCancel}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
}
