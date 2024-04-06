<template>
    <div />
</template>

<script>
    import Cookie from '@/service/cookie';

    export default {
        name: 'Logout',

        data() {
            return {
            };
        },

        beforeRouteEnter(to, from, next) {
            Cookie.deleteToken();

            next({ name: 'login' });
        },
    };
</script>
