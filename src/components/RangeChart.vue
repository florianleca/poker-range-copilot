<template>
  <div v-for="line in hands" :key="line">
      <span class="badge cards-hand"
            v-for="hand in line.join().split(' ')"
            v-bind:class="getMove(hand)"
            :key="hand">

          {{hand}}
      </span>
  </div>
  <div>
      <span class="badge text-bg-primary legend mx-1">Raise</span>
      <span class="badge text-bg-light legend mx-1">Fold</span>
  </div>
</template>

<script>

export default {
    name: "RangeChart",
    props: {
        position: {
            type: String
        },
        rfi: {
            type: Boolean
        }
    },
    data: function () {
        return {
            hands: [
                ["AA AKs AQs AJs ATs A9s A8s A7s A6s A5s A4s A3s A2s"],
                ["AKo KK KQs KJs KTs K9s K8s K7s K6s K5s K4s K3s K2s"],
                ["AQo KQo QQ QJs QTs Q9s Q8s Q7s Q6s Q5s Q4s Q3s Q2s"],
                ["AJo KJo QJo JJ JTs J9s J8s J7s J6s J5s J4s J3s J2s"],
                ["ATo KTo QTo JTo TT T9s T8s T7s T6s T5s T4s T3s T2s"],
                ["A9o K9o Q9o J9o T9o 99 98s 97s 96s 95s 94s 93s 92s"],
                ["A8o K8o Q8o J8o T8o 98o 88 87s 86s 85s 84s 83s 82s"],
                ["A7o K7o Q7o J7o T7o 97o 87o 77 76s 75s 74s 73s 72s"],
                ["A6o K6o Q6o J6o T6o 96o 86o 76o 66 65s 64s 63s 62s"],
                ["A5o K5o Q5o J5o T5o 95o 85o 75o 65o 55 54s 53s 52s"],
                ["A4o K4o Q4o J4o T4o 94o 84o 74o 64o 54o 44 43s 42s"],
                ["A3o K3o Q3o J3o T3o 93o 83o 73o 63o 53o 43o 33 32s"],
                ["A2o K2o Q2o J2o T2o 92o 82o 72o 62o 52o 42o 32o 22"]
            ],
            rangesData: require('/src/assets/ranges.json'),
        }
    },
    methods: {
        getMove: function(hand) {
            let data = this.rangesData[this.position]['RFI']
            if (data['Raise'].includes(hand)) {
                return 'text-bg-primary'
            }
            return 'text-bg-light'
        }
    }
}
</script>

<style scoped>
.cards-hand {
    height: 30px;
    width: 30px;
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
}
.legend {
    width: 60px;
}
</style>