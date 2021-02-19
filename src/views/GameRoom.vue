<template>
    <div>
        <div class="custom_center_screen">
            <div class="justify-content-center">
                <div>
                    <div>
                        <b-button
                            variant="warning"
                            class="m-2"
                            @click.prevent="leave"
                            ><i class="fas fa-logout-circle"></i> Leave the
                            game</b-button
                        >
                    </div>
                </div>
                <b-container>
                    <div class="d-flex row justify-content-center">
                        <PlayerCard
                            v-for="user in users"
                            :key="user"
                            :name="user"
                        >
                        </PlayerCard>
                    </div>
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
    </div>
</template>

<script>
import Swal from "sweetalert2";
import PlayerCard from "../components/PlayerCard.vue";
export default {
    name: "GameRoom",
    props: ["gameId"],
    components: { PlayerCard },
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
        setSelect(value) {
            this.gameStarted = true;
            this.$socket.emit("player choice", this.name, value);
        },
        leave() {
            this.$socket.emit("leave");
            this.$store.commit("setName", "");
            this.$store.commit("setUsers", "");
            this.$router.push({ name: "Login" });
            this.$toasted.show("Success logout", {
                theme: "bubble",
                position: "top-right",
                duration: 2000,
            });
        },
    },
    sockets: {
        tie: function () {
            this.result = `A tie!`;
            Swal.fire({
                title: "A tie!",
                text: "No one wins!",
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            });
            this.gameStarted = false;
        },
        player1Win: function (choices) {
            this.result = `${choices[0]["user"]} wins!`;
            Swal.fire({
                title: `${choices[0]["user"]} wins!`,
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            });
            this.gameStarted = false;
        },
        player2Win: function (choices) {
            this.result = `${choices[1]["user"]} wins!`;
            Swal.fire({
                title: `${choices[1]["user"]} wins!`,
                timer: 2000,
                showConfirmButton: false,
                timerProgressBar: true,
            });
            this.gameStarted = false;
        },
    },
};
</script>

<style>
.janken:hover {
    cursor: pointer;
}
</style>