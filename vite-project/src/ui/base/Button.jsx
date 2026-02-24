import Spinner from './Spinner';

const variantClasses = {
  primary:
    'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 hover:border-neon-cyan/50 hover:shadow-neon',
  danger:
    'bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500/50',
  outline:
    'bg-transparent text-gray-300 border border-dark-400 hover:border-neon-cyan/40 hover:text-neon-cyan',
  ghost:
    'bg-transparent text-gray-400 border border-transparent hover:bg-dark-500 hover:text-gray-200',
};

export default function Button({
  children,
  variant = 'primary',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        inline-flex items-center justify-center gap-2
        px-4 py-2.5 rounded-lg
        text-sm font-medium
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 focus:ring-offset-1 focus:ring-offset-dark-800
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
        cursor-pointer
        ${variantClasses[variant] || variantClasses.primary}
        ${className}
      `}
    >
      {loading && <Spinner size="sm" />}
      {children}
    </button>
  );
}
