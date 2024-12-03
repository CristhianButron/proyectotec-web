<template>
    <div class="home-page">
      <!-- Background Image Section -->
      <div class="hero-section">
        <div class="overlay">
          <h1>Bienvenidos a la App de Mascotas</h1>
          <p class="description">Encuentra mascotas perdidas cerca de ti y ayuda a reunirte con ellas.</p>
          <div class="cta-buttons">
            <router-link to="/GetForo" class="btn btn-primary">Ver Foros</router-link>
            <router-link to="/PostForo" class="btn btn-secondary">Crear Foro</router-link>
          </div>
        </div>
      </div>
  
      <!-- Features Section -->
      <div class="features-section">
        <h2 class="section-title">¿Cómo Funciona?</h2>
        <div class="features-container">
          <div class="feature">
            <i class="fas fa-search fa-3x"></i>
            <h3>Buscar Mascotas</h3>
            <p>Usa la geolocalización para encontrar mascotas perdidas cerca de ti.</p>
          </div>
          <div class="feature">
            <i class="fas fa-plus fa-3x"></i>
            <h3>Publicar un Foro</h3>
            <p>Crea foros para buscar o compartir información sobre mascotas perdidas.</p>
          </div>
          <div class="feature">
            <i class="fas fa-users fa-3x"></i>
            <h3>Conecta con Otros</h3>
            <p>Únete a la comunidad y ayuda a más personas a encontrar a sus mascotas.</p>
          </div>
        </div>
      </div>
  
      <!-- Footer Section -->
      <footer class="footer">
        <p>&copy; 2024 Mascotas Finder. Todos los derechos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  /* Home Page Styles */
  
  /* Hero Section */
  .home-page {
    font-family: 'Arial', sans-serif;
    color: #fff;
    background-color: #f5f5f5;
  }
  
  .hero-section {
    position: relative;
    height: 80vh;
    background-image: url('https://www.example.com/path/to/your/background-image.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .overlay {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 40px;
    border-radius: 10px;
    max-width: 600px;
    width: 100%;
  }
  
  .hero-section h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .description {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .cta-buttons .btn {
    padding: 12px 30px;
    font-size: 1.1rem;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .cta-buttons .btn-primary {
    background-color: #007bff;
    color: #fff;
  }
  
  .cta-buttons .btn-primary:hover {
    background-color: #0056b3;
  }
  
  .cta-buttons .btn-secondary {
    background-color: #6c757d;
    color: #fff;
  }
  
  .cta-buttons .btn-secondary:hover {
    background-color: #5a6268;
  }
  
  /* Features Section */
  .features-section {
    background-color: #fff;
    padding: 40px 20px;
  }
  
  .section-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 40px;
  }
  
  .features-container {
    display: flex;
    justify-content: space-around;
    gap: 30px;
  }
  
  .feature {
    text-align: center;
    max-width: 250px;
  }
  
  .feature i {
    color: #007bff;
    margin-bottom: 15px;
  }
  
  .feature h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  
  .feature p {
    font-size: 1rem;
    color: #666;
  }
  
  /* Footer */
  .footer {
    text-align: center;
    padding: 20px;
    background-color: #f1f1f1;
    font-size: 1rem;
    color: #555;
  }
  </style>
  