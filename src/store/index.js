import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        taken: false,
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
        // login(context, payload) {
        //     socket.emit(`login`, { name: payload })
        // },
        SOCKET_taken(context, payload) {
            context.commit("setTaken", payload)
        },
        SOCKET_getUser(context, payload) {
            context.commit("setUsers", payload)
        },
    },
    modules: {},
})
