<template>
  <div class="w-full h-full">
    <section class="antialiased bg-gray-100 text-gray-600 h-full w-full px-4">
      <TeamHeader
        @add="showModal = !showModal"
        :name="teams.data[0].name"
        :spots="teams.data[0].spots"
        :spotsRemaining="4"
      />
      <TeamMembers :team="teams.data[0].members" />

      <Teleport to="body">
        <Modal :show="showModal" @close="showModal = false" />
      </Teleport>
    </section>
  </div>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import TeamHeader from "../components/Teams/TeamHeader.vue";
import TeamMembers from "../components/Teams/TeamMembers.vue";
import { useTeamStore } from "../stores/teamStore";
import { ref } from "vue";

let showModal = ref(false);

let teams = useTeamStore();
teams.init();
</script>
