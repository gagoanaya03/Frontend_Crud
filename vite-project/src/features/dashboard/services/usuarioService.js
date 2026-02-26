import API_BASE_URL from '../../../config/api';

// Servicio para manejar todas las peticiones de usuarios
const usuarioService = {
    // Obtener todos los usuarios
    getAll: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/usuarios`);
            if (!response.ok) throw new Error('Error al obtener usuarios');
            const result = await response.json();
            return result.data || result; // Laravel devuelve {data: [...], message: '...'}
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    // Obtener un usuario por ID
    getById: async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/usuarios/${id}`);
            if (!response.ok) throw new Error('Error al obtener usuario');
            const result = await response.json();
            return result.data || result;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    // Crear un nuevo usuario
    create: async (usuario) => {
        try {
            const response = await fetch(`${API_BASE_URL}/usuarios`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(usuario),
            });
            if (!response.ok) throw new Error('Error al crear usuario');
            const result = await response.json();
            return result.data || result;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    // Actualizar un usuario
    update: async (id, usuario) => {
        try {
            const response = await fetch(`${API_BASE_URL}/usuarios/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(usuario),
            });
            if (!response.ok) throw new Error('Error al actualizar usuario');
            const result = await response.json();
            return result.data || result;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },

    // Eliminar un usuario
    delete: async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/usuarios/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Error al eliminar usuario');
            const result = await response.json();
            return result.data || result;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    },
};

export default usuarioService;
