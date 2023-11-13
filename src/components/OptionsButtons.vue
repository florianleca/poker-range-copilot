<template>
    <div class="btn-group-vertical m-1" role="group">

        <button id="add-player-btn"
                type="button"
                @click="addOrRemovePlayer(+1)"
                class="btn btn-secondary"
                v-bind:disabled="nbPlayers===maxPlayers">
            <span class="bi bi-person-plus"> Add Player</span>
        </button>

        <button id="remove-player-btn"
                type="button"
                @click="addOrRemovePlayer(-1)"
                class="btn btn-secondary"
                v-bind:disabled="nbPlayers===minPlayers">
            <span class="bi bi-person-dash"> Remove Player</span>
        </button>


        <button @click="moveButton(+1)" type="button" class="btn btn-secondary">
            <span class="bi bi-arrow-right-square-fill"> Move Button CW</span>
        </button>

        <button @click="moveButton(-1)" type="button" class="btn btn-secondary">
            <span class="bi bi-arrow-left-square-fill"> Move Button CCW</span>
        </button>

    </div>
</template>

<script>
export default {
    name: "OptionsButtons",
    props: {
        minPlayers: {
            type: Number
        },
        maxPlayers: {
            type: Number
        },
        nbPlayers: {
            type: Number
        }
    },
    methods: {
        addOrRemovePlayer: function (incr) {
            this.$emit("player-added-or-removed", incr)
        },
        moveButton: function (incr) {
            this.$emit("button-moved", incr)
        }
    }
}
</script>

<style scoped>
.btn-group-vertical {
    width: 14em;
    height: 9em;
}
</style>