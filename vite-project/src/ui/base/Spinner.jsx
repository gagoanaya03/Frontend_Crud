const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-10 w-10 border-3',
};

export default function Spinner({ size = 'md', className = '' }) {
  return (
    <div
      className={`
        inline-block rounded-full
        border-gray-600 border-t-neon-cyan
        animate-spin
        ${sizeClasses[size] || sizeClasses.md}
        ${className}
      `}
      role="status"
      aria-label="Cargando"
    />
  );
}
