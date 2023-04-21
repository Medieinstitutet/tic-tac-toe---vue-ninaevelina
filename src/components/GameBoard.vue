<script setup lang="ts">
import { ref } from 'vue'
import { GameBoardState } from "../models/GameBoardState";
import { Player } from "../models/Player";
import AddPlayer from './AddPlayer.vue';

const gameState = ref<GameBoardState>({
    players: [],
    gameActive: true,
    board: ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"],
    currentPlayer: "X",
    drawCount: 0,
    winner: {name: "", symbol: ""},
    isDraw: false,
});

const players = ref(gameState.value.players);


const submitPlayer = (player: string) => {
    let symbol = 'X';

    if (gameState.value.players.length > 0) {
        symbol = 'O';
    }

    gameState.value.players.push((new Player(player, symbol)));
    console.log(gameState.value.players);


}


const startGame = () => {
    if (gameState.value.players.length === 2) {
        gameState.value.gameActive = true;
    }
}

const endGame = () => {
    gameState.value.gameActive = false;
    //Kolla draw?
    // Kolla winner

   if (gameState.value.currentPlayer === 'X') {
    gameState.value.winner.name = gameState.value.players[1].name;
    gameState.value.winner.symbol = gameState.value.players[1].symbol;
   } else if (gameState.value.currentPlayer === 'O'){
    gameState.value.winner.name = gameState.value.players[0].name;
    gameState.value.winner.symbol = gameState.value.players[0].symbol;

   }
   console.log(gameState.value);
}

const calculateWinningCombos = () => {
    const board = gameState.value.board;
    if (board[0] === board[1] && board[1] === board[2]) {
     endGame();
        
    }
    if (board[3] === board[4] && board[4] === board[5]) {
        endGame();
       
    }
    if (board[6] === board[7] && board[7] === board[8]) {
        endGame();
       
    }
    if (board[0] === board[3] && board[3] === board[6]) {
        endGame();
        
    }
    if (board[1] === board[4] && board[4] === board[7]) {
        
        endGame();
    }
    if (board[2] === board[5] && board[5] === board[8]) {
        endGame();
        
    }
    if (board[0] === board[4] && board[4] === board[8]) {
        endGame();
        
    }
    if (board[2] === board[4] && board[4] === board[6]) {
        endGame();
    }

}


const markSquare = (i:number) => {
  
    gameState.value.board[i] = gameState.value.currentPlayer;
    if (gameState.value.currentPlayer === 'X') {
        gameState.value.currentPlayer = 'O'
    }
    else if (gameState.value.currentPlayer === 'O') {
        gameState.value.currentPlayer = 'X'
    }

    console.log(gameState.value);   
    calculateWinningCombos();
}

const newGame = () => {
    window.location.reload();
}


</script>

<template>
    <div class="playerform">
    <AddPlayer @add-player="submitPlayer"></AddPlayer>
    </div>
    <div class="gameboard" v-if="gameState.gameActive === true">
        <div class="square" v-for="(board, index) in gameState.board" @click.once="markSquare(index)">
       <p v-if="gameState.board[index] === 'X'"> X </p>
       <p v-if="gameState.board[index] === 'O'"> O </p>
    </div>
    </div>
    <div class="gameover" v-if="gameState.gameActive === false">
        <p>Game over</p>
        <p v-if="gameState.winner.name !== '' ">The winner is {{ gameState.winner.name }} a.k.a {{ gameState.winner.symbol }}</p>
        <button @click="newGame">Play again</button>
    </div>

    
  
</template>

<style scoped>

.playerform {
    display: inline-block;
    margin-right: 20px;
    justify-content: center;
    place-content: center;
}
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
