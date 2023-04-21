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


const handleClick = (pName: string) => {
    emit('addPlayer', pName);
    name.value = "";
}

</script>

<template>
    <form @submit.prevent="handleClick(name)">
    <input v-model="name" type="text"/>
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