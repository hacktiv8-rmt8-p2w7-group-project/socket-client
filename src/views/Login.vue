<template>
    <div>
        <div class="custom_center_screen">
            <b-card
                title="Janken"
                style="max-width: 20rem"
                class="mb-2 mx-auto"
            >
                <b-text>Input your name</b-text>
                <b-form @submit.prevent="login">
                    <b-form-input
                        class="mb-3"
                        v-model="name"
                        placeholder="Enter your name"
                        required
                    ></b-form-input>
                    <b-button type="submit" variant="primary">Play!</b-button>
                </b-form>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            names: [],
        };
    },
    methods: {
        login() {
            this.$socket.emit(`login`, this.name);
        },
    },
};
</script>

<style>
</style>