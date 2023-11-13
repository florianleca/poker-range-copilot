<template>


    <options-buttons
        :min-players="minPlayers"
        :max-players="maxPlayers"
        :nb-players="nbPlayers"
        @player-added-or-removed="addOrRemovePlayer"
        @button-moved="moveButton"/>

    <div class="d-flex players">
        <other-player
                v-for="player in nbPlayers-1"
                :key="player"
                :num-player="player+1"
                :position="positionsData[nbPlayers][(player+buttonPosition)%nbPlayers]"/>
    </div>

    <div>
        <main-player
                :position="positionsData[nbPlayers][(buttonPosition)%nbPlayers]"
                :username="username"/>
        <cards/>
    </div>

</template>

<script>
import OtherPlayer from "@/components/OtherPlayer.vue";
import MainPlayer from "@/components/MainPlayer.vue";
import Cards from "@/components/Cards.vue";
import OptionsButtons from "@/components/OptionsButtons.vue";

export default {
    name: 'App',
    components: {
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
            buttonPosition: 0
        }
    },
    methods: {
        addOrRemovePlayer: function (incr) {
            if (incr ===1 && this.nbPlayers < this.maxPlayers) {
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
