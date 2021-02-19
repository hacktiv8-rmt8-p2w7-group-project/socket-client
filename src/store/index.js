import Vue from "vue"
import Vuex from "vuex"
import router from "../router/"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: "",
        users: [],
    },
    mutations: {
        setTaken(state, payload) {
            state.taken = payload
        },
        setName(state, payload) {
            state.name = payload
        },
        setUsers(state, payload) {
            state.users = payload
        },
    },
    actions: {
        SOCKET_taken(context, payload) {
            if (!payload.state) {
                context.commit("setName", payload.name)
                router.push("/GameRoom")
                Vue.toasted.show(`Welcome ${payload.name}`, {
                    theme: "bubble",
                    position: "top-right",
                    duration: 2000,
                })
            } else {
                Vue.toasted.show(`${payload.name} is taken`, {
                    theme: "bubble",
                    position: "top-right",
                    duration: 2000,
                })
            }
        },
        SOCKET_getUser(context, payload) {
            context.commit("setUsers", payload)
            let bel = new Audio('https://www.meramukoding.com/wp-content/uploads/2020/05/doorbell.mp3');
            bel.play();
        },
        SOCKET_roomFull(context) {
            router.push({ name: "RoomFull" })
            context.commit("setName", "")
        },
    },
    modules: {},
})
