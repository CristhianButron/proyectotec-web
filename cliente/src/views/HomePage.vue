<template>
    <div class="homepage vh-100 d-flex flex-column justify-content-center align-items-center">
      <!-- Hero Section -->
      <div class="container text-center mb-5">
        <h1 class="display-4 text-light fw-bold animate-text">
          Innovación Empresarial
        </h1>
        <p class="lead text-light mb-4">
          La plataforma que conecta estudiantes, graduados y oportunidades.
        </p>
        <div class="d-flex justify-content-center">
          <router-link
            to="/login"
            class="btn btn-primary btn-lg mx-2 btn-glass-hover"
          >
            Iniciar Sesión
          </router-link>
          <router-link
            to="/registro"
            class="btn btn-outline-light btn-lg mx-2 btn-glass-hover"
          >
            Registrarse
          </router-link>
        </div>
      </div>
  
      <!-- Services Section -->
      <div class="container mt-5">
        <h2 class="text-light text-center mb-4">¿Qué ofrecemos?</h2>
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="glass-card text-center p-4 mb-4">
              <i class="bi bi-chat-left-text fs-1 text-primary mb-3"></i>
              <h4 class="text-light">Foros Públicos</h4>
              <p class="text-light">
                Participa en discusiones abiertas y comparte ideas con otros
                estudiantes.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="glass-card text-center p-4 mb-4">
              <i class="bi bi-briefcase-fill fs-1 text-primary mb-3"></i>
              <h4 class="text-light">Pasantías</h4>
              <p class="text-light">
                Oportunidades exclusivas para estudiantes registrados.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="glass-card text-center p-4 mb-4">
              <i class="bi bi-person-check fs-1 text-primary mb-3"></i>
              <h4 class="text-light">Graduados</h4>
              <p class="text-light">
                Accede a la lista de graduados y oportunidades para egresados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  /* Fondo animado */
  .homepage {
    background: linear-gradient(135deg, rgba(106, 17, 203, 0.7), rgba(37, 117, 252, 0.7));
    background-size: 400% 400%;
    animation: gradientBG 8s ease infinite;
  }
  
  /* Hero Section */
  .animate-text {
    animation: fadeIn 1.5s ease-in-out;
  }
  
  /* Glass Effect */
  .glass-card {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    transition: transform 0.3s ease, background 0.3s ease;
  }
  
  .glass-card:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-5px);
  }
  
  /* Botones */
  .btn-glass-hover {
    transition: background 0.3s ease, transform 0.3s ease;
  }
  
  .btn-glass-hover:hover {
    transform: scale(1.05);
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
        