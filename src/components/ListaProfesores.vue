<template>
  <div>
    <h2>Lista de Profesores Particulares</h2>
    <div v-if="professors.length">
      <ul>
        <li v-for="professor in professors" :key="professor.id">
          <h3>{{ professor.nombre }}</h3>
          <p>Especialidad: {{ professor.especialidad }}</p>
          <button @click="verDetalles(professor.id)">Ver Detalles</button>
        </li>
      </ul>
    </div>
    <p v-else>Cargando tutores...</p>
  </div>
</template>

<script>
import axios from 'axios';

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
            const response = await axios.get('https://672993c56d5fa4901b6d95e2.mockapi.io/api/v1/Profesores');
            this.professors = response.data;
        } catch (error) {
            console.error('Error al obtener profesores: ', error);
        }
      },
      verDetalles(professorId) {
        this.$router.push({ name: 'detallesProfesores', params: { id: professorId } });
      },
    },
    created() {
        this.obtenerProfesores();
    },
};
</script>