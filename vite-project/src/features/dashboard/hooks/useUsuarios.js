import { useState, useEffect } from 'react';
import usuarioService from '../services/usuarioService';

/**
 * Hook que encapsula toda la lógica de datos de usuarios:
 * - listado, carga, eliminación y envío del formulario (create/update).
 *
 * Recibe `closeModal` como parámetro para cerrarlo tras una operación exitosa.
 */
const useUsuarios = (closeModal) => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Carga inicial
    useEffect(() => {
        loadUsuarios();
    }, []);

    const loadUsuarios = async () => {
        try {
            setLoading(true);
            const data = await usuarioService.getAll();
            setUsuarios(data);
            setError(null);
        } catch (err) {
            setError('Error al cargar usuarios');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Está seguro de eliminar este usuario?')) return;
        try {
            await usuarioService.delete(id);
            loadUsuarios();
        } catch (err) {
            setError('Error al eliminar usuario');
            console.error(err);
        }
    };

    const handleSubmit = async (formData, editingUser) => {
        try {
            if (editingUser) {
                await usuarioService.update(editingUser.id, formData);
            } else {
                await usuarioService.create(formData);
            }
            loadUsuarios();
            closeModal();
        } catch (err) {
            setError('Error al guardar usuario');
            console.error(err);
        }
    };

    return { usuarios, loading, error, handleDelete, handleSubmit };
};

export default useUsuarios;
