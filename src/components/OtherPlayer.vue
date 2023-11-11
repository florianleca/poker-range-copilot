<template>
    <div class="card">
        <div class="card-body d-flex flex-column align-items-center">

            <span style="font-size: 3em" class="bi bi-person"></span>
            <h6 class="card-title">Player {{ numPlayer }}/{{ totalPlayers }}</h6>
            <span class="badge bg-secondary z-3">
                {{ position }}
                <span class="position-absolute top-50 start-100 text-warning translate-middle bi bi-circle-fill"
                      v-if="position==='BTN'"/>
            </span>

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

.bi-circle-fill {
    font-size: large;
}

</style>