import TodoList from "./TodoList";

export default {
    components: {
        TodoList
    },
    template: `
        <TodoList title="KE" :todos="filters.completedTodos"></TodoList>
        <TodoList title="EK" :todos="filters.inProgress"></TodoList>
        `,
        data() {
            return {
                todos: [
                    {
                        name: 'Test 1',
                        complete: true,
                        id: 1
                    },
                    {
                        name: 'Test 2',
                        complete: false,
                        id: 2
                    },
                    {
                        name: 'Test 3',
                        complete: false,
                        id: 3
                    }
                ]
            }
        },
        computed: {

            filters() {
                return {
                    inProgress: this.todos.filter(todo => !todo.complete),
                    completedTodos: this.todos.filter(todo => todo.complete)
                };
            }
        },
}