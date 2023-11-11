<template>
    <div class="btn-group" role="group">
        <button @click="moveButton(-1)" type="button" class="btn btn-outline-secondary">
            <span class="bi bi-arrow-left-square-fill"> Move Button Left</span>
        </button>
        <button @click="moveButton(+1)" type="button" class="btn btn-outline-secondary">
            Move Button Right <span class="bi bi-arrow-right-square-fill"></span>
        </button>
    </div>
</template>

<script>
export default {
    name: "MoveButton",
    methods: {
        moveButton: function (incr) {
            this.$emit("button-moved", incr)
        }
    }
}
</script>

<style scoped>
.btn {
    width: 15em;
}
.btn-group {
    margin-right: 2em;
}
</style>