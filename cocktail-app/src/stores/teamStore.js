import { defineStore } from "pinia";

export let useTeamStore = defineStore("team", {
  state: () => ({
    data: [],
  }),

  actions: {
    async init() {
      let data = await import("@/team.json");
      this.data = data.teams;
    },

    addMember(member, teamId) {
      let test = this.data.find((team) => team.id === teamId);

      console.log(test);
    },
  },

  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    },
  },
});
