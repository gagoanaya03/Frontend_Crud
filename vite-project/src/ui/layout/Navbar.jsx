import { HiBars3 } from 'react-icons/hi2';

export default function Navbar({ title = '', onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-dark-800/80 backdrop-blur-md border-b border-dark-600 flex items-center px-4 lg:px-6">
      <button
        onClick={onMenuClick}
        className="lg:hidden mr-3 p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-dark-600 transition-colors cursor-pointer"
      >
        <HiBars3 className="w-5 h-5" />
      </button>
      <h1 className="text-lg font-semibold text-gray-100 tracking-tight">
        {title}
      </h1>
    </header>
  );
}
