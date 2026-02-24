export default function Select({
  options = [],
  value,
  onChange,
  error = '',
  disabled = false,
  id,
  name,
  placeholder = 'Seleccionar...',
  className = '',
}) {
  return (
    <div className="w-full">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full px-4 py-2.5 rounded-lg
          bg-dark-700 border text-gray-200
          text-sm appearance-none
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 focus:border-neon-cyan/50
          disabled:opacity-50 disabled:cursor-not-allowed
          cursor-pointer
          ${
            error
              ? 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20'
              : 'border-dark-400 hover:border-dark-300'
          }
          ${className}
        `}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%239ca3af' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
          paddingRight: '2.5rem',
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1.5 text-xs text-red-400">{error}</p>
      )}
    </div>
  );
}
