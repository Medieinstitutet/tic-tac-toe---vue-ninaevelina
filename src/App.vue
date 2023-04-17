<script setup lang="ts">
import AddPlayer from './components/AddPlayer.vue';
import GameBoard from './components/GameBoard.vue';
</script>

<template>
 <main>
  <h1>Tic Tac Toe</h1>
  <div class="player-form">
  <!-- <AddPlayer></AddPlayer> -->
  </div>
  <div class="gamecontainer">
  <GameBoard></GameBoard>
  </div>
 </main>
</template>

<style scoped>
* { box-sizing: border-box;}
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  margin: 0;
  display: flex;
  place-items: center;
}
h1 {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  font-size: 6rem;
}
.player-form {
display: flex;
place-content: center;
margin-bottom: 20px;
}
.gamecontainer {
  display: flex;
  place-content: center;
}
</style>
