<template>
  <section
    style="
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 40px;
    "
  >
    <h1>{{ state.name }}</h1>
    <QuizHeader></QuizHeader>
    <QuizQuestion></QuizQuestion>
    <QuizFooter></QuizFooter>
  </section>
</template>

<script setup>
import QuizHeader from "./QuizHeader.vue";
import QuizFooter from "./QuizFooter.vue";
import QuizQuestion from "./QuizQuestion.vue";
// import { provide } from "vue";

// let props = defineProps({ quiz: Object });

// provide("quiz", props.quiz);

import { state } from "@/stores/quizStore.js";
</script>
