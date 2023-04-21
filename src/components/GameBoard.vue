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
});

const players = ref(gameState.value.players);
/*
function setToLS(players: Player[]) {
    localStorage.setItem("players", JSON.stringify(players));
}*/

const submitPlayer = (player: string) => {
   // players.value.push(new Player(player, symbol));
    //setToLS(gameState.value.players);
    let symbol = 'X';

    if (gameState.value.players.length > 0) {
        symbol = 'O';
    }

    gameState.value.players.push((new Player(player, symbol)));
    console.log(gameState.value.players);
/*
    if (gameState.value.players.length === 1) {
        gameState.value.players.push(new Player(player, 'O'));
    }*/
/*
    if (gameState.value.players.length === 1 && gameState.value.players[0].symbol === 'X') {
       gameState.value.players.push((new Player(player, '0')));
       gameState.value.players.push(new Player(player, symbol));
       console.log(gameState.value.players);
       //gameState.value.players[1].symb === 'O';
    }
*/
   //console.log(gameState.value.players);
/*
    if (gameState.value.players[0].symbol === 'X') {
        gameState.value.players[1].symbol === 'O';
    };*/
    //console.log(players);
   // gameState.value.players.push(new Player(player, symbol));
    //console.log(gameState.value.players);


}
/*
const choosePlayer = () => {
    const player = gameState.value.currentPlayer;
    console.log(player);
}*/

const startGame = () => {
    if (gameState.value.players.length === 2) {
        gameState.value.gameActive = true;
    }
}

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

//const board = ref(gameState.value.board);
//const playerSymbol = ref(gameState.value.players);


const markSquare = (i:number) => {
   /* const gameBoard = board.value.slice();
    gameBoard[i] = playerSymbol.value;
    board.value = gameBoard;
    playerSymbol.value === 'X' ? (playerSymbol.value = 'O') : (playerSymbol.value = 'X');
    console.log(gameState.value.currentPlayer);
    gameState.value.board[i] = playerSymbol.value;
    calculateWinner();*/
    //const gameBoard = gameState.value.board.slice();
    //gameState.value.players[i].symbol
    //const playerSymbol = gameState.value.players[i].symbol;
    gameState.value.board[i] = gameState.value.currentPlayer;
    if (gameState.value.currentPlayer === 'X') {
        gameState.value.currentPlayer = 'O'
    }
    else if (gameState.value.currentPlayer === 'O') {
        gameState.value.currentPlayer = 'X'
    }

   
    //gameState.value.players[i].symbol;
    console.log(gameState.value);

    
    //gameBoard = players.value[i]
    //const gameBoard = board.value.slice();
    //console.log(gameBoard);
    
    //board.value = gameBoard;
    //console.log(gameState.value.players[i]);

   
    //gameState.value.board[i] = playerSymbol[i];
    //console.log(gameBoard);
    //gameState.value.players[i].symbol === 'X' ? (playerSymbol.symbol = 'O') : (playerSymbol.symbol = 'X');
    //console.log(playerSymbol[i]);
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
