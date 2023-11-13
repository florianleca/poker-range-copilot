<template>
    <div :id="'player-' + numPlayer" class="card m-1">
        <div class="card-body d-flex flex-column align-items-center">

            <span class="bi bi-person"></span>
            <h6 class="card-title">Player {{ numPlayer }}</h6>
            <span class="badge bg-secondary z-3">
                {{ position }}
                <span class="position-absolute top-25 start-100 text-warning translate-middle bi bi-circle-fill"
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
        position: {
            type: String
        }
    }
}

</script>

<style scoped>

.card {
    width: 7em;
}

.bi-person {
    font-size: 3em
}

.bi-circle-fill {
    font-size: large;
}

</style>