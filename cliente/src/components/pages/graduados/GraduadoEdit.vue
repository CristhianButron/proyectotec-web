<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Editar Graduado</h2>
    <div class="card">
      <div class="card-header">
        <router-link class="btn btn-outline-info float-right" to="../list">
          Ver todos los graduados
        </router-link>
      </div>
      <div class="card-body">
        <form @submit.prevent="guardarCambios">
          <div class="form-group">
            <label htmlFor="ci">CI</label>
            <input
              v-model="student.personaDto.ci"
              type="text"
              class="form-control"
              id="ci"
              name="ci"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              v-model="student.personaDto.nombre"
              type="text"
              class="form-control"
              id="nombre"
              name="nombre"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="apaterno">Apellido Paterno</label>
            <input
              v-model="student.personaDto.apaterno"
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
              v-model="student.personaDto.amaterno"
              type="text"
              class="form-control"
              id="amaterno"
              name="amaterno"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
            <input
              v-model="student.personaDto.fechaNacimiento"
              type="date"
              class="form-control"
              id="fechaNacimiento"
              name="fechaNacimiento"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="generoNacimiento">Género de Nacimiento</label>
            <input
              v-model="student.personaDto.generoNacimiento"
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
              v-model="student.personaDto.nacionalidad"
              type="text"
              class="form-control"
              id="nacionalidad"
              name="nacionalidad"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="correoPersonal">Correo Personal</label>
            <input
              v-model="student.correoPersonal"
              type="email"
              class="form-control"
              id="correoPersonal"
              name="correoPersonal"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="celular">Celular</label>
            <input
              v-model="student.celular"
              type="text"
              class="form-control"
              id="celular"
              name="celular"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="redSocial">Red Social</label>
            <input
              v-model="student.redSocial"
              type="text"
              class="form-control"
              id="redSocial"
              name="redSocial"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="ciudadNacimiento">Ciudad de Nacimiento</label>
            <input
              v-model="student.ciudadNacimiento"
              type="text"
              class="form-control"
              id="ciudadNacimiento"
              name="ciudadNacimiento"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="tipoTitulacion">Tipo de Titulación</label>
            <input
              v-model="student.tipoTitulacion"
              type="text"
              class="form-control"
              id="tipoTitulacion"
              name="tipoTitulacion"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="fotoTitulo">Foto del Título</label>
            <input
              v-model="student.fotoTitulo"
              type="text"
              class="form-control"
              id="fotoTitulo"
              name="fotoTitulo"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="fechaIngreso">Fecha de Ingreso</label>
            <input
              v-model="student.fechaIngreso"
              type="date"
              class="form-control"
              id="fechaIngreso"
              name="fechaIngreso"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="fechaFin">Fecha de Fin</label>
            <input
              v-model="student.fechaFin"
              type="date"
              class="form-control"
              id="fechaFin"
              name="fechaFin"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="fechaInsercion">Fecha de Inserción</label>
            <input
              v-model="student.fechaInsercion"
              type="date"
              class="form-control"
              id="fechaInsercion"
              name="fechaInsercion"
              required
            />
          </div>
          <div class="form-group">
            <label for="carrera_id_carrera">Carrera</label>
            <select
              v-model="student.carrera_id_carrera"
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
  name: "GraduadoEdit",
  components: {
    LayoutDiv,
  },
  data() {
    return {
      student: {
        correoPersonal: "",
        celular: "",
        redSocial: "",
        ciudadNacimiento: "",
        tipoTitulacion: "",
        fotoTitulo: "",
        fechaIngreso: "",
        fechaFin: "",
        fechaInsercion: "",
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
        usuario_id_usuario: 7,
        carrera_id_carrera: null,
      },
      carreras: [],
      isSaving: false,
    };
  },
  created() {
    this.fetchStudent();
    this.fetchCarreras();
  },
  methods: {
    async fetchStudent() {
      const studentId = this.$route.params.id;
      try {
        const response = await axios.get(`/api/v1/estudiantes/getEstudiantes/${studentId}`);
        this.student = response.data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Un error ha ocurrido al obtener los datos del estudiante!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.error('Error fetching student:', error);
      }
    },
    async fetchCarreras() {
      try {
        const response = await axios.get('/api/v1/carreras/obtenerCarreras');
        this.carreras = response.data;
      } catch (error) {
        console.error('Error fetching carreras:', error);
      }
    },
    async guardarCambios() {
      this.isSaving = true;
      const studentId = this.$route.params.id;
      try {
        const response = await axios.put(`/api/v1/estudiantes/putEstudiantes/${studentId}`, this.student);
        console.log('Estudiante actualizado:', response.data);
        Swal.fire('Éxito', 'Estudiante actualizado correctamente', 'success');
        this.$router.push('../list');
      } catch (error) {
        console.error('Error al actualizar el estudiante:', error);
        Swal.fire('Error', 'Hubo un problema al actualizar el estudiante', 'error');
      } finally {
        this.isSaving = false;
      }
    },
  },
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>