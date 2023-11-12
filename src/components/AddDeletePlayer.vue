<template>
    <div class="btn-group" role="group">
        <button type="button" @click="removePlayer" class="btn btn-outline-secondary"><span class="bi bi-person-dash"> Remove Player</span>
        </button>
        <button type="button" @click="addPlayer" class="btn btn-outline-secondary"><span class="bi bi-person-plus"> Add Player</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "AddDeletePlayer",
    methods: {
        addPlayer: function () {
            this.$emit("player-added")
        },
        removePlayer: function () {
            this.$emit("player-deleted")
        },
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