<template>
  <div>
    <h2 style="margin-bottom: 30px">Quiz doing: {{ state.name }}</h2>
    <h3 style="margin-bottom: 20px">Available Quiz</h3>
    <ul
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <li><a href="">Quiz 1</a></li>
      <li
        @click="
          (e) => {
            state.name = 'Changed';
            e.preventDefault();
          }
        "
      >
        <a href="">Quiz 2</a>
      </li>
      <li><a href="">Quiz 3</a></li>
      <li><a href="">Quiz 4</a></li>
    </ul>
  </div>
</template>

<script setup>
import { state } from "@/stores/quizStore.js";

// import { inject } from "vue";

// let quiz = inject("quiz");
</script>
