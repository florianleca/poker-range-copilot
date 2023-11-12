<template>

    <div class="button-duo-horizontal">
        <add-delete-player @player-added="addPlayer" @player-deleted="removePlayer"/>
        <move-button @button-moved="moveButton"/>
    </div>
    <br/>
    <div class="d-flex players">
        <OtherPlayer
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
    </div>

</template>

<script>
import OtherPlayer from "@/components/OtherPlayer.vue";
import AddDeletePlayer from "@/components/AddDeletePlayer.vue";
import MoveButton from "@/components/MoveButton.vue";
import MainPlayer from "@/components/MainPlayer.vue";

export default {
    name: 'App',
    components: {
        MainPlayer,
        MoveButton,
        AddDeletePlayer,
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
