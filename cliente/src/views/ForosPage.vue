<template>
    <div class="foros-page vh-100 d-flex flex-column align-items-center">
      <!-- Título y Subtítulo -->
      <div class="container text-center pt-5 pb-4">
        <h1 class="display-4 text-light fw-bold animate-text">Foros Disponibles</h1>
        <p class="lead text-light">Participa en las discusiones más interesantes y comparte ideas con otros estudiantes.</p>
      </div>
  
      <!-- Contenido de los Foros -->
      <div class="container mt-4">
        <div class="row g-5 justify-content-center">
          <div v-for="foro in foros" :key="foro.id" class="col-lg-4 col-md-6">
            <div class="glass-card text-center p-4">
              <!-- Imagen del Foro -->
              <img
                :src="foro.imagen"
                alt="Imagen del foro"
                class="rounded mb-3 foro-img shadow"
              />
              <h5 class="text-light fw-bold">{{ foro.titulo }}</h5>
              <p class="text-light">{{ foro.descripcion }}</p>
              <!-- Botón para Más Información -->
              <router-link :to="'/foros/' + foro.id" class="btn btn-primary btn-glass-hover">
                Ver Más
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ForosPage",
    data() {
      return {
        foros: [
          {
            id: 1,
            titulo: "Tendencias de Innovación",
            descripcion: "Explora las últimas tendencias en innovación empresarial.",
            imagen: "https://camaradecomerciodeoruro.com/wp-content/uploads/2022/05/innovacion-empresarial.jpg",
          },
          {
            id: 2,
            titulo: "Retos en la Industria",
            descripcion: "Comparte los principales retos que enfrenta el mercado actual.",
            imagen: "https://blog.bayton.com/hubfs/Blog%20Bayton%20%2875%29.png",
          },
          {
            id: 3,
            titulo: "Proyectos Estudiantiles",
            descripcion: "Conoce proyectos destacados realizados por estudiantes.",
            imagen: "https://ceinoticias.cl/wp-content/uploads/2024/09/20240925_155325-2048x1153.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Fondo de la Página */
  .foros-page {
    background: linear-gradient(135deg, rgba(106, 17, 203, 0.7), rgba(37, 117, 252, 0.7));
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
  
  /* Imágenes dentro de las Tarjetas */
  .foro-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .foro-img:hover {
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
  