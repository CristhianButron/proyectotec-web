<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Lista de Usuarios</h2>
    <div class="card">
      <div class="card-header">
        <router-link class="btn btn-outline-success float-right" to="/usuarios/create"> 
          Crear Usuario
        </router-link>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Cargo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.idUsuario">
              <td>{{ user.idUsuario }}</td>
              <td>{{ user.personaDto.nombre }}</td>
              <td>{{ user.correoinstitucional }}</td>
              <td>{{ user.cargo }}</td>
              <td>
                <router-link class="btn btn-outline-primary btn-sm" :to="`/usuarios/edit/${user.idUsuario}`">Editar</router-link>
                <button class="btn btn-outline-danger btn-sm" @click="eliminarUsuario(user.idUsuario)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link class="btn btn-outline-secondary float-right" to="/">Volver</router-link>
      </div>
    </div>
  </layout-div>
</template>

<script>
import axios from "axios";
import LayoutDiv from "../../LayoutDiv.vue";
import Swal from "sweetalert2";

export default {
  name: "UsuariosShow",
  components: {
    LayoutDiv,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios
      .get('/api/v1/usuario/getUsuarios')
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Un error ha ocurrido al obtener los usuarios!",
          showConfirmButton: false,
          timer: 1500,
        });
        return error;
      });
  },
  methods: {
    eliminarUsuario(id) {
      axios
        .delete(`/api/v1/usuario/deleteUsuarios/${id}`)
        .then(() => {
          this.users = this.users.filter(user => user.idUsuario !== id);
          Swal.fire({
            icon: "success",
            title: "Usuario eliminado correctamente!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Un error ha ocurrido al eliminar el usuario!",
            showConfirmButton: false,
            timer: 1500,
          });
          return error;
        });
    }
  },
};
</script>
