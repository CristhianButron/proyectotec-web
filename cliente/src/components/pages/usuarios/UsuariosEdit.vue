<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Editar Usuario</h2>
    <div class="card">
      <div class="card-header">
        <router-link class="btn btn-outline-info float-right" to="/usuarios"
          >Ver todos los usuarios
        </router-link>
      </div>
      <div class="card-body">
        <form @submit.prevent="guardarCambios">
          <div class="form-group">
            <label htmlFor="username">Nombre de Usuario</label>
            <input
              v-model="user.username"
              type="text"
              class="form-control"
              id="username"
              name="username"
            />
          </div>
          <div class="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              id="email"
              name="email"
            />
          </div>
          <div class="form-group">
            <label htmlFor="firstName">Nombre</label>
            <input
              v-model="user.firstName"
              type="text"
              class="form-control"
              id="firstName"
              name="firstName"
            />
          </div>
          <div class="form-group">
            <label htmlFor="lastName">Apellido</label>
            <input
              v-model="user.lastName"
              type="text"
              class="form-control"
              id="lastName"
              name="lastName"
            />
          </div>
          <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        </form>
      </div>
    </div>
  </layout-div>
</template>

<script>
import axios from "axios";
import LayoutDiv from "../../LayoutDiv.vue";
import Swal from "sweetalert2";

export default {
  name: "UsuariosEdit",
  components: {
    LayoutDiv,
  },
  data() {
    return {
      user: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
      },
    };
  },
  mounted() {
    const id = this.$route.params.id;
    console.log("ID del usuario:", id); // Verifica si el ID está llegando
    axios
      .get(`/api/v1/usuario/getUsuarios/${id}`)
      .then((response) => {
        console.log("Datos del usuario:", response.data); // Verifica la respuesta de la API
        this.user = response.data;
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Un error ha ocurrido al obtener los datos del usuario!",
          showConfirmButton: false,
          timer: 1500,
        });
        return error;
      });
  },
  methods: {
    guardarCambios() {
      const id = this.$route.params.id;
      axios
        .put(`/api/v1/usuario/putUsuarios/${id}`, this.user)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Usuario actualizado correctamente!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push("/usuarios");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Un error ha ocurrido al actualizar el usuario!",
            showConfirmButton: false,
            timer: 1500,
          });
          return error;
        });
    },
  },
};
</script>
