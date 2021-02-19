import Vue from "vue"
import Vuex from "vuex"
import router from '../router/'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // taken: false,
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
            // context.commit("setTaken", payload)
            if(payload) {
               context.commit("setName", payload);
                router.push("/GameRoom");
            } else {
                // context.commit("setName", '')
                // router.push({ name: 'Login' })
                //ALERT HERE
            }
        },
        SOCKET_getUser(context, payload) {
            context.commit("setUsers", payload)
        },
        SOCKET_roomFull(context) {
            router.push({ name: 'RoomFull' })
            context.commit('setName', '')
        }
    },
    modules: {},
})
