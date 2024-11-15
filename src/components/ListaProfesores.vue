<template>
  <div>
    <h2>Lista de Profesores Particulares</h2>
    <div v-if="professors.length">
      <ul>
        <li v-for="professor in professors" :key="professor.id">
          <h3>{{ professor.email }}</h3>
          <p>Especialidad: {{ professor.speciality }}</p>
          <button @click="verDetalles(professor.id)">Ver Detalles</button>
        </li>
      </ul>
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