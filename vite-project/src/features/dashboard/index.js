/**
 * features/dashboard/index.js
 * Barrel export — punto de entrada público de la feature Dashboard.
 *
 * Uso:
 *   import Dashboard from 'features/dashboard'
 *   import { Dashboard, useUsuarios } from 'features/dashboard'
 */

// Página principal
export { default } from './pages/DashboardPage';
export { default as Dashboard } from './pages/DashboardPage';

// Hooks propios de la feature
export { default as useUsuarios } from './hooks/useUsuarios';
export { default as useModal } from './hooks/useModal';

// Servicio de la feature
export { default as usuarioService } from './services/usuarioService';
