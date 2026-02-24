const variantClasses = {
  success: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  danger: 'bg-red-500/15 text-red-400 border-red-500/25',
  info: 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/25',
  warning: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
};

export default function Badge({ children, variant = 'info', className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-0.5 rounded-full
        text-xs font-medium border
        ${variantClasses[variant] || variantClasses.info}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
