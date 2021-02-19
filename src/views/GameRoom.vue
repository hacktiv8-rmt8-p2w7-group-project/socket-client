<template>
    <div>
        <div class="justify-content-center">
            <div v-if="!gameStarted">
                <!-- <div>
                    <b-button variant="info" class="m-2" @click="playGame"
                        ><i class="fas fa-play-circle"></i> Play Game</b-button
                    >
                </div> -->
                <div>
                    <b-button variant="danger" class="m-2" @click.prevent="leave"
                        ><i class="fas fa-logout-circle"></i> Leave</b-button
                    >
                </div>
            </div>
            <b-container>
                <b-card>
                    <div class="d-flex row justify-content-center">
                        {{ name }} <br />
                        {{ result }}
                    </div>
                </b-card>
            </b-container>
            <b-container>
                <b-card>
                    <p>Player list :</p>
                    <b-card v-for="user in users" :key="user">
                        {{ user }}
                    </b-card>
                </b-card>
            </b-container>
            <b-container v-if="!gameStarted">
                <img
                    @click="setSelect('rock')"
                    class="janken"
                    src="../assets/Batu.png"
                />
                <img
                    @click="setSelect('scissors')"
                    class="janken"
                    src="../assets/Gunting.png"
                />
                <img
                    @click="setSelect('paper')"
                    class="janken"
                    src="../assets/Kertas.png"
                />
            </b-container>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: "GameRoom",
    props: ["gameId"],
    components: {},
    computed: {
        name() {
            return this.$store.state.name;
        },
        users() {
            return this.$store.state.users;
        },
    },
    data() {
        return {
            gameStarted: false,
            result: "",
        };
    },
    methods: {
        playGame() {
            this.gameStarted = true;
        },
        setSelect(value) {
            // this.$store.commit("setSelect", value);
            this.gameStarted = true
            this.$socket.emit("player choice", this.name, value);
        },
        leave() {
            this.$socket.disconnect();
            this.$store.commit('setName', '');
            this.$store.commit('setUsers', '');
            this.$router.push({ name: 'Login' })
            this.$toasted.show("Success logout", {
                theme: "bubble",
                position: "top-right",
                duration: 2000
            });
        }
    },
    sockets: {
        tie: function () {
            // countdown(choices);
            this.result = `A tie!`;
            // setTimeout(function () {
            //     this.result = `A tie!`;
            // }, 5000);

            // submitted = false;
            Swal.fire({
                title: "A tie!",
                text: "No one wins!",
                timer: 5000,
            });
        },
        player1Win: function (choices) {
            // countdown(choices);
            this.result = `${choices[0]["user"]} wins!`;
            // setTimeout(function () {
            //     this.result = `${choices[0]["user"]} wins!`;
            // }, 5000);

            // submitted = false;
            Swal.fire({
                title: `${choices[0]["user"]} wins!`,
                timer: 5000,
            });
        },
        player2Win: function (choices) {
            // countdown(choices);
            this.result = `${choices[1]["user"]} wins!`;
            // setTimeout(function () {
            //     this.result = `${choices[1]["user"]} wins!`;
            // }, 5000);

            // submitted = false;
            Swal.fire({
                title: `${choices[1]["user"]} wins!`,
                timer: 5000,
            });
        },
    },
    created() {
        // console.log({ game: this.$route.params.gameId });
        // this.$store.dispatch("getRoom", this.$route.params.gameId);
    },
};
</script>

<style>
.janken:hover {
    cursor: pointer;
}
</style>