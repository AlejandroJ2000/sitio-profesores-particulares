<template>
  <div class="container my-5">
    <div v-if="professor" class="card shadow-sm">
      <div class="card-body">
        <h2 class="card-title">Detalles de {{ professor.email }}</h2>
        <p class="card-text"><strong>Materia:</strong> {{ professor.speciality }} </p>
        <p class="card-text"><strong>Descripción:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <button v-if="user && user.role === 'STUDENT_ROLE'" @click="mostrarFormulario = !mostrarFormulario"
        class="btn btn-primary mb-3 w-100">
        {{ mostrarFormulario ? 'Volver' : 'Reservar Tutoría' }}
      </button>
    
      <FormularioRegistro v-if="mostrarFormulario" :professorId="professor.id" :studentId="user ? user.id : ''" />

      </div>
    </div>
    <p v-else class="text-center">Cargando datos del profesor...</p>
 </div>
</template>

<script>
import axios from 'axios';
import FormularioRegistro from './FormularioRegistro.vue';
import { API_URL } from "../constants/globalVariables";
import { toast } from "vue3-toastify";

export default {
    name: 'DetallesProfesores',
    components: {
      FormularioRegistro,
    },
    data() {
        return {
            professor: null,
            mostrarFormulario: false,
            user: null
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
        async getUser() {
          try {
            const user = localStorage.getItem("user");
            if(user) {
              this.user = JSON.parse(user);
            }
          } catch(error) {
            console.error("Error al obtener el usuario: ", error);
            toast.error("Error al obtener el usuario");
          }
        },
    },
    created(){
        this.getUser();
        this.obtenerDetallesProfesor();
    },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

.card {
  border-radius: 10px;
}

.card-title{
  font-size: 1.75rem;
  font-weight: bold;
}

.card-text{
  font-size: 1.1rem;
  color: #555;
}

.btn-primary {
  margin-top: 1rem;
}

.btn-secondary{
  margin-top: 0.5rem;
}
</style>