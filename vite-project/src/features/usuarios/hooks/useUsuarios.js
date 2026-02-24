import { useState, useEffect, useMemo, useCallback } from 'react';
import usuarioService from '../services/usuarioService';
import useDebounce from '../../../hooks/useDebounce';

export default function useUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '' });

  // Confirm dialog state
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    usuarioId: null,
  });

  const debouncedSearch = useDebounce(searchTerm, 300);

  const fetchUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await usuarioService.getAll();
      setUsuarios(data);
    } catch (error) {
      setAlert({ type: 'error', message: 'Error al cargar usuarios' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsuarios();
  }, [fetchUsuarios]);

  // Filtro local por nombre o email
  const filteredUsuarios = useMemo(() => {
    if (!debouncedSearch.trim()) return usuarios;
    const term = debouncedSearch.toLowerCase();
    return usuarios.filter(
      (u) =>
        u.nombre.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term)
    );
  }, [usuarios, debouncedSearch]);

  const createUsuario = useCallback(async (data) => {
    try {
      await usuarioService.create(data);
      setAlert({ type: 'success', message: 'Usuario creado exitosamente' });
      return true;
    } catch (error) {
      setAlert({ type: 'error', message: 'Error al crear usuario' });
      return false;
    }
  }, []);

  const updateUsuario = useCallback(async (id, data) => {
    try {
      await usuarioService.update(id, data);
      setAlert({ type: 'success', message: 'Usuario actualizado exitosamente' });
      return true;
    } catch (error) {
      setAlert({ type: 'error', message: 'Error al actualizar usuario' });
      return false;
    }
  }, []);

  const openDeleteConfirm = useCallback((id) => {
    setConfirmDialog({ isOpen: true, usuarioId: id });
  }, []);

  const closeDeleteConfirm = useCallback(() => {
    setConfirmDialog({ isOpen: false, usuarioId: null });
  }, []);

  const confirmDelete = useCallback(async () => {
    const { usuarioId } = confirmDialog;
    if (!usuarioId) return;

    try {
      await usuarioService.delete(usuarioId);
      setUsuarios((prev) => prev.filter((u) => u.id !== usuarioId));
      setAlert({ type: 'success', message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      setAlert({ type: 'error', message: 'Error al eliminar usuario' });
    } finally {
      closeDeleteConfirm();
    }
  }, [confirmDialog, closeDeleteConfirm]);

  const clearAlert = useCallback(() => {
    setAlert({ type: '', message: '' });
  }, []);

  const getUsuarioById = useCallback(async (id) => {
    try {
      setLoading(true);
      const data = await usuarioService.getById(id);
      return data;
    } catch (error) {
      setAlert({ type: 'error', message: 'Error al cargar usuario' });
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    usuarios: filteredUsuarios,
    loading,
    searchTerm,
    setSearchTerm,
    alert,
    clearAlert,
    setAlert,
    confirmDialog,
    createUsuario,
    updateUsuario,
    openDeleteConfirm,
    closeDeleteConfirm,
    confirmDelete,
    getUsuarioById,
    fetchUsuarios,
  };
}
