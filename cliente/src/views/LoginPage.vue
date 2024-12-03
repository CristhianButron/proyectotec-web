<template>
  <div>
    <NavbarComponent />
    <div class="auth vh-100 d-flex justify-content-center align-items-center">
      <div class="card shadow-lg p-4 glass-card" style="width: 450px; border-radius: 20px;">
        <h2 class="text-center mb-4 text-primary fw-bold">Inicia Sesión</h2>
        <form @submit.prevent="handleLogin">
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
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        correo: '',
        password: ''
      }
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  components: {
    NavbarComponent,
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('/api/login', {
          correo: this.form.correo,
          password: this.form.password
        });
        const token = response.data.token;
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log('Usuario autenticado:', payload);

        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          showConfirmButton: false,
          timer: 1500
        });

        if (payload.rol === 'alumno') {
          this.router.push('/alumno');
        } else if (payload.rol === 'admin') {
          this.router.push('/admin');
        } else {
          console.error('Rol desconocido:', payload.rol);
          Swal.fire({
            icon: 'error',
            title: 'Rol desconocido',
            text: 'Por favor, contacte al administrador.'
          });
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error en el inicio de sesión',
          text: 'Por favor, verifique sus credenciales e intente nuevamente.'
        });
      }
    }
  }
};
</script>

<!-- Reutilizamos los estilos de Registro -->
<style scoped>
.auth {
  background: linear-gradient(135deg, rgba(106, 17, 203, 0.7), rgba(37, 117, 252, 0.7));
  background-size: 400% 400%;
  animation: gradientBG 8s ease infinite;
}

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

.glass-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.input-glass {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 5px;
}
.input-glass::placeholder {
  color: rgba(255, 255, 255, 0.8);
}

.glass-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
}

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