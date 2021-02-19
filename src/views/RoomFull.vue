<template>
    <div class="custom_center_screen">
        <h6>Please wait a for the existing game to finish</h6>
        <b-button @click.prevent="goToLogin" variant="info"
            >Try login again</b-button
        >
    </div>
</template>

<script>
export default {
    methods: {
        goToLogin() {
            this.$router.push("/");
        },
    },
};
</script>

<style>
</style>