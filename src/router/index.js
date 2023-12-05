import { createRouter, createWebHistory } from 'vue-router'
import OneDay from "../views/OneDay"
import MyNavbar from "../components/MyNavbar"
import TwoDay from "../views/TwoDay"
import AllExercise from "../views/AllExercise"
import SignUp from "../views/Users/SignUp"
import LoginPage from '../views/Users/LoginPage'

const routes = [
    {
        path: '/',
        name: 'MyNavbar',
        component: MyNavbar,
      },
    {
        path: '/OneDay',
        name: 'OneDay',
        component: OneDay,
    },
    {
        path: '/TwoDay',
        name: 'TwoDay',
        component: TwoDay,
    },
    {
        path: '/AllExercise',
        name: 'AllExercise',
        component: AllExercise,
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/LoginPage',
        name: 'LoginPage',
        component: LoginPage,
    },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
