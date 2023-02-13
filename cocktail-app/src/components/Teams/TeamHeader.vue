<template>
  <header class="flex justify-between">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="!spotsRemaining"
        @click="$emit('add')"
      >
        Add Member ({{ spotsRemaining }} Spots Left)
      </button>
    </div>

    <div class="px-4">
      <h3 class="inline-flex items-center text-3xl relative">
        <img src="/smiley.png" alt="" class="mr-2" />
        {{ name }}
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -left-2 -top-0"
        >
          {{ spots }}
        </div>
      </h3>
    </div>
  </header>
</template>
<script setup>
defineProps({
  name: String,
  spots: Number,
  spotsRemaining: Number || null,
});
</script>
