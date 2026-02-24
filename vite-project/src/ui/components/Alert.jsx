import { useEffect } from 'react';
import { HiCheckCircle, HiXCircle, HiX } from 'react-icons/hi';

const typeConfig = {
  success: {
    icon: HiCheckCircle,
    bg: 'bg-emerald-500/10 border-emerald-500/30',
    text: 'text-emerald-400',
    iconColor: 'text-emerald-400',
  },
  error: {
    icon: HiXCircle,
    bg: 'bg-red-500/10 border-red-500/30',
    text: 'text-red-400',
    iconColor: 'text-red-400',
  },
};

export default function Alert({ type = 'success', message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose?.();
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  const config = typeConfig[type] || typeConfig.success;
  const Icon = config.icon;

  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg border
        animate-[fadeIn_0.3s_ease-out]
        ${config.bg}
      `}
      role="alert"
    >
      <Icon className={`h-5 w-5 flex-shrink-0 ${config.iconColor}`} />
      <p className={`text-sm flex-1 ${config.text}`}>{message}</p>
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
      >
        <HiX className="h-4 w-4" />
      </button>
    </div>
  );
}
