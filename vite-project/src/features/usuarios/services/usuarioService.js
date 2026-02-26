import API_BASE_URL from '../../../config/api';

// Servicio para manejar todas las peticiones de usuarios
// Conectado a la API real: GET, POST, PUT, DELETE
const usuarioService = {
  // Obtener todos los usuarios
  async getAll() {
    try {
      const response = await fetch(`${API_BASE_URL}/usuarios`);
      if (!response.ok) throw new Error('Error al obtener usuarios');
      const result = await response.json();
      return result.data || result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  // Obtener un usuario por ID
  async getById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/usuarios/${id}`);
      if (!response.ok) {
        if (response.status === 404) throw new Error('Usuario no encontrado');
        throw new Error('Error al obtener usuario');
      }
      const result = await response.json();
      return result.data || result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  // Crear un nuevo usuario
  async create(data) {
    try {
      const response = await fetch(`${API_BASE_URL}/usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Manejar errores de validación (422)
      if (response.status === 422) {
        const error = new Error(result.message || 'Error de validación');
        error.validationErrors = result.errors || {};
        throw error;
      }

      if (!response.ok) throw new Error(result.message || 'Error al crear usuario');
      return result.data || result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  // Actualizar un usuario
  async update(id, data) {
    try {
      const response = await fetch(`${API_BASE_URL}/usuarios/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Manejar errores de validación (422)
      if (response.status === 422) {
        const error = new Error(result.message || 'Error de validación');
        error.validationErrors = result.errors || {};
        throw error;
      }

      if (!response.ok) throw new Error(result.message || 'Error al actualizar usuario');
      return result.data || result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  // Eliminar un usuario
  async delete(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/usuarios/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (response.status === 404) throw new Error('Usuario no encontrado');
      if (!response.ok) throw new Error(result.message || 'Error al eliminar usuario');
      return result.data || result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
};

export default usuarioService;
