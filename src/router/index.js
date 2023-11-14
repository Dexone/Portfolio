import { createRouter, createWebHistory } from "vue-router"
import Home from "../components/Home.vue"
import Projects from "../components/Projects.vue"

const routes = [
    {
        path: "/", component: Home, name: "home"
    },
    {
        path: "/projects", component: Projects, name: "projects"
    }
]
export default createRouter(
    {
        history: createWebHistory(), routes
    })