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


const board = ref(gameState.value.board);
const playerSymbol = ref('X');

const markSquare = (i:number) => {
    const gameBoard = board.value.slice();
    gameBoard[i] = playerSymbol.value;
    board.value = gameBoard;
    playerSymbol.value === 'X' ? (playerSymbol.value = 'O') : (playerSymbol.value = 'X');
    console.log(gameBoard[i]);
    gameState.value.board[i] = playerSymbol.value;
    console.log(gameState.value.board);
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

</script>

<template>
    <div class="gameboard">
        <div class="square" v-for="(board, index) in gameState?.board" :board="board" :index="index" @click.once="markSquare(index)">
       <p v-if="gameState.board[index] === 'X'"> X </p>
       <p v-if="gameState.board[index] === 'O'"> O </p>
    </div>
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
.mark {
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
}
p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
}

</style>
