<template>
    <div>
        <div class="custom_center_screen">
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