<template>
    <div class="card">
        <div class="card-body d-flex flex-column align-items-center">

            <span style="font-size: 3em" class="bi bi-person"></span>
            <h6 class="card-title">Player {{numPlayer}}/{{totalPlayers}}</h6>
            <span class="badge bg-secondary">{{position}}</span>

        </div>

    </div>

</template>

<script>
export default {
    name: "OtherPlayer.vue",
    props: {
        numPlayer: {
            type: Number
        },
        totalPlayers: {
            type: Number
        },
        position: {
            type: String
        }
    }
}

</script>

<style scoped>
.card {
    width: 8em;
}

</style>