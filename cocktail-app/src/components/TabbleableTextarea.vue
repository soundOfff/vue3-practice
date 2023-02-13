<script setup>
defineProps({
  modelValue: String,
});

let emit = defineEmits(["update:modelValue"]);

function update(e) {
  emit("update:modelValue", e.target.value);
}

function onTabPress(e) {
  let textarea = e.target;
  let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd;

  textarea.value = val.substring(0, start) + "\t" + val.substring(end);

  textarea.selectionStart = textarea.selectionEnd = start + 1;
}
</script>
<template>
  <textarea
    name=""
    id=""
    ref="textarea"
    cols="30"
    rows="10"
    @keydown.tab.prevent="onTabPress"
    @keyup="update"
    v-text="modelValue"
  ></textarea>
</template>
