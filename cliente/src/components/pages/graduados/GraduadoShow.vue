<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Detalles del Graduado</h2>
    <div v-if="student && carrera">
      <div class="card mb-3">
        <div class="card-header">
          <h3>{{ student.personaDto.nombre }} {{ student.personaDto.apaterno }} {{ student.personaDto.amaterno }}</h3>
        </div>
        <div class="card-body row">
          <div class="col-md-8">
            <p><strong>CI:</strong> {{ student.personaDto.ci }}</p>
            <p><strong>Correo Personal:</strong> {{ student.correoPersonal }}</p>
            <p><strong>Celular:</strong> {{ student.celular }}</p>
            <p><strong>Red Social:</strong> {{ student.redSocial }}</p>
            <p><strong>Ciudad de Nacimiento:</strong> {{ student.ciudadNacimiento }}</p>
            <p><strong>Tipo de Titulación:</strong> {{ student.tipoTitulacion }}</p>
            <p><strong>Fecha de Ingreso:</strong> {{ student.fechaIngreso }}</p>
            <p><strong>Fecha de Fin:</strong> {{ student.fechaFin }}</p>
            <p><strong>Fecha de Inserción:</strong> {{ student.fechaInsercion }}</p>
            <p><strong>Fecha de Nacimiento:</strong> {{ student.personaDto.fechaNacimiento }}</p>
            <p><strong>Género:</strong> {{ student.personaDto.generoNacimiento }}</p>
            <p><strong>Nacionalidad:</strong> {{ student.personaDto.nacionalidad }}</p>
            <p><strong>Carrera:</strong> {{ carrera.nombre }}</p>
          </div>
          <div class="col-md-4 text-right">
            <div v-if="student.fotoTitulo">
              <p><strong>Foto del Título:</strong></p>
              <img :src="student.fotoTitulo" alt="Foto del Título" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="card-footer text-right">
          <button class="btn btn-secondary" @click="volver">Volver</button>
          <router-link class="btn btn-outline-success float-right" to="./trabajos">
          </router-link>
          <router-link class="btn btn-outline-success float-right" to="./postgrados">
            <button>Postgrados</button>
          </router-link>
        </div>
      </div>
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
  name: "GraduadoShow",
  components: {
    LayoutDiv,
  },
  data() {
    return {
      student: null,
      carrera: null,
    };
  },
  mounted() {
    this.fetchStudent();
  },
  methods: {
    async fetchStudent() {
      const studentId = this.$route.params.id;
      try {
        const response = await axios.get(`/api/v1/estudiantes/getEstudiantes/${studentId}`);
        this.student = response.data;
        this.fetchCarrera(this.student.carrera_id_carrera);
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
    async fetchCarrera(carreraId) {
      try {
        const response = await axios.get(`/api/v1/carreras/obtenerCarreraById/${carreraId}`);
        this.carrera = response.data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Un error ha ocurrido al obtener los datos de la carrera!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.error('Error fetching carrera:', error);
      }
    },
    volver() {
      this.$router.push('../list');
    },
  },
};
</script>

<style scoped>
/* Estilos para tus botones */
</style>