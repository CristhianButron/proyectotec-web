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

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
/*axios.interceptors.request.use(function (config) {
  config.headers['X-Binarybox-Api-Key'] = process.env.VUE_APP_API_KEY;
  return config;
});*/

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: DashboardAdmin },
    { path: "/graduados/list", component: GraduadoList},
    { path: "/graduados/create", component: GraduadoCreate },
    { path: "/graduados/edit/:id", component: GraduadoEdit },
    { path: "/graduados/show/:id", component: GraduadoShow },
    { path: "/usuarios/list", component: UsuariosList},
    { path: "/usuarios/create", component: UsuariosCreate},
    { path: "/usuarios/edit/:id", component: UsuariosEdit},
    // Nueva ruta para el DashboardAdmin
  ],
});

createApp(App).use(router).mount("#app");
