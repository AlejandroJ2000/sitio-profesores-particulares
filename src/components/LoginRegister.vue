<template>
 <div class="auth-container">
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="text-center mb-4">{{  isLogin ? 'Iniciar Sesión' : 'Registro' }}</h2>

      <form @submit.prevent="isLogin ? login() : register()">
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input type="email" v-model="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" v-model="password" class="form-control" required />
        </div>
        <div v-if="role==='PROFESSOR_ROLE' && !isLogin" class="mb-3">
          <label for="role" class="form-label">Especialidad</label>
          <select v-model="speciality" class="form-select">
            <option v-for="speciality in specialities" :key="speciality">
              {{ speciality }}
            </option>
          </select>
        </div>
        <div v-if="!isLogin" class="mb-3">
          <label for="role" class="form-label">Rol</label>
          <select v-model="role" class="form-select">
            <option value="STUDENT_ROLE">Estudiante</option>
            <option value="PROFESSOR_ROLE">Profesor</option>
          </select>
        </div>
        <div class="d-grip gap-2">
          <button type="submit" class="btn btn-primary">
            {{ isLogin ? "Iniciar Sesión" : "Registrarse" }}
          </button>
        </div>
       </form>
       <div class="mt-3 text-center">
        <p v-if="isLogin">¿No tienes una cuenta? 
            <button class="btn btn-link" @click="toggleAuthMode">Regístrate</button>
        </p>
        <p v-else>¿Ya tienes una cuenta? 
            <button class="btn btn-link" @click="toggleAuthMode">Inicia Sesión</button>
        </p>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from "../constants/globalVariables";
import { loginMock } from "../utils/loginMock";
import { specialities } from "../constants/specialities";
import { toast } from "vue3-toastify";

export default {
    data() {
        return {
            email: '',
            password: '',
            role: 'STUDENT_ROLE',
            speciality: "",
            isLogin: true,
            specialities,
        };
    },
    methods: {
        toggleAuthMode() {
            this.isLogin = !this.isLogin;
        },
        async login() {
            try {
                const response = await axios.get(`${API_URL}/users`);

                const loginResult = loginMock(
                    response.data,
                    this.email,
                    this.password
                );

                if(!loginResult.ok){
                    console.error(loginResult.error);
                    toast.error(loginResult.error);
                    return;
                }

                toast.success("Inicio de sesión correcto");
                localStorage.setItem('user', JSON.stringify(loginResult.user));

                if(loginResult.user.role == "ADMIN_ROLE") {
                  this.$router.push("/admin")
                } else {
                  this.$router.push('/');
                }
                
            } catch (error) {
                console.error("Error en el inicio de sesión:", error);
            }
        },
        async register() {
            try {
                await axios.post(`${API_URL}/users`, {
                    email: this.email,
                    password: this.password,
                    speciality: this.speciality ? this.speciality : "n/s",
                    role: this.role,
                });
                this.isLogin = true;
            } catch(error) {
                console.error("Error en el registro : ", error);
            }
        },
    },
};
</script>

<style>
.auth-container {
    max-width: 400px;
    margin: 0 auto;
}
</style>