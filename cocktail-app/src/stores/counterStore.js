// Buildin using Pinia

import { defineStore } from "pinia";

export let useCounterStore = defineStore("counter", {
  state() {
    return {
      count: 0,
    };
  },

  actions: {
    increment() {
      this.count++;
    },
  },

  getters: {
    remaining() {
      return 10 - this.count;
    },
  },
});
