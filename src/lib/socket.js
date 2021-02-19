import Vue from "vue"
import VueSocketIO from "vue-socket.io"

Vue.use(
    new VueSocketIO({
        debug: true,
        connection: "http://metinseylan.com:1992",
        vuex: {
            store,
            actionPrefix: "SOCKET_",
        },
    })
)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app")
