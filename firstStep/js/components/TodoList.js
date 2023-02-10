export default {
    template: `
    <section v-show="todos.length">
    <h1 class="font-bold text-lg mx-auto">{{ title }}</h1>
    <ul class="mx-auto">
        <li v-for="todo in todos" 
            :key="todo.id">
            <label for="todo">
                {{todo.name}}
            </label>
            <input type="checkbox" name="todo" id="todo" class="mx-4" v-model='todo.complete'/>
        </li>
    </ul>
    </section>
    `,
    props: {
        todos: Array,
        title: String,
    }
}