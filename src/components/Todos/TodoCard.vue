<template>
    <div>
        <TodoCardShow
            v-if="isShowing"
            :todo="todo"
            @update="changeStateToUpdate"
            @delete="changeStateToDelete"
        />

        <TodoCardUpdate
            v-if="isUpdating"
            :todo="todo"
            @cancel="changeStateToShow"
        />

        <TodoCardDelete
            v-if="isDeleting"
            :todo="todo"
            @cancel="changeStateToShow"
            @afterDeleting="afterDeleting"
        />
    </div>
</template>

<script>
    import TodoCardShow from '@/components/Todos/TodoCardShow';
    import TodoCardUpdate from '@/components/Todos/TodoCardUpdate';
    import TodoCardDelete from '@/components/Todos/TodoCardDelete';

    export default {
        name: 'TodoCard',

        components: {
            TodoCardShow,
            TodoCardUpdate,
            TodoCardDelete,
        },

        props: {
            todo: {
                type: Object,
                default: () => ({}),
            },
        },

        data() {
            return {
            };
        },

        computed: {
            isShowing() {
                return this.todo.state === 'show';
            },

            isUpdating() {
                return this.todo.state === 'update';
            },

            isDeleting() {
                return this.todo.state === 'delete';
            },
        },

        methods: {
            changeStateToShow() {
                this.todo.state = 'show';
            },

            changeStateToUpdate() {
                this.todo.state = 'update';
            },

            changeStateToDelete() {
                this.todo.state = 'delete';
            },

            afterDeleting(todo) {
                this.$emit('afterDeleting', todo);
            },
        },
    };
</script>
