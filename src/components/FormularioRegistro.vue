<template>
  <div>
    <h2>Reserva una Tutoría</h2>
    <form @submit.prevent="reservarProfesor">
      <div>
        <label for="fecha">Fecha:</label>
        <input type="date" v-model="fecha" required />
      </div>
      <div>
        <label for="hora">Hora:</label>
        <input type="time" v-model="hora" required />
      </div>
      <div>
        <label for="comentarios">Comentarios (opcional): </label>
        <textarea v-model="comentarios" placeholder="Escribe algún comentario o petición especial sobre tu clase/s con el profesor." />
      </div>
      <button type="submit">Confirmar Reserva</button>
    </form>
    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'FormularioRegistro',
    props: {
        professorId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            fecha: '',
            hora: '',
            comentarios: '',
            mensaje: '',
        }
    },
    methods: {
        async reservarProfesor() {
            try {
                const reserva = {
                    professorId: this.professorId,
                    fecha: this.fecha,
                    hora: this.hora,
                    comentarios: this.comentarios,
                };

                const responde = await axios.post('https://67299bee6d5fa4901b6dade2.mockapi.io/api/v1/Reservas', reserva);
                if(response.status === 201) {
                    this.mensaje = '¡Reserva Confirmada Existosamente!';
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
    },
};
</script>