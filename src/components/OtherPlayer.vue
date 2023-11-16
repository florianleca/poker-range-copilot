<template>
    <div :id="'player-' + numPlayer" class="card my-1 mx-3 overflow-hidden">
        <div class="card-body d-flex flex-column align-items-center">

            <span class="bi bi-person"></span>
            <h6 class="card-title" style="font-size: 14px">Player {{ numPlayer }}</h6>
            <span class="badge bg-secondary">
                {{ position }}
                <span class="position-absolute top-50 start-100 text-secondary translate-middle bi bi-circle-fill"
                      v-if="position==='BTN'"/>
                <span class="position-absolute top-50 start-0 text-secondary translate-middle bi bi-circle-fill"
                      v-if="position==='SB'"/>
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
    width: 6em;
    height: 9em;
}

.bi-person {
    font-size: 3em
}

</style>