<template>
  <Transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div class="container flex justify-center mx-auto" v-if="show">
      <button
        class="px-6 py-2 text-white bg-blue-600 rounded shadow-xl"
        type="button"
      >
        open model
      </button>
      <div
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <div class="max-w-2xl p-6 bg-white">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Add a partner</h3>
            <button @click="$emit('close')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <div class="mt-4">
            <form action="">
              <div class="mb-5">
                <label for="name" class="block font-bold text-gray-600"
                  >Name</label
                >
                <input
                  type="text"
                  name="name"
                  class="w-full p-2 border border-gray-300 rounded-l shadow focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter you name"
                  v-model="name"
                />
              </div>
              <div class="mb-5">
                <label for="email" class="block font-bold text-gray-600"
                  >Email</label
                >
                <input
                  type="text"
                  name="email"
                  class="w-full p-2 border border-gray-300 rounded-l shadow"
                  placeholder="Enter you Email"
                  v-model="email"
                />
              </div>
              <div class="mb-5">
                <label for="name" class="block font-bold text-gray-600"
                  >Country</label
                >
                <input
                  type="text"
                  name="name"
                  class="w-full p-2 border border-gray-300 rounded-l shadow focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your country"
                  v-model="country"
                />
              </div>
              <button
                type="submit"
                class="block w-full p-3 font-bold text-black bg-blue-500 rounded-lg"
                @click.prevent="addMemberAndClear()"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";
import { useTeamStore } from "../stores/teamStore";
defineProps({
  show: Boolean,
});

const addMemberAndClear = () => {
  alert("Adding data");
  useTeamStore.addMember({ name, country, email, status }, 1);
  name.value = "";
  email.value = "";
  country.value = "";
};

let name = ref("");
let email = ref("");
let country = ref("");
let status = ref("Something");
</script>
