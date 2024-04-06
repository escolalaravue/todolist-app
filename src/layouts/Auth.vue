<template>
    <div class="w-screen h-screen flex items-center justify-center">
        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
            <RouterView />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Auth',

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
