<template>
  <div>
    <NavbarComponent />
    <div class="auth vh-100 d-flex justify-content-center align-items-center">
      <div class="card shadow-lg p-4 glass-card" style="width: 450px; border-radius: 20px;">
        <h2 class="text-center mb-4 text-primary fw-bold">Crea tu Cuenta</h2>
        <form @submit.prevent="registrarUsuario">
          <div class="mb-3 input-group">
            <span class="input-group-text glass-icon">
              <i class="bi bi-person"></i>
            </span>
            <input
              type="text"
              class="form-control input-glass"
              placeholder="Nombre Completo"
              v-model="form.nombre"
              required
            />
          </div>
          <div class="mb-3 input-group">
            <span class="input-group-text glass-icon">
              <i class="bi bi-person"></i>
            </span>
            <input
              type="text"
              class="form-control input-glass"
              placeholder="Apellido"
              v-model="form.apellido"
              required
            />
          </div>
          <div class="mb-3 input-group">
            <span class="input-group-text glass-icon">
              <i class="bi bi-envelope"></i>
            </span>
            <input
              type="email"
              class="form-control input-glass"
              placeholder="Correo Electrónico"
              v-model="form.correo"
              required
            />
          </div>
          <div class="mb-3 input-group">
            <span class="input-group-text glass-icon">
              <i class="bi bi-phone"></i>
            </span>
            <input
              type="text"
              class="form-control input-glass"
              placeholder="Celular"
              v-model="form.celular"
              required
            />
          </div>
          <div class="mb-3 input-group">
            <span class="input-group-text glass-icon">
              <i class="bi bi-lock"></i>
            </span>
            <input
              type="password"
              class="form-control input-glass"
              placeholder="Contraseña"
              v-model="form.password"
              required
            />
          </div>
          <button class="btn btn-primary w-100 py-2 mt-3 btn-glass-hover" type="submit">
            Registrarse
          </button>
        </form>
        <div class="text-center mt-3">
          <router-link to="/login" class="text-decoration-none text-muted">
            ¿Ya tienes cuenta? <span class="text-primary fw-bold">Inicia sesión</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  name: 'RegistroPage',
  components: {
    NavbarComponent,
  },
  data() {
    return {
      form: {
        nombre: '',
        apellido: '',
        correo: '',
        celular: '',
        password: ''
      }
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async registrarUsuario() {
      try {
        const response = await axios.post('/api/usuarios', {
          ...this.form,
          rol: 'alumno'
        });
        console.log('Usuario registrado:', response.data);
        this.router.push('/admin');
      } catch (error) {
        console.error('Error:', error);
        // Manejar el error
      }
    }
  }
};
</script>

<style scoped>
/* Fondo con gradiente animado */
.auth {
  background: linear-gradient(135deg, rgba(106, 17, 203, 0.7), rgba(37, 117, 252, 0.7));
  background-size: 400% 400%;
  animation: gradientBG 8s ease infinite;
}

/* Animación de gradiente */
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Estilo para las tarjetas */
.glass-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Estilo de los inputs */
.input-glass {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 5px;
}
.input-glass::placeholder {
  color: rgba(255, 255, 255, 0.8);
}

/* Íconos */
.glass-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
}

/* Botón con hover animado */
.btn-glass-hover {
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  border: none;
  transition: transform 0.3s ease, background 0.3s ease;
}
.btn-glass-hover:hover {
  background: linear-gradient(to right, #2575fc, #6a11cb);
  transform: scale(1.05);
}
</style>