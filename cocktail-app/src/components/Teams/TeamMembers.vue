<template>
  <div class="flex flex-col h-full w-full pt-20">
    <div
      class="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border h-auto border-gray-200"
    >
      <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">Team members</h2>
      </header>
      <div class="p-3">
        <div class="overflow-x-auto">
          <table class="table-auto w-full">
            <thead
              class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
            >
              <tr>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Name</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Email</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Status</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Country</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
              <TeamMember
                v-for="member in team"
                :name="member.name"
                :email="member.email"
                :country="member.country"
                :status="member.status"
              ></TeamMember>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TeamMember from "./TeamMember.vue";

defineProps({
  team: Array,
});
</script>
