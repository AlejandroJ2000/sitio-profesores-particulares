<template>
 <div class="home-container">
   <header class="text-center py-5 bg-primary text-white">
      <h1>Bienvenido a la plataforma para Encontrar Clases Particulares</h1>
      <p class="lead">Contecta con profesores calificados y aprende a tu propio ritmo.</p>
   </header>

   <section class="container my-5">
      <div class="row">
         <div class="col-md-6">
            <img src="https://via.placeholder.com/500x300" alt="Clases Particulares" class="img-fluid rounded shadow-sm">
         </div>
         <div class="col-md-6">
            <h2>Nuestra Plataforma</h2>
            <p>La misma está diseñada para ayudarte a encontrar el profesor particular perfecto para la materia que necesitas. Ya sea que busques para matemáticas, aprender un nuevo idioma o preparar literatura, nuestros profesores están aquí para ayudarte.</p>
            <p>Registrate como estudiante o brinda tus servicios como profesor, elige tu materia y comienza el viaje de aprendizaje.</p>
         </div>
      </div>
   </section>
   <section class="bg-light py-5">
     <div class="container text-center">
      <h2>Beneficios de usar nuestra plataforma</h2>
      <div class="row mt-4">
         <div class="col-md-4">
            <i class="bi bi-person-check-fill display-4 text primary"></i>
            <h3>Todo tipo de profesores</h3>
            <p>Encuentra profesores versados en cualquier área de estudio u ofrece lo que crees que puedes enseñar.</p>
         </div>
         <div class="col-md-4">
            <i class="bi bi-laptop-fill display-4 text-primary"></i>
            <h3>Posibilidad de Clases Online</h3>
            <p>Puedes encontrar así como ofrecer tener las clases desde la comodidad de tu casa.</p>
         </div>
         <div class="col-md-4">
            <i class="bi bi-calendar-check-fill display-4 text-primary"></i>
            <h3>Horarios Flexibles</h3>
            <p>Reserva clases según tu disponibilidad, quedando a total acuerdo entre vos y el profesor.</p>
         </div>
      </div>
     </div>
   </section>
   <section class="container my-5">
      <h2 class="text-center mb-4">¿Cómo funciona?</h2>
      <div class="row">
         <div class="col-md-4 text-center">
            <i class="bi bi-pencil-square display-3 text-secondary"></i>
            <h4>Regístrate</h4>
            <p>Crea una cuenta como estudiante o profesor.</p>
         </div>
         <div class="col-md-4 text-center">
            <i class="bi bi-search display-3 text-secondary"></i>
            <h4>Encuentra un Profesor</h4>
            <p>Explora el perfil de diferentes profesores y elige el que mejor se adapta a vos!</p>
         </div>
         <div class="col-md-4 text-center">
            <i class="bi bi-clock display-3 text-secondary"></i>
            <h4>Reserva tu clase</h4>
            <p>Reserva una clase a la hora que más te sea apropiado y empieza a aprender!</p>
         </div>
      </div>
   </section>
 </div>
</template>

<script>
 export default {
    name: 'Home',
 }
</script>

<style>
.home-container {
   font-family: Arial, Helvetica, sans-serif;
}

header{
   background-color: #007bff;
}

header h1{
   font-size: 2.5rem;
}

section h2{
   font-size: 2rem;
}

section p{
   font-size: 1.1 rem;
   color: #555;
}

.bi{
   font-size: 2.5rem;
   color: #007bff
}
</style>
//dummy