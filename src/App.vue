<template>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <div class="row">
                    <div class="col-3">
                        <options-buttons
                            :min-players="minPlayers"
                            :max-players="maxPlayers"
                            :nb-players="nbPlayers"
                            @player-added-or-removed="addOrRemovePlayer"
                            @button-moved="moveButton"/>
                    </div>
                    <div class="col-9 d-flex">
                        <other-player
                            v-for="player in nbPlayers-1"
                            :key="player"
                            :num-player="player+1"
                            :position="positionsData[nbPlayers][(player+buttonPosition)%nbPlayers]"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <main-player
                            :position="positionsData[nbPlayers][(buttonPosition)%nbPlayers]"
                            :username="username"/>
                    </div>
                    <div class="col-9">
                        <cards/>
                    </div>
                </div>

            </div>
            <div class="col-4">
                <range-chart :position="positionsData[nbPlayers][(buttonPosition)%nbPlayers]" :rfi="rfi"/>

            </div>

        </div>

    </div>


</template>

<script>
import OtherPlayer from "@/components/OtherPlayer.vue";
import MainPlayer from "@/components/MainPlayer.vue";
import Cards from "@/components/Cards.vue";
import OptionsButtons from "@/components/OptionsButtons.vue";
import RangeChart from "@/components/RangeChart.vue";

export default {
    name: 'App',
    components: {
        RangeChart,
        OptionsButtons,
        Cards,
        MainPlayer,
        OtherPlayer
    },
    data() {
        return {
            username: "Username",
            minPlayers: 3,
            maxPlayers: 6,
            nbPlayers: 6,
            positionsData: require('../src/assets/positions.json'),
            buttonPosition: 0,
            rfi: true
        }
    },
    methods: {
        addOrRemovePlayer: function (incr) {
            if (incr === 1 && this.nbPlayers < this.maxPlayers) {
                this.nbPlayers++;
            } else if (incr === -1 && this.nbPlayers > this.minPlayers) {
                this.nbPlayers--;
            }
        },
        moveButton: function (incr) {
            this.buttonPosition = (this.buttonPosition - incr) % this.nbPlayers;
            if (this.buttonPosition === -1) {
                this.buttonPosition = this.nbPlayers - 1;
            }
        }
    },
}
</script>

<style>

</style>
