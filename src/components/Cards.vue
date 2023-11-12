<template>
    <div class="d-flex">
        <button v-for="card in cards"
                v-bind:class="{active: card.isActive, disabled: nbChosenCards===2 && !card.isActive}"
                :key="card.name"
                type="button"
                @click="chooseCard(card)"
                class="btn card btn-outline-dark">
            {{ card.name }}
        </button>
    </div>
</template>


<script>
export default {
    name: "Cards",
    data() {
        return {
            nbChosenCards: 0,
            cards: [
                {
                    name: "2",
                    isActive: false
                },
                {
                    name: "3",
                    isActive: false
                },
                {
                    name: "4",
                    isActive: false
                },
                {
                    name: "5",
                    isActive: false
                },
                {
                    name: "6",
                    isActive: false
                },
                {
                    name: "7",
                    isActive: false
                },
                {
                    name: "8",
                    isActive: false
                },
                {
                    name: "9",
                    isActive: false
                },
                {
                    name: "T",
                    isActive: false
                },
                {
                    name: "J",
                    isActive: false
                },
                {
                    name: "Q",
                    isActive: false
                },
                {
                    name: "K",
                    isActive: false
                },
                {
                    name: "A",
                    isActive: false
                }

            ]
        }
    },
    methods: {
        chooseCard: function (card) {
            if (!card.isActive && this.nbChosenCards <2) {
                card.isActive = true;
                this.nbChosenCards++;
            } else if (card.isActive) {
                card.isActive = false;
                this.nbChosenCards--;
            }

        }
    }
}
</script>

<style scoped>
.card {
    width: 3em;
    height: 3em;
    justify-content: center;
}
</style>