<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Lista de Profesores Particulares</h2>
    <div v-if="professors.length" class="row">
      <div class="col-md-5 mb-4" v-for="professor in professors" :key="professor.id">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">{{ professor.email }}</h5>
            <p class="card-text">Especialidad: {{ professor.speciality }}</p>
            <button class="btn btn-primary w-100" @click="verDetalles(professor.id)">Ver Detalles</button>
          </div>
        </div>
      </div>
     </div>
    <p v-else>Cargando tutores...</p>
  </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from "../constants/globalVariables";

export default {
    name: 'ListaProfesores',
    data() {
        return {
            professors: [],
        };
    },
    methods: {
      async obtenerProfesores() {
        try {
            const response = await axios.get(`${API_URL}/users`);
            const result = response.data.filter(
              (professor) => professor.role === "PROFESSOR_ROLE"
            );
            this.professors = result;
        } catch (error) {
            console.error('Error al obtener profesores: ', error);
        }
      },
      verDetalles(professorId) {
        this.$router.push({ name: 'DetallesProfesores', params: { id: professorId } });
      },
    },
    created() {
        this.obtenerProfesores();
    },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  color: #555;
}
</style>