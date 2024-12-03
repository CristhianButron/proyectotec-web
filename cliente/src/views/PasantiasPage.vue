<template>
    <div class="pasantias-page vh-100 d-flex flex-column align-items-center">
      <!-- Título y Subtítulo -->
      <div class="container text-center pt-5 pb-4">
        <h1 class="display-4 text-light fw-bold animate-text">Pasantías Disponibles</h1>
        <p class="lead text-light">Oportunidades exclusivas para estudiantes registrados.</p>
      </div>
  
      <!-- Contenido de las Pasantías -->
      <div class="container mt-4">
        <div class="row g-5">
          <div v-for="pasantia in pasantias" :key="pasantia.id" class="col-lg-6 col-md-6">
            <div class="glass-card p-4 text-center">
              <!-- Imagen -->
              <img
                :src="pasantia.imagen"
                alt="Imagen de la pasantía"
                class="rounded mb-3 pasantia-img shadow"
              />
              <!-- Título y Descripción -->
              <h5 class="text-light fw-bold">{{ pasantia.titulo }}</h5>
              <p class="text-light"><strong>Empresa:</strong> {{ pasantia.empresa }}</p>
              <p class="text-light">{{ pasantia.descripcion }}</p>
              <!-- Botón -->
              <router-link :to="'/pasantias/' + pasantia.id" class="btn btn-primary btn-glass-hover">
                Más Información
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PasantiasPage",
    data() {
      return {
        pasantias: [
          {
            id: 1,
            titulo: "Pasantía en Marketing Digital",
            empresa: "Empresa X",
            descripcion: "Aprende estrategias de marketing digital y redes sociales.",
            imagen: "https://decaedro.com.ar/wp-content/uploads/2016/06/1500x844_tendencias_marketing_digital.jpg",
          },
          {
            id: 2,
            titulo: "Pasantía en Finanzas",
            empresa: "Empresa Y",
            descripcion: "Adquiere experiencia práctica en análisis financiero.",
            imagen: "https://www.obsbusiness.school/sites/obsbusiness.school/files/images/analisis-financiero-de-una-empresa-pasos-para-realizarlo.jpg",
          },
          {
            id: 3,
            titulo: "Pasantía en Desarrollo Web",
            empresa: "Empresa Z",
            descripcion: "Trabaja en proyectos de desarrollo de aplicaciones web.",
            imagen: "https://staiapps.com/wp-content/uploads/2022/06/desarrollo-pagina-web.jpg",
          },
          {
            id: 4,
            titulo: "Pasantía en Gestión de Proyectos",
            empresa: "Empresa A",
            descripcion: "Participa en la gestión de proyectos empresariales innovadores.",
            imagen: "https://concepto.de/wp-content/uploads/2019/05/gestion-de-proyectos-e1557614538568.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Fondo de la Página */
  .pasantias-page {
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
  
  /* Imágenes dentro de las tarjetas */
  .pasantia-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .pasantia-img:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  /* Botones */
  .btn-glass-hover {
    transition: background 0.3s ease, transform 0.3s ease;
  }
  .btn-glass-hover:hover {
    transform: scale(1.05);
  }
  
  /* Espaciado General */
  .pt-5 {
    padding-top: 3rem !important;
  }
  .pb-4 {
    padding-bottom: 1.5rem !important;
  }
  .mt-4 {
    margin-top: 2rem !important;
  }
  
  /* Animación de Fondo */
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
  