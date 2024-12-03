<template>
  <div id="app">
    <!-- Navbar Global -->
    <NavbarComponent />
    <!-- Contenido de las Páginas -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'; // Importa el NavbarComponent

export default {
  name: "App",
  components: {
    NavbarComponent, // Declara el componente
  },
};
</script>

