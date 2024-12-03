<template>
  <div class="d-flex vh-100">
    <!-- Sidebar -->
    <div
      :class="['sidebar', 'bg-dark', 'text-white', 'p-3', toggleSidebar ? 'd-none' : 'd-block']"
      style="width: 250px;"
    >
      <h4 class="text-center mb-4">Menú</h4>
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/graduados/list">
            <i class="bi bi-person"></i> Graduados
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/usuarios/list">
            <i class="bi bi-people"></i> Usuarios
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/carreras/list">
            <i class="bi bi-briefcase"></i> Carreras
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/datos">
            <i class="bi bi-bar-chart"></i> Datos
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/datos">
            <i class="bi bi-bar-chart"></i> Foros
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="flex-grow-1">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <!-- Toggle Button -->
          <button
            class="btn btn-outline-primary me-3"
            @click="toggleSidebar = !toggleSidebar"
          >
            <i class="bi bi-list"></i>
          </button>
          <span class="navbar-brand">Bienvenido</span>

          <!-- Perfil -->
          <div class="d-flex align-items-center ms-auto">
            <i class="bi bi-person-circle fs-4 me-3"></i>
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Perfil
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><router-link class="dropdown-item" to="/dashboard/editar-perfil">Editar Perfil</router-link></li>
                <li><router-link class="dropdown-item" to="/logout">Logout</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <!-- Content Area -->
      <div class="p-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleSidebar: false, // Estado inicial del sidebar
    };
  },
};
</script>

<style scoped>
.sidebar {
  transition: all 0.3s ease; /* Animación suave */
}

.navbar {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
