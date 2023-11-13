<template>

    <div class="button-duo-horizontal">
        <options-buttons @player-added="addPlayer" @player-deleted="removePlayer" @button-moved="moveButton"/>
    </div>
    <br/>
    <div class="d-flex players">
        <other-player
                v-for="player in nbPlayers-1"
                :key="player"
                :num-player="player+1"
                :position="positionsData[nbPlayers][(player+buttonPosition)%nbPlayers]"/>
    </div>
    <br/>
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
            nbPlayers: 6,
            positionsData: require('../src/assets/positions.json'),
            buttonPosition: 0
        }
    },
    methods: {
        addPlayer: function () {
            if (this.nbPlayers < 10) {
                this.nbPlayers++;
            }
        },
        removePlayer: function () {
            if (this.nbPlayers > 3) {
                this.nbPlayers--;
            }
        },
        moveButton: function (incr) {
            console.log(this.buttonPosition)
            this.buttonPosition = (this.buttonPosition - incr) % this.nbPlayers;
            console.log(this.buttonPosition)
            if (this.buttonPosition === -1) {
                this.buttonPosition = this.nbPlayers - 1;
            }
        }
    },
}
</script>

<style>
.players {
    width: 70em;
}

.button-duo-horizontal {
    /*width: 70em;*/
    margin-bottom: 1em;
}
</style>
