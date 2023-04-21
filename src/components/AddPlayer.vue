<script setup lang="ts">

import { ref } from 'vue';
import { Player } from '../models/Player';
import { GameBoardState } from "../models/GameBoardState";
/*
const gameState = ref<GameBoardState>({
    players: [],
    gameActive: true,
    board: ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"],
    currentPlayer: new Player("", "X"), 
});*/
//const symbol = ref("");
const name = ref("");
//const players = ref(gameState.value.players);

//const players = ref<Player[]>(JSON.parse(localStorage.getItem("players") || "[]"));



const emit = defineEmits(["addPlayer"])
/*
const addPlayer = () => {
    emit('addPlayer', player.value, symbol.value);
    player.value = "";
    symbol.value = "";*/
    //players.value.push(new Player(player))
    //console.log(player.value);
   // console.log(players.value);
   /* if (gameState.value.players[0].symbol === 'X') {
        gameState.value.players[1].symbol === 'O';
    }*/
/*
    if (players.value[0].symbol === 'X') {
        symbol.value === 'O';
    }*/



//}

const handleClick = (name: string) => {
    emit('addPlayer', name);
}

</script>

<template>
    <form @submit.prevent="handleClick(name)">
    <input v-model="name" type="text"/>
   <!--- <input v-model="symbol" type="text"/> -->
    <button>+</button>
    </form>
</template>

<style scoped>

form {
    display: flex;
}

input {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 3px solid black;
}
button {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: black;
    color: white;
}

</style>