import { HiMagnifyingGlass } from 'react-icons/hi2';

export default function UsuarioSearch({ value, onChange }) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
        <HiMagnifyingGlass className="h-4 w-4 text-gray-500" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por nombre o email..."
        className="
          w-full pl-10 pr-4 py-2.5 rounded-lg
          bg-dark-700 border border-dark-400
          text-sm text-gray-200 placeholder-gray-500
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 focus:border-neon-cyan/50
          hover:border-dark-300
        "
      />
    </div>
  );
}
