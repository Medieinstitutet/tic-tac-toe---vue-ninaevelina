<script setup lang="ts">
import { ref } from 'vue'
import { GameBoardState } from "../models/GameBoardState";
import { Player } from "../models/Player";



const gameState = ref<GameBoardState>({
    players: [],
    gameActive: true,
    board: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: new Player(0, "X", 0), 
});


</script>

<template>
    <div class="gameboard">
        <div class="square" v-for="(board, index) in gameState?.board" :board="board" :index="index"></div>
    </div>
  
</template>

<style scoped>

.gameboard {
  display: inline-block;
  width: 200px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
}
.square {
    background-color: #efff70;
    border: 1px solid black;
    padding: 0;
    text-align: center;
    height: 60px;
    width: 60px;
    float: left;
}
</style>
