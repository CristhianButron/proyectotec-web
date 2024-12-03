<template>
    <div>
      <h1>Lista de Pasantías</h1>
      <button @click="showForm()">Agregar Pasantía</button>
      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Descripción</th>
            <th>Fecha Inicio</th>
            <th>Fecha Final</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pasantia in pasantias" :key="pasantia.idpasantia">
            <td>{{ pasantia.empresa }}</td>
            <td>{{ pasantia.descripcion }}</td>
            <td>{{ pasantia.fecha_inicio }}</td>
            <td>{{ pasantia.fecha_final }}</td>
            <td>
              <button @click="editPasantia(pasantia)">Editar</button>
              <button @click="deletePasantia(pasantia.idpasantia)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <PasantiaForm v-if="formVisible" @save="fetchPasantias" @close="formVisible = false" :pasantia="selectedPasantia" />
    </div>
  </template>
  
  <script>
  import PasantiaForm from './PasantiaForm.vue';
  import api from './services/api';
  
  export default {
    components: { PasantiaForm },
    data() {
      return {
        pasantias: [],
        formVisible: false,
        selectedPasantia: null,
      };
    },
    methods: {
      async fetchPasantias() {
        const response = await api.getAll();
        this.pasantias = response.data;
      },
      showForm() {
        this.selectedPasantia = null;
        this.formVisible = true;
      },
      editPasantia(pasantia) {
        this.selectedPasantia = pasantia;
        this.formVisible = true;
      },
      async deletePasantia(id) {
        await api.delete(id);
        this.fetchPasantias();
      },
    },
    mounted() {
      this.fetchPasantias();
    },
  };
  </script>
  
  <style scoped>
h1 {
  text-align: center;
  color: #4a90e2;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px 15px;
}

th {
  background-color: #4a90e2;
  color: white;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}

button {
  padding: 10px 15px;
  margin: 5px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #357ab8;
}

button:active {
  background-color: #2c5e91;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>