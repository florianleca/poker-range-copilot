<template>
    <div id="player-1" class="card m-1 overflow-hidden">
        <div class="card-body d-flex flex-column align-items-center">

            <span class="profile-pic bi bi-person-circle"></span>
            <h6 class="card-title">Player 1</h6>
            <h6 class="card-title badge bg-primary">{{ username }}</h6>
            <span class="badge bg-secondary z-3">
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
    name: "MainPlayer",
    props: {
        username: {
            type: String
        },
        position: {
            type: String
        }
    }
}
</script>

<style scoped>
.card {
    width: 12em;
    height: 12em;
}

.profile-pic {
    font-size: 3em
}

.bg-primary {
    font-size: 1em;
}
</style>