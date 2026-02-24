// Mock data — cuando se integre el backend Laravel,
// solo se modifica este archivo para usar Axios con endpoints reales.

let usuarios = [
  {
    id: 1,
    nombre: 'Carlos Mendoza',
    email: 'carlos.mendoza@empresa.com',
    rol: 'Admin',
    estado: 'Activo',
  },
  {
    id: 2,
    nombre: 'María García',
    email: 'maria.garcia@empresa.com',
    rol: 'User',
    estado: 'Activo',
  },
  {
    id: 3,
    nombre: 'Juan López',
    email: 'juan.lopez@empresa.com',
    rol: 'User',
    estado: 'Inactivo',
  },
  {
    id: 4,
    nombre: 'Ana Rodríguez',
    email: 'ana.rodriguez@empresa.com',
    rol: 'Admin',
    estado: 'Activo',
  },
  {
    id: 5,
    nombre: 'Pedro Sánchez',
    email: 'pedro.sanchez@empresa.com',
    rol: 'User',
    estado: 'Inactivo',
  },
];

let nextId = 6;

// Simula latencia de red
const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

const usuarioService = {
  async getAll() {
    await delay();
    return [...usuarios];
  },

  async getById(id) {
    await delay();
    const usuario = usuarios.find((u) => u.id === Number(id));
    if (!usuario) throw new Error('Usuario no encontrado');
    return { ...usuario };
  },

  async create(data) {
    await delay();
    const nuevo = { ...data, id: nextId++ };
    usuarios.push(nuevo);
    return { ...nuevo };
  },

  async update(id, data) {
    await delay();
    const index = usuarios.findIndex((u) => u.id === Number(id));
    if (index === -1) throw new Error('Usuario no encontrado');
    const updated = {
      ...usuarios[index],
      ...data,
      id: usuarios[index].id,
    };
    usuarios[index] = updated;
    return { ...updated };
  },

  async delete(id) {
    await delay();
    const index = usuarios.findIndex((u) => u.id === Number(id));
    if (index === -1) throw new Error('Usuario no encontrado');
    usuarios.splice(index, 1);
    return { success: true };
  },
};

export default usuarioService;
