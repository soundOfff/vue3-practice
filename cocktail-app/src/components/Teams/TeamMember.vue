<template>
  <tr>
    <td class="p-2 whitespace-nowrap">
      <div class="flex items-center">
        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
          <img
            class="rounded-full"
            :src="'https://i.pravatar.cc/40?u=' + email"
            width="40"
            height="40"
            alt="Alex Shatov"
          />
        </div>
        <div class="font-medium text-gray-800">{{ name }}</div>
      </div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="text-left">{{ email }}</div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="text-left font-medium text-green-500">{{ status }}</div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="text-lg text-center">{{ country }}</div>
    </td>
  </tr>
</template>

<script setup>
defineProps({
  name: String,
  email: String,
  status: String,
  country: String,
});
</script>
