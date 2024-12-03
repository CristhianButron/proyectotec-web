<template>
    <div class="home-page">
      <!-- Header Section -->
      <header class="hero-section">
        <div class="overlay">
          <h1>Bienvenidos a la Plataforma Estudiantil</h1>
          <p class="description">Un espacio diseñado para conectar, aprender y crecer juntos.</p>
          <router-link to="/register" class="btn btn-primary">Únete Ahora</router-link>
        </div>
      </header>
  
      <!-- About Section -->
      <section class="about-section">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos un grupo de apasionados por la educación que hemos creado esta plataforma para facilitar la colaboración entre estudiantes,
          compartir recursos, y promover el aprendizaje continuo.
        </p>
      </section>
  
      <!-- What We Do Section -->
      <section class="what-we-do-section">
        <h2>¿Qué hacemos?</h2>
        <div class="features-container">
          <div class="feature">
            <i class="fas fa-users fa-3x"></i>
            <h3>Conectar Estudiantes</h3>
            <p>Creamos un espacio para que estudiantes de todo el mundo se conozcan y trabajen juntos.</p>
          </div>
          <div class="feature">
            <i class="fas fa-book fa-3x"></i>
            <h3>Compartir Recursos</h3>
            <p>Ofrecemos una biblioteca de materiales, guías y herramientas para mejorar tu aprendizaje.</p>
          </div>
          <div class="feature">
            <i class="fas fa-trophy fa-3x"></i>
            <h3>Impulsar el Éxito</h3>
            <p>Brindamos apoyo académico y personal para ayudarte a alcanzar tus metas.</p>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="footer">
        <p>&copy; 2024 Plataforma Estudiantil. Todos los derechos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  /* General Page Styles */
  .home-page {
    font-family: 'Arial', sans-serif;
    color: #333;
    background-color: #f7f7f7;
    line-height: 1.6;
    margin: 0;
  }
  
  /* Header Section */
  .hero-section {
    position: relative;
    height: 70vh;
    background-image: url('https://via.placeholder.com/1920x1080'); /* Reemplazar con una URL válida */
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .overlay {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 40px;
    border-radius: 10px;
  }
  
  .hero-section h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .description {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .btn-primary {
    padding: 12px 30px;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  /* About Section */
  .about-section {
    text-align: center;
    padding: 50px 20px;
    background-color: #ffffff;
  }
  
  .about-section h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #007bff;
  }
  
  .about-section p {
    font-size: 1.2rem;
    color: #555;
  }
  
  /* What We Do Section */
  .what-we-do-section {
    padding: 50px 20px;
    background-color: #f7f7f7;
  }
  
  .what-we-do-section h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
    color: #007bff;
  }
  
  .features-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .feature {
    text-align: center;
    max-width: 300px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  .feature i {
    color: #007bff;
    margin-bottom: 15px;
  }
  
  .feature h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .feature p {
    font-size: 1rem;
    color: #555;
  }
  
  /* Footer */
  .footer {
    text-align: center;
    padding: 20px;
    background-color: #333;
    color: white;
    font-size: 1rem;
  }
  </style>
  