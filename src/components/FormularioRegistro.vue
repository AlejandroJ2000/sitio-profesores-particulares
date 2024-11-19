<template>
  <div>
    <h2>Reserva una Clase Particular</h2>
    <form v-if="!mensaje" @submit.prevent="reservarProfesor">
      <div>
        <label for="fecha">Fecha:</label>
        <input type="date" v-model="date" required />
      </div>
      <div>
        <label for="hora">Hora:</label>
        <input type="time" v-model="time" required />
      </div>
      <div>
        <label for="comentarios">Comentarios (opcional): </label>
        <textarea v-model="comments" placeholder="Escribe algún comentario o petición especial sobre tu clase/s con el profesor." />
      </div>
      <button type="submit">Confirmar Reserva</button>
    </form>
    <button v-if="appointment" @click="deleteAppointment()"
        class="btn btn-primary mb-3 w-100">
        Cancelar Reserva
    </button>
    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from "../constants/globalVariables";

export default {
    name: 'FormularioRegistro',
    props: {
        professorId: {
            type: String,
            required: true,
        },
        studentId: {
          type: String
        }
    },
    data() {
        return {
            date: '',
            time: '',
            comments: '',
            mensaje: '',
            appointment: null
        }
    },
    methods: {
        async reservarProfesor() {
            try {
                const reserva = {
                    professorId: this.professorId,
                    date: this.date,
                    time: this.time,
                    comentarios: this.comments,
                    studentId: this.studentId
                };

                const response = await axios.post(`${API_URL}/appointments`, reserva);
                if(response.status === 201) {
                    this.appointment = response.data;
                    this.mensaje = `¡Reserva Confirmada Existosamente con el código: ${response.data.id}!`;
                } else {
                    this.mensaje = 'Hubo un problema al realizar la reserva. Intente de nuevo.';
                }

                this.fecha = '';
                this.hora = '';
                this.comentarios = '';
            }  catch(error) {
                console.error("Error al realizar la reserva: ", error);
                this.mensaje = "Hubo un error al realizar la reserva.";
            }
        },
        async deleteAppointment() {
          try{
            const response = await axios.delete(
              `${API_URL}/appointments/${this.appointment.id}`
            );
            if(response.status === 200) {
              this.mensaje = "Reserva cancelada con éxito.";
              this.appointment = null;
            } else{
              this.mensaje = "Hubo un problema al cancelar la reserva.";
            }
          } catch (error) {
            console.error("Error al canelar la reserva: ", error);
            this.mensaje = "Hubo un error al cancelar la reserva.";
          }
        }
    },
};
</script>