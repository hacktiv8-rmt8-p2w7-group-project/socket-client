<template>
    <div>
        <b-container>
            <b-card
                title="Input your name"
                style="max-width: 20rem"
                class="mb-2 mx-auto"
            >
                <b-form @submit.prevent="login">
                    <b-form-input
                        class="mb-3"
                        v-model="name"
                        placeholder="Enter your name"
                    ></b-form-input>
                    <b-button type="submit" variant="primary">Play!</b-button>
                </b-form>
            </b-card>
        </b-container>
    </div>
</template>

<script>
export default {
    // computed: {
    //     taken() {
    //         return this.$store.state.taken;
    //     },
    // },
    data() {
        return {
            name: "",
            names: [],
        };
    },
    methods: {
        login() {
            this.$socket.emit(`login`, this.name);
            this.$store.commit("setName", this.name);
            this.$router.push("/GameRoom");
            //
            // this.$socket.emit(`login`, this.name, (data) => {
            //     if (data) {
            //         this.names.push(this.name);
            //         console.log(this.name);
            //         this.$router.push("/GameRoom");
            //     } else {
            //         alert(this.name + " username is already in use.");
            //     }
            // });
            //
            // this.$store.dispatch("login", this.name).then(() => {
            //     this.name = "";
            //     this.$router.push({ name: "GameRoom" });
            // });
        },
        // isTaken() {
        //     if (this.taken) {
        //         alert(this.name + " username is already in use.");
        //     } else {
        //         this.$router.push("/GameRoom");
        //     }
        // },
    },
};
</script>

<style>
</style>