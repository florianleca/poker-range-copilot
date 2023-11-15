<template>
    <div class="d-flex flex-column">
        <h5 class="h5">Starting Hand:</h5>

        <div class="btn-group m-1" role="group">

            <button v-for="card in cards"
                    v-bind:class="{active: card.timesChosen>0, disabled: nbChosenCards===2 && card.timesChosen===0}"
                    :key="card.name"
                    type="button"
                    @click="chooseCard(card)"
                    class="btn btn-outline-primary position-relative my-1">
                {{ card.name }}
                <span class="position-absolute top-0 start-100 text-danger h2 translate-middle bi bi-check-all z-3"
                      v-if="card.timesChosen===2"/>
<!--                <span class="position-absolute top-0 start-100 text-danger h2 translate-middle bi bi-check z-3"-->
<!--                      v-if="card.timesChosen===1"/>-->
            </button>
        </div>
        <div class="btn-group m-1" role="group">
            <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off"
            v-bind:checked="pocketPair">
            <label class="btn btn-outline-dark" for="vbtn-radio1">Off-suit</label>
            <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off"
                   v-bind:disabled="pocketPair">
            <label class="btn btn-outline-dark" for="vbtn-radio2">Suited</label>
        </div>
    </div>
</template>


<script>
export default {
    name: "Cards",
    data() {
        return {
            pocketPair: false,
            nbChosenCards: 0,
            cards: [
                {
                    name: "2",
                    timesChosen: 0
                },
                {
                    name: "3",
                    timesChosen: 0
                },
                {
                    name: "4",
                    timesChosen: 0
                },
                {
                    name: "5",
                    timesChosen: 0
                },
                {
                    name: "6",
                    timesChosen: 0
                },
                {
                    name: "7",
                    timesChosen: 0
                },
                {
                    name: "8",
                    timesChosen: 0
                },
                {
                    name: "9",
                    timesChosen: 0
                },
                {
                    name: "T",
                    timesChosen: 0
                },
                {
                    name: "J",
                    timesChosen: 0
                },
                {
                    name: "Q",
                    timesChosen: 0
                },
                {
                    name: "K",
                    timesChosen: 0
                },
                {
                    name: "A",
                    timesChosen: 0
                }

            ]
        }
    },
    methods: {
        chooseCard: function (card) {
            if (card.timesChosen < 2 && this.nbChosenCards < 2) {
                card.timesChosen++;
                this.nbChosenCards++;
            } else if (card.timesChosen < 2 && this.nbChosenCards === 2) {
                card.timesChosen--;
                this.nbChosenCards--;
            } else if (card.timesChosen === 2) {
                card.timesChosen = 0;
                this.nbChosenCards = 0;
                this.pocketPair = false;
            }
            if (card.timesChosen === 2) {
                this.pocketPair = true;
            }

        }
    }

}
</script>

<style scoped>
.btn {
    font-size: 20px
}
</style>