<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">Reserva Profesores Particulares!</a>
     <button class="navbar-toggler" type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarNav"
       aria-controls="navbarNav"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="Collpase navbar-collapse" id="navbarNav">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Iniciar Sesión</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profesores">Buscar Profesores</router-link>
        </li>
        <li v-if="isStudent" class="nav-item">
          <router-link class="nav-link" to="/mis-reservas">Mis Reservas</router-link>
        </li>
        <li v-if="isProfessor" class="nav-item">
          <router-link class="nav-link" to="/gestionar-sesiones">Gestionar Sesiones</router-link>
        </li>
        <li v-if="isAdmin" class="nav-item">
          <router-link class="nav-link" to="/administrador">Panel de Administración</router-link>
        </li>
       </ul>
     </div>
   </div>
 </nav>
</template>


<script>
  export default {
    name: 'Navbar',
    data() {
        return {
            userRole: '',
        };
    },
    computed: {
        isStudent() {
            return this.userRole === 'student';
        },
        isProfessor() {
            return this.userRole === 'professor';
        },
        isAdmin() {
            return this.userRole === 'admin';
        },
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/login')
        },
    },
    mounted() {
        this.userRole = localStorage.getItem('userRole');
    },
  };
</script>

<style>
  nav ul {
    list-style-type: none;
  }
  nav ul li {
    display: inline;
    margin-right: 20 px
  }
</style>