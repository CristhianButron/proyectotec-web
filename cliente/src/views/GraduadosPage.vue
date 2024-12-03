<template>
  <div>
    <NavbarComponent />
    <div class="graduados-page vh-100 d-flex flex-column align-items-center">
      <!-- Título y Subtítulo -->
      <div class="container text-center pt-5 pb-4">
        <h1 class="display-4 text-light fw-bold animate-text">Graduados Destacados</h1>
        <p class="lead text-light">Conoce a los graduados destacados de nuestra carrera y aprende sobre los métodos de graduación.</p>
      </div>
  
      <!-- Galería de Graduados -->
      <div class="container mt-4">
        <div class="row g-5">
          <div v-for="graduado in graduados" :key="graduado.id" class="col-lg-3 col-md-4 text-center">
            <div class="glass-card p-4">
              <!-- Imagen del Graduado -->
              <img
                :src="graduado.foto"
                :alt="graduado.nombre"
                class="rounded-circle mb-3 graduado-img shadow"
              />
              <h5 class="text-light fw-bold">{{ graduado.nombre }}</h5>
              <p class="text-light">{{ graduado.logro }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Métodos de Graduación -->
      <div class="container mt-5">
        <h3 class="text-center text-light display-6 animate-text">Métodos de Graduación</h3>
        <p class="text-light text-center lead mb-5">
          Nuestra carrera ofrece diversas opciones para completar el proceso de graduación.
        </p>
        <div class="row g-5">
          <div v-for="metodo in metodos" :key="metodo.id" class="col-lg-4 col-md-6">
            <div class="glass-card p-4 text-center">
              <!-- Imagen del Método -->
              <img
                :src="metodo.imagen"
                alt="Imagen del método"
                class="rounded mb-3 metodo-img shadow"
              />
              <h5 class="text-light fw-bold">{{ metodo.titulo }}</h5>
              <p class="text-light">{{ metodo.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  name: "GraduadosPage",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      graduados: [
        { id: 1, nombre: "Ana López", foto: "https://latinta.com.ar/wp-content/uploads/2019/03/maria-galindo-mujeres-creando-feminismo-4.jpg", logro: "CEO de Startup X" },
        { id: 2, nombre: "Juan Pérez", foto: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Evo_Morales_2017.jpg", logro: "Gerente en Empresa Y" },
        { id: 3, nombre: "María García", foto: "https://es.web.img2.acsta.net/c_310_420/pictures/17/01/20/12/42/192403.jpg", logro: "Fundadora de Proyecto Z" },
        { id: 4, nombre: "Carlos Gómez", foto: "https://imgcdn.stablediffusionweb.com/2024/5/30/97afcecf-3137-4c6c-8977-71a74b008694.jpg", logro: "Consultor Empresarial" },
      ],
      metodos: [
        { id: 1, titulo: "Proyecto de Investigación", descripcion: "Completa un proyecto de investigación innovador.", imagen: "https://via.placeholder.com/400x200" },
        { id: 2, titulo: "Prácticas Profesionales", descripcion: "Obtén experiencia en una empresa de prestigio.", imagen: "https://via.placeholder.com/400x200" },
        { id: 3, titulo: "Tesis Académica", descripcion: "Presenta una tesis sobre un tema relevante.", imagen: "https://via.placeholder.com/400x200" },
      ],
    };
  },
};
</script>
  
<style scoped>
/* Fondo de la Página */
.graduados-page {
  min-height: 150vh;
  background: linear-gradient(135deg, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8));
  background-size: 400% 400%;
  animation: gradientBG 8s ease infinite;
}

/* Tarjetas Glassmorphism */
.glass-card {
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
.glass-card:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Imágenes de Graduados */
.graduado-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.graduado-img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Imágenes de Métodos */
.metodo-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.metodo-img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Espaciado y Animación */
.pt-5 {
  padding-top: 3rem !important;
}
.pb-4 {
  padding-bottom: 1.5rem !important;
}
.mt-4 {
  margin-top: 2rem !important;
}

/* Fondo Animado */
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

/* Animación de Aparición */
.animate-text {
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
