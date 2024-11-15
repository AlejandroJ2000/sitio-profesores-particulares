<template>
  <div v-if="professor">
    <h2>Detalles de {{ professor.email }}</h2>
    <p><strong>Materia:</strong> {{ professor.speciality }} </p>
    <p><strong>Descripción:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <button @click="mostrarFormulario = !mostrarFormulario">
      {{ mostrarFormulario ? 'Cancelar Reserva' : 'Reservar Tutoría' }}
    </button>
    
    <FormularioRegistro v-if="mostrarFormulario" :professorId="professor.id" />

    <button @click="$router.back()">Volver</button>
  </div>
  <p v-else>Cargando datos del profesor...</p>
</template>

<script>
import axios from 'axios';
import FormularioRegistro from './FormularioRegistro.vue';
import { API_URL } from "../constants/globalVariables";

export default {
    name: 'DetallesProfesores',
    components: {
      FormularioRegistro,
    },
    data() {
        return {
            professor: null,
            mostrarFormulario: false,
        };
    },
    methods: {
        async obtenerDetallesProfesor() {
          try {
            const professorId = this.$route.params.id;
            const response = await axios.get(`${API_URL}/users/${professorId}`);
            this.professor = response.data;
          } catch (error) {
            console.error('Error al obtener detalles del tutor: ', error);
          }
        },
    },
    created(){
        this.obtenerDetallesProfesor();
    },
};
</script>