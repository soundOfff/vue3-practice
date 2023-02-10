export default {
  template: `
    <form @submitEvent.prevent="add">
      <input v-model='newTodo' placeholder="Write the todo"></input>
      <button @click="add">Submit</button>  
    </form>
    
    `,

  data() {
    return {
      newTodo: "",
    };
  },

  methods: {
    add(name) {
      this.$emit("add", newTodo);
      this.newTodo = "";
    },
  },
};
