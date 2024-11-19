<template>
  <div>
    <h2>Panel de Administración</h2>

    <section>
      <h3>Estadísticas</h3>
      <p><strong>Total de Estudiantes: </strong> {{ totalEstudiantes }}</p>
      <p><strong>Total de Profesores: </strong> {{ totalProfesores }}</p>
      <p><strong>Total de Reservas: </strong> {{ totalReservas }}</p>
    </section>

    <section>
      <h3>Lista de Estudiantes</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="estudiante in estudiantes" :key="estudiante.id">
            <td>{{ estudiante.id }}</td>
            <td>{{ estudiante.email }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h3>Lista de Profesores</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Materia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="professor in profesores" :key="professor.id">
            <td>{{ professor.id }}</td>
            <td>{{ professor.email }}</td>
            <td>{{ professor.speciality }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h3>Lista de Reservas</h3>
      <table>
        <thead>
          <tr>
            <th>ID Reserva</th>
            <th>ID Profesor</th>
            <th>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reserva in reservas" :key="reserva.id">
            <td>{{ reserva.id }}</td>
            <td>{{ reserva.professorId }}</td>
            <td>{{ reserva.comentarios }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from "../constants/globalVariables";

export default {
    name: 'PanelAdministrador',
    data() {
        return {
            estudiantes: [],
            profesores: [],
            reservas: [],
            totalEstudiantes: 0,
            totalProfesores: 0,
            totalReservas: 0,
        };
    },
    methods: {
        async cargarEstudiantes() {
            try {
                const response = await axios.get(`${API_URL}/users?role=STUDENT_ROLE`);
                this.totalEstudiantes = response.data.length;
                this.estudiantes = response.data;
            } catch (error) {
                console.error('Error al cargar estudiantes: ', error);
            }
        },
        async cargarProfesores() {
            try {
                const response = await axios.get(`${API_URL}/users?role=PROFESSOR_ROLE`);
                this.totalProfesores = response.data.length;
                this.profesores = response.data;
            } catch (error) {
                console.error('Error al cargar profesores: ', error);
            }
        },
        async cargarReservas() {
            try {
                const response = await axios.get(`${API_URL}/appointments`);
                this.totalReservas = response.data.length;
                this.reservas = response.data;
            } catch (error) {
                console.error('Error al cargar reservas: ', error);
            }
        }
    },
    created() {
            this.cargarEstudiantes();
            this.cargarProfesores();
            this.cargarReservas();
    },
};
</script>

<style>
</style>
