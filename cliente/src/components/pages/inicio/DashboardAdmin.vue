<template>
  <div class="d-flex flex-column flex-lg-row vh-100">
    <!-- Sidebar -->
    <nav
      class="sidebar bg-dark text-white p-3 flex-shrink-0"
      :class="{ 'd-none': toggleSidebar }"
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
          <router-link class="nav-link text-white" to="/Foros-Start">
            <i class="bi bi-chat-left-text"></i> Foros
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/pasantias">
            <i class="bi bi-briefcase-fill"></i> Pasantías
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <div class="flex-grow-1">
      <!-- Navbar -->
      <header class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div class="container-fluid">
          <!-- Toggle Button -->
          <button
            class="btn btn-outline-primary me-3 d-lg-none"
            @click="toggleSidebar = !toggleSidebar"
          >
            <i class="bi bi-list"></i>
          </button>
          <span class="navbar-brand">Administrador</span>

          <!-- Perfil -->
          <div class="dropdown ms-auto">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Perfil
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <router-link class="dropdown-item" to="/dashboard/editar-perfil">
                  Editar Perfil
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/logout">
                  Logout
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <main class="p-4">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleSidebar: false, // Controla si el sidebar está oculto
    };
  },
};
</script>

<style scoped>
.sidebar {
  transition: all 0.3s ease;
  height: 100%; /* Asegura que ocupe toda la altura de la ventana */
}
.nav-link {
  transition: background-color 0.2s;
}
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
