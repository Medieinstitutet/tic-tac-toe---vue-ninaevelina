<script setup lang="ts">
import { ref } from 'vue'
import { GameBoardState } from "../models/GameBoardState";
import { Player } from "../models/Player";

const gameState = ref<GameBoardState>({
    players: [],
    gameActive: true,
    board: ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"],
    currentPlayer: new Player(0, "X", 0), 
});

const calculateWinner = () => {
    const board = gameState.value.board;
    // Check first row
    if (board[0] === board[1] && board[1] === board[2]) {
        console.log('first row');
        
    }
    if (board[3] === board[4] && board[4] === board[5]) {
        console.log('second row');
       
    }
    if (board[6] === board[7] && board[7] === board[8]) {
        console.log('third row');
       
    }
    if (board[0] === board[3] && board[3] === board[6]) {
        console.log('1st column');
        
    }
    if (board[1] === board[4] && board[4] === board[7]) {
        console.log('2nd column');
        
    }
    if (board[2] === board[5] && board[5] === board[8]) {
        console.log('3rd column');
        
    }
    if (board[0] === board[4] && board[4] === board[8]) {
        console.log('1st diag');
        
    }
    if (board[2] === board[4] && board[4] === board[6]) {
        console.log('2nd diag');
        console.log('winner is' + board[2]);
        console.log(playerSymbol.value);
        return playerSymbol.value;
        
        
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



// calcwinner //


/*


// check value for 0 matches i && 1+i == i+2
// check value for 3 matches i && 4+i == i+5
// check value for 6 matches i && 7+i == i+8
// check value for 0 matches i && 3+i == i+6
// check value for 1 matches i && 4+i == i+7
// check value for 2 matches i && 5+i == i+8
// check value for 0 matches i && 4+i == i+8
// check value for 2 matches i && 4+i == i+6






*/


/*

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];*/



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
