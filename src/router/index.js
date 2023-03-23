/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import crearUsuario from '../components/crearUsuario.vue'
import editarUsuario from '../components/editarUsuario.vue'
import listarUsuario from '../components/listarUsuario.vue'
import listarCliente from '../components/Cliente/listarCliente'
import listarDepartamento from '../components/Departamento/listarDepartamento.vue'
import listarEmpleado from '../components/Empleado/listarEmpleado.vue'
import listarFactura from '../components/Factura/listarFactura.vue'
import listarPuesto from '../components/Puesto/listarPuesto.vue'
import listarRol from '../components/Rol/listarRol.vue'
import Login from '../components/LoginCRUD.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/crear',
    name: 'crear',
    component: crearUsuario
  },
  {
    path: '/listar',
    name: 'listar',
    component: listarUsuario
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: editarUsuario
  },
  {
    path: '/listarCliente',
    name: 'listarCliente',
    component: listarCliente
  },
  {
    path: '/listarFactura',
    name: 'listarFactura',
    component: listarFactura
  },
  {
    path: '/listarDepartamento',
    name: 'listarDepartamento',
    component: listarDepartamento
  },
  {
    path: '/listarEmpleado',
    name: 'listarEmpleado',
    component: listarEmpleado
  },
  ,
  {
    path: '/listarPuesto',
    name: 'listarPuesto',
    component: listarPuesto
  },
  {
    path: '/listarRol',
    name: 'listarRol',
    component: listarRol
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router