<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Lista de Graduados</h2>
    <div v-if="users.length">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Celular</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.idusuario">
            <td>{{ user.nombre }}</td>
            <td>{{ user.apellido }}</td>
            <td>{{ user.correo }}</td>
            <td>{{ user.celular }}</td>
            <td>{{ user.rol }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </layout-div>
</template>

<script>
import axios from "axios";
import LayoutDiv from "../../LayoutDiv.vue";
import Swal from "sweetalert2";

export default {
  name: "GraduadoList",
  components: {
    LayoutDiv,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/usuarios');
        this.users = response.data;
        console.log('Usuarios:', this.users);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Un error ha ocurrido al obtener los datos!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>