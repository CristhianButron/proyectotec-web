<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Crear Usuario</h2>
    <div class="card">
      <div class="card-header">
        <router-link class="btn btn-outline-info float-right" to="./list">
          Ver todos los usuarios
        </router-link>
      </div>
      <div class="card-body">
        <form @submit.prevent="crearUsuario">
          <div class="form-group">
            <label htmlFor="correoinstitucional">Correo Institucional</label>
            <input
              v-model="user.correoinstitucional"
              type="email"
              class="form-control"
              id="correoinstitucional"
              name="correoinstitucional"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="contrasenha">Contraseña</label>
            <input
              v-model="user.contrasenha"
              type="password"
              class="form-control"
              id="contrasenha"
              name="contrasenha"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="cargo">Cargo</label>
            <input
              v-model="user.cargo"
              type="text"
              class="form-control"
              id="cargo"
              name="cargo"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="admin">Admin</label>
            <input
              v-model="user.admin"
              type="checkbox"
              class="form-control"
              id="admin"
              name="admin"
            />
          </div>
          <div class="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              v-model="user.personaDto.nombre"
              type="text"
              class="form-control"
              id="nombre"
              name="nombre"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
            <input
              v-model="user.personaDto.fechaNacimiento"
              type="date"
              class="form-control"
              id="fechaNacimiento"
              name="fechaNacimiento"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="ci">CI</label>
            <input
              v-model="user.personaDto.ci"
              type="text"
              class="form-control"
              id="ci"
              name="ci"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="generoNacimiento">Género de Nacimiento</label>
            <input
              v-model="user.personaDto.generoNacimiento"
              type="text"
              class="form-control"
              id="generoNacimiento"
              name="generoNacimiento"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="nacionalidad">Nacionalidad</label>
            <input
              v-model="user.personaDto.nacionalidad"
              type="text"
              class="form-control"
              id="nacionalidad"
              name="nacionalidad"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="apaterno">Apellido Paterno</label>
            <input
              v-model="user.personaDto.apaterno"
              type="text"
              class="form-control"
              id="apaterno"
              name="apaterno"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="amaterno">Apellido Materno</label>
            <input
              v-model="user.personaDto.amaterno"
              type="text"
              class="form-control"
              id="amaterno"
              name="amaterno"
              required
            />
          </div>
          <div class="form-group">
            <label for="carrera_id_carrera">Carrera</label>
            <select
              v-model="user.carrera_id_carrera"
              class="form-control"
              id="carrera_id_carrera"
              name="carrera_id_carrera"
              required
            >
              <option v-for="carrera in carreras" :key="carrera.idCarrera" :value="carrera.idCarrera">
                {{ carrera.nombre }}
              </option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Crear Usuario</button>
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
  name: "UsuariosCreate",
  components: {
    LayoutDiv,
  },
  data() {
    return {
      user: {
        correoinstitucional: "",
        contrasenha: "",
        cargo: "",
        admin: true,
        personaDto: {
          idPersona: 0,
          nombre: "",
          fechaNacimiento: "",
          ci: "",
          generoNacimiento: "",
          nacionalidad: "",
          apaterno: "",
          amaterno: "",
        },
        carrera_id_carrera: null,
      },
      carreras: [],
      isSaving: false,
    };
  },
  created() {
    this.fetchCarreras();
  },
  methods: {
    async crearUsuario() {
      this.isSaving = true;
      try {
        const userData = {
          ...this.user,
          personaDto: {
            ...this.user.personaDto,
            fechaNacimiento: this.user.personaDto.fechaNacimiento,
          },
        };

        const response = await axios.post('/api/v1/usuario/postUsuarios', userData);
        console.log('Usuario creado:', response.data);
        Swal.fire('Éxito', 'Usuario creado correctamente', 'success');
      } catch (error) {
        console.error('Error al crear el usuario:', error);
        Swal.fire('Error', 'Hubo un problema al crear el usuario', 'error');
      } finally {
        this.isSaving = false;
      }
    },
    async fetchCarreras() {
      try {
        const response = await axios.get('/api/v1/carreras/obtenerCarreras');
        this.carreras = response.data;
        if (this.carreras.length > 0) {
          this.user.carrera_id_carrera = this.carreras[0].idCarrera;
        }
      } catch (error) {
        console.error('Error fetching carreras:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>
