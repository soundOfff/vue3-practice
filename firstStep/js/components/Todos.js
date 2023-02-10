import TodoList from "./TodoList";
import Form from "./Form";

export default {
  components: { TodoList },
  template: `
        <button @click=""></button>
        <TodoList title="KE" :todos="filters.completedTodos"></TodoList>
        <TodoList title="EK" :todos="filters.inProgress"></TodoList>
        <Form></Form>
        `,
  data() {
    return {
      todos: [
        {
          name: "Test 1",
          complete: true,
          id: 1,
          theme: "theme 1",
        },
        {
          name: "Test 2",
          complete: false,
          id: 2,
          theme: "theme 1",
        },
        {
          name: "Test 3",
          complete: false,
          id: 3,
          theme: "theme 1",
        },
      ],
    };
  },
  computed: {
    filters() {
      return {
        inProgress: this.todos.filter((todo) => !todo.complete),
        completedTodos: this.todos.filter((todo) => todo.complete),
      };
    },

    themes() {
      return new Set(this.themes.filter((a) => a.theme));
    },
  },

  // Method called from the child and ref with the event string
  methods: {
    add(name) {
      this.todos.push({
        name: name,
        completed: false,
        id: this.todos.lenght++,
      });
    },
  },
};
