export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  disabled = false,
  id,
  name,
  className = '',
}) {
  return (
    <div className="w-full">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full px-4 py-2.5 rounded-lg
          bg-dark-700 border text-gray-200
          text-sm placeholder-gray-500
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 focus:border-neon-cyan/50
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            error
              ? 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20'
              : 'border-dark-400 hover:border-dark-300'
          }
          ${className}
        `}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-400">{error}</p>
      )}
    </div>
  );
}
