<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Lista de Graduados</h2>
    <div class="mb-3">
      <button class="btn btn-primary" @click="showCreateGraduadoModal">Crear Graduado</button>
    </div>
    <div v-if="graduados.length">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Celular</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="graduado in graduados" :key="graduado.idusuario">
            <td>{{ graduado.nombre }}</td>
            <td>{{ graduado.apellido }}</td>
            <td>{{ graduado.correo }}</td>
            <td>{{ graduado.celular }}</td>
            <td>{{ graduado.rol }}</td>
            <td>
              <button class="btn btn-warning btn-sm" @click="editUser(graduado.idusuario)">Editar</button>
              <button class="btn btn-danger btn-sm" @click="deleteUser(graduado.idusuario)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>

    <!-- Modal para crear graduado -->
    <div class="modal" tabindex="-1" role="dialog" v-if="showModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Crear Graduado</h5>
            <button type="button" class="close" @click="closeModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createGraduado">
              <div class="form-group">
                <label for="alumno">Alumno</label>
                <select class="form-control" id="alumno" v-model="newGraduado.alumno_idalumno" required>
                  <option v-for="alumno in alumnos" :key="alumno.idalumno" :value="alumno.idalumno">
                    {{ alumno.nombre }} {{ alumno.apellido }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="fecha_graduacion">Fecha de Graduación</label>
                <input type="date" class="form-control" id="fecha_graduacion" v-model="newGraduado.fecha_graduacion" required>
              </div>
              <button type="submit" class="btn btn-primary">Crear</button>
            </form>
          </div>
        </div>
      </div>
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
      graduados: [],
      alumnos: [],
      showModal: false,
      newGraduado: {
        fecha_graduacion: '',
        alumno_idalumno: null
      }
    };
  },
  async created() {
    await this.loadGraduados();
    await this.loadAlumnos();
  },
  methods: {
    async loadGraduados() {
      try {
        const response = await axios.get('http://localhost:3000/api/graduados');
        this.graduados = response.data;
      } catch (error) {
        console.error('Error al cargar los graduados:', error);
      }
    },
    async loadAlumnos() {
      try {
        const response = await axios.get('http://localhost:3000/api/alumnos');
        this.alumnos = response.data;
      } catch (error) {
        console.error('Error al cargar los alumnos:', error);
      }
    },
    showCreateGraduadoModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async createGraduado() {
      try {
        await axios.post('http://localhost:3000/api/graduados', this.newGraduado);
        Swal.fire({
          icon: "success",
          title: "Graduado creado exitosamente!",
          showConfirmButton: false,
          timer: 1500,
        });
        this.loadGraduados();
        this.closeModal();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Un error ha ocurrido al crear el graduado!",
          showConfirmButton: true,
        });
        console.error('Error creating graduado:', error);
      }
    },
    editUser(id) {
      // Lógica para editar un usuario existente
      Swal.fire({
        icon: "info",
        title: "Editar Usuario",
        text: `Funcionalidad para editar usuario con ID ${id} aún no implementada.`,
        showConfirmButton: true,
      });
    },
    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:3000/api/usuarios/${id}`);
        this.graduados = this.graduados.filter(graduado => graduado.idusuario !== id);
        Swal.fire({
          icon: "success",
          title: "Usuario eliminado!",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Un error ha ocurrido al eliminar el usuario!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.error('Error deleting user:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Estilos para la lista de graduados */
h2 {
  text-align: center;
  color: #4a90e2;
  margin-bottom: 20px;
}

button {
  padding: 10px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #357ab8;
}

button:active {
  background-color: #2c5e91;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

th {
  background-color: #f0f4f8;
}

td {
  background-color: #ffffff;
}
</style>
