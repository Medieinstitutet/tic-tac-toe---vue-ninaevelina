<script setup lang="ts">
import { ref } from 'vue'
import { GameBoardState } from "../models/GameBoardState";
import { Player } from "../models/Player";

const gameState = ref<GameBoardState>({
    players: [],
    gameActive: true,
    board: ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"],
    currentPlayer: new Player("", "X", 0), 
});

const calculateWinner = () => {
    const board = gameState.value.board;
    if (board[0] === board[1] && board[1] === board[2]) {
        gameState.value.gameActive = false;
        
    }
    if (board[3] === board[4] && board[4] === board[5]) {
        gameState.value.gameActive = false;
       
    }
    if (board[6] === board[7] && board[7] === board[8]) {
        gameState.value.gameActive = false;
       
    }
    if (board[0] === board[3] && board[3] === board[6]) {
        gameState.value.gameActive = false;
        
    }
    if (board[1] === board[4] && board[4] === board[7]) {
        gameState.value.gameActive = false;
        
    }
    if (board[2] === board[5] && board[5] === board[8]) {
        gameState.value.gameActive = false;
        
    }
    if (board[0] === board[4] && board[4] === board[8]) {
        gameState.value.gameActive = false;
        
    }
    if (board[2] === board[4] && board[4] === board[6]) {
        gameState.value.gameActive = false;
    }

}

const board = ref(gameState.value.board);
const playerSymbol = ref('X');

const markSquare = (i:number) => {
    const gameBoard = board.value.slice();
    gameBoard[i] = playerSymbol.value;
    board.value = gameBoard;
    playerSymbol.value === 'X' ? (playerSymbol.value = 'O') : (playerSymbol.value = 'X');
    console.log(gameBoard[i]);
    gameState.value.board[i] = playerSymbol.value;
    calculateWinner();
    console.log(gameState.value.board);
}

const newGame = () => {
    window.location.reload();
}


</script>

<template>
    <div class="gameboard">
        <div class="square" v-for="(board, index) in gameState?.board" :board="board" :index="index" @click.once="markSquare(index)" v-if="gameState.gameActive === true">
       <p v-if="gameState.board[index] === 'X'"> X </p>
       <p v-if="gameState.board[index] === 'O'"> O </p>
    </div>
    <div class="gameover">
        <p v-if="gameState.gameActive === false">Game over</p>
        <button v-if="gameState.gameActive === false" @click="newGame">Play again</button>
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
p {
    font-weight: 700;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.gameover {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
}
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  background-color: black;
  cursor: pointer;
  transition: border-color 0.25s;
  color: #efff70;
}

</style>
