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
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="estudiante in estudiantes" :key="estudiante.id">
            <td>{{ estudiante.id }}</td>
            <td>{{ estudiante.nombre }}</td>
            <td><button @click="eliminarEstudiante(estudiante.id)">Eliminar</button></td>
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
            <th>Nombre</th>
            <th>Materia</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="professor in professors" :key="professor.id">
            <td>{{ professor.id }}</td>
            <td>{{ professor.nombre }}</td>
            <td>{{ professor.materia }}</td>
            <td><button @click="eliminarProfesor(professor.id)">Eliminar</button></td>
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
            <th>Fecha</th>
            <th>Hora</th>
            <th>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reserva in reservas" :key="reserva.id">
            <td>{{ reserva.id }}</td>
            <td>{{ reserva.professorId }}</td>
            <td>{{ reserva.fecha }}</td>
            <td>{{ reserva.hora }}</td>
            <td>{{ reserva.comentarios }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

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
                const response = await axios.get('https://672993c56d5fa4901b6d95e2.mockapi.io/api/v1/Estudiantes');
                this.totalEstudiantes = response.data.length;
            } catch (error) {
                console.error('Error al cargar estudiantes: ', error);
            }
        },
        async cargarProfesores() {
            try {
                const response = await axios.get('https://672993c56d5fa4901b6d95e2.mockapi.io/api/v1/Profesores');
                this.totalProfesores = response.data.length;
            } catch (error) {
                console.error('Error al cargar profesores: ', error);
            }
        },
        async cargarReservas() {
            try {
                const response = await axios.get('https://mockapi.io/reservas');
                this.totalReservas = response.data.length;
            } catch (error) {
                console.error('Error al cargar reservas: ', error);
            }
        },
        async eliminarEstudiante(studentId) {
            try {
                await axios.delete(`https://672993c56d5fa4901b6d95e2.mockapi.io/api/v1/Estudiantes/${studentId}`);
                this.student = this.student.filter(student => student.id !== studentId);
                this.totalEstudiantes -= 1;
                alert('Estudiante eliminado exitosamente');
            } catch(error) {
                console.error('Error al eliminar el estudiante: ', error);
            }
        },
        async eliminarProfesor(professorId) {
            try {
                await axios.delete(`https://672993c56d5fa4901b6d95e2.mockapi.io/api/v1/Profesores/${professorId}`);
                this.professor = this.professor.filter(professor => professor.id !== professorId);
                this.totalProfesores -= 1;
                alert('Profesor eliminado exitosamente');
            } catch(error) {
                console.error('Error al eliminar el profesor: ', error);
            }
        },
        created() {
            this.cargarEstudiantes();
            this.cargarProfesores();
            this.cargarReservas();
        },
    },
};
</script>
