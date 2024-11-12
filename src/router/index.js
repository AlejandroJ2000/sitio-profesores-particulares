import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import LoginRegister from '../components/LoginRegister.vue';
import ListaProfesores from '../components/ListaProfesores.vue';
import DetallesProfesores from '../components/DetallesProfesores.vue';
import PanelAdministrador from '../components/PanelAdministrador.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginRegister,
    },
    {
        path: '/profesores',
        name: 'ListaProfesores',
        component: ListaProfesores,
    },
    {
        path: '/profesores/:id',
        name: 'DetallesProfesores',
        component: DetallesProfesores,
    },
    {
        path: '/administrador',
        name: 'PanelAdministrador',
        componente: PanelAdministrador,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;