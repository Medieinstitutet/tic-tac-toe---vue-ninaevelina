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

/*
const symbol = ref("X");

const emit = defineEmits(["addPlayer"])

const addPlayer = () => {
    emit('addPlayer', symbol.value);
    symbol.value = "X";
}
*/
// Winning combinations connected to array index

// Add two players - X and O

// No more draws when a winning combination is set

// Fn for starting new round

const board = ref(gameState.value.board);
const playerSymbol = ref('X');

const markSquare = (i:number) => {
    const gameBoard = board.value.slice();
    gameBoard[i] = playerSymbol.value;
    board.value = gameBoard;
    playerSymbol.value === 'X' ? (playerSymbol.value = 'O') : (playerSymbol.value = 'X');
    console.log(gameBoard[i]);
   // playerSymbol.value = "X";
}


</script>

<template>
    <div class="gameboard">
        <div class="square" v-for="(board, index) in gameState?.board" :board="board" :index="index">
        <button @click.once="markSquare(index)" class="mark"></button>
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

</style>
