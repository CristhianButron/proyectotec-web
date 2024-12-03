<template>
    <nav class="navbar navbar-expand-lg navbar-dark gradient-navbar shadow-sm">
      <div class="container">
        <!-- Brand -->
        <router-link class="navbar-brand fw-bold" to="/">
          Innovación Empresarial
        </router-link>
  
        <!-- Toggle Button for Mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/foros">Foros</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/graduados">Graduados</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavbarComponent",
  };
  </script>
  
  <style scoped>
  /* Fondo con Gradiente */
  .gradient-navbar {
    background: linear-gradient(to right, #6a11cb, #2575fc); /* Gradiente morado-azul */
    border-bottom: 2px solid #ffffff20; /* Línea sutil */
  }
  
  /* Estilo de los enlaces */
  .navbar-brand {
    font-size: 1.5rem;
    color: #ffffff !important; /* Texto blanco */
    transition: color 0.3s ease-in-out;
  }
  .navbar-brand:hover {
    color: #85d7ff !important; /* Azul claro en hover */
  }
  
  .nav-link {
    color: #ffffff !important; /* Texto blanco */
    transition: color 0.3s ease-in-out;
  }
  .nav-link:hover {
    color: #85d7ff !important; /* Azul claro en hover */
  }
  
  /* Toggle Button para móviles */
  .navbar-toggler {
    border: none;
  }
  .navbar-toggler-icon {
    filter: invert(100%);
  }
  </style>
  