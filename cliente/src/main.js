import { createApp } from "vue";
import App from "./App.vue";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createRouter, createWebHistory } from "vue-router";
import GraduadoList from "./components/pages/graduados/GraduadoList";
import GraduadoCreate from "./components/pages/graduados/GraduadoCreate";
import GraduadoEdit from "./components/pages/graduados/GraduadoEdit";
import GraduadoShow from "./components/pages/graduados/GraduadoShow";
import DashboardAdmin from "./components/pages/inicio/DashboardAdmin";
import UsuariosList from "./components/pages/usuarios/UsuariosList";
import UsuariosCreate from "./components/pages/usuarios/UsuariosCreate";
import UsuariosEdit from "./components/pages/usuarios/UsuariosEdit";
import ForoGet from "./components/pages/Foro/ForosPage.vue";
import PostForo from "./components/pages/Foro/PostForo.vue";
import ForosEdicion from "./components/pages/Foro/ForosEdicion.vue";
import ForosIndex from "./components/pages/Foro/ForosIndex.vue";
import index from "./components/pages/index.vue";
import PasantiasList from "./components/pages/admin/PasantiasList.vue";
import UsuarioAlumnoForm from "./components/pages/admin/UserList.vue";
// Pagina Principal
import HomePage from "./views/HomePage.vue";
import LoginPage from "./views/LoginPage.vue";
import RegistroPage from "./views/RegistroPage.vue";
import ForosPage from "./views/ForosPage.vue";
import PasantiasPage from "./views/PasantiasPage.vue";
import GraduadosPage from "./views/GraduadosPage.vue";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
/*axios.interceptors.request.use(function (config) {
  config.headers['X-Binarybox-Api-Key'] = process.env.VUE_APP_API_KEY;
  return config;
});*/

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Pagina Principal
    { path: "/", component: HomePage },
    { path: "/login", component: LoginPage },
    { path: "/registro", component: RegistroPage },
    { path: "/foros", component: ForosPage },
    { path: "/pasantias", component: PasantiasPage },
    { path: "/graduados", component: GraduadosPage },

    // Lo demas equisde 
    { path: "/Inicio", component: index},
    { path: "/Foros-Start", component: ForosIndex },
    { path: "/graduados/list", component: GraduadoList},
    { path: "/graduados/create", component: GraduadoCreate },
    { path: "/graduados/edit/:id", component: GraduadoEdit },
    { path: "/graduados/show/:id", component: GraduadoShow },
    { path: "/usuarios/list", component: UsuariosList},
    { path: "/usuarios/create", component: UsuariosCreate},
    { path: "/usuarios/edit/:id", component: UsuariosEdit},
    { path: "/GetForo", component: ForoGet},
    { path: "/PostForo", component: PostForo},
    { path: "/ForosEdit", component: ForosEdicion},
    { path: "/ListaPas", component: PasantiasList},
    { path: "/ListaUs", component: UsuarioAlumnoForm},
    { path: "/admin", component: DashboardAdmin },
    // Nueva ruta para el DashboardAdmin
  ],
});

createApp(App).use(router).mount("#app");
