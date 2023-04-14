<script setup lang="ts">

import { ref } from 'vue';


const symbol = ref("X");

const emit = defineEmits(["addPlayer"])

const addPlayer = () => {
    emit('addPlayer', symbol.value);
    symbol.value = "";
}

</script>

<template>
    <form @submit.prevent="addPlayer">
    <input v-model="symbol" type="text"/>
    <button>+</button>
    </form>
</template>