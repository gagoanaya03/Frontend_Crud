import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiUsers, HiX } from 'react-icons/hi';
import { HiSquares2X2 } from 'react-icons/hi2';

const navItems = [
  { to: '/usuarios', label: 'Usuarios', icon: HiUsers },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-64
          bg-dark-800 border-r border-dark-600
          flex flex-col
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo / Header */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-dark-600">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
              <HiSquares2X2 className="w-4 h-4 text-neon-cyan" />
            </div>
            <span className="text-base font-semibold text-gray-100 tracking-tight">
              Admin Panel
            </span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-gray-200 transition-colors cursor-pointer"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.to);
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/15 shadow-neon'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-dark-600 border border-transparent'
                  }
                `}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-neon-cyan' : ''}`} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-dark-600">
          <p className="text-xs text-gray-600 text-center">CRUD v1.0</p>
        </div>
      </aside>
    </>
  );
}
