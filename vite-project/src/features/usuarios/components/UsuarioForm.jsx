import { useState, useEffect } from 'react';
import Input from '../../../ui/base/Input';
import Label from '../../../ui/base/Label';
import Select from '../../../ui/base/Select';
import Button from '../../../ui/base/Button';

const rolOptions = [
  { value: 'Admin', label: 'Admin' },
  { value: 'User', label: 'User' },
];

const estadoOptions = [
  { value: 'Activo', label: 'Activo' },
  { value: 'Inactivo', label: 'Inactivo' },
];

const initialForm = {
  nombre: '',
  email: '',
  rol: '',
  estado: '',
};

function validate(form) {
  const errors = {};

  if (!form.nombre.trim()) {
    errors.nombre = 'El nombre es requerido';
  }

  if (!form.email.trim()) {
    errors.email = 'El email es requerido';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'El formato del email no es válido';
  }

  if (!form.rol) {
    errors.rol = 'El rol es requerido';
  }

  if (!form.estado) {
    errors.estado = 'El estado es requerido';
  }

  return errors;
}

export default function UsuarioForm({
  initialData = null,
  onSubmit,
  loading = false,
  isEdit = false,
}) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm({
        nombre: initialData.nombre || '',
        email: initialData.email || '',
        rol: initialData.rol || '',
        estado: initialData.estado || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      <div>
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          id="nombre"
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          error={errors.nombre}
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="correo@ejemplo.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="rol">Rol</Label>
          <Select
            id="rol"
            name="rol"
            options={rolOptions}
            value={form.rol}
            onChange={handleChange}
            error={errors.rol}
            placeholder="Seleccionar rol"
          />
        </div>

        <div>
          <Label htmlFor="estado">Estado</Label>
          <Select
            id="estado"
            name="estado"
            options={estadoOptions}
            value={form.estado}
            onChange={handleChange}
            error={errors.estado}
            placeholder="Seleccionar estado"
          />
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <Button type="submit" variant="primary" loading={loading}>
          {isEdit ? 'Actualizar' : 'Crear'} Usuario
        </Button>
      </div>
    </form>
  );
}
