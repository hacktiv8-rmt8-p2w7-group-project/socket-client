<template>
    <div>
        <div class="m-2">
            <b-card
                :title="title"
                tag="article"
                style="min-width: 10em"
                class="mb-2"
            >
                <template #footer>
                    <p>{{ name }}</p>
                </template>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
        };
    },
    props: {
        name,
    },
    computed: {
        yourName() {
            return this.$store.state.name;
        },
    },
    methods: {
        checkName() {
            if (this.name === this.yourName) {
                this.title = "You";
            } else {
                this.title = "Opponent";
            }
        },
    },
    created() {
        this.checkName();
    },
};
</script>

<style>
</style>