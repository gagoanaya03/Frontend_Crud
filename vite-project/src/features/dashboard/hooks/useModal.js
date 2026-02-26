import { useState } from 'react';

/** Valor por defecto del formulario — fuente única de verdad */
const DEFAULT_FORM = {
    nombre: '',
    email: '',
    rol: 'user',
    estado: 'activo',
};

/**
 * Hook que encapsula el estado del modal y del formulario de usuario.
 * Devuelve todo lo necesario para abrir, cerrar y editar desde el modal.
 */
const useModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ ...DEFAULT_FORM });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const openModal = () => {
        setEditingUser(null);
        setFormData({ ...DEFAULT_FORM });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingUser(null);
        setFormData({ ...DEFAULT_FORM });
    };

    const handleEdit = (usuario) => {
        setEditingUser(usuario);
        setFormData({
            nombre: usuario.nombre,
            email: usuario.email,
            rol: usuario.rol,
            estado: usuario.estado,
        });
        setShowModal(true);
    };

    return {
        showModal,
        editingUser,
        formData,
        handleInputChange,
        openModal,
        closeModal,
        handleEdit,
    };
};

export default useModal;
