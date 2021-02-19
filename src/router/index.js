import Vue from "vue"
import VueRouter from "vue-router"
import Login from "../views/Login.vue"
import GameRoom from "../views/GameRoom.vue"
import store from "../store/"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
        beforeEnter: (to, from, next) => {
            if (store.state.name && to.name === "Login") {
                next({ name: "GameRoom" })
            } else {
                next()
            }
        },
    },
    {
        path: "/gameRoom",
        name: "GameRoom",
        component: GameRoom,
        beforeEnter: (to, from, next) => {
            if (!store.state.name && to.name !== "Login") {
                next({ name: "Login" })
            } else {
                next()
            }
        },
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router
