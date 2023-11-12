<template>
    <div class="card">
        <div class="card-body d-flex flex-column align-items-center">

            <span class="profile-pic bi bi-person-circle"></span>
            <h6 class="card-title">Player 1</h6>
            <h6 class="card-title badge bg-primary">{{ username }}</h6>
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
    width: 14em;
}

.profile-pic {
    font-size: 3em
}

.bi-circle-fill {
    font-size: large;
}

.bg-primary {
    font-size: 1em;
}
</style>