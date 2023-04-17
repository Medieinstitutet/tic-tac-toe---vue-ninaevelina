<script setup lang="ts">

import { ref } from 'vue';


const symbol = ref("X");
const player = ref("")


const emit = defineEmits(["addPlayer"])

const addPlayer = () => {
    emit('addPlayer', player.value);
    symbol.value = "X";
    player.value = "";
    console.log(player.value);

}

</script>

<template>
    <form @submit.prevent="addPlayer">
    <input v-model="player" type="text"/>
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