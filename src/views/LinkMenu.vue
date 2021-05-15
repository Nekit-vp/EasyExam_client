<template>
    <div id="nav" style="text-align: center">
        <router-link to="/lesson">Lessons</router-link> |
        <router-link to="/topic">Topics</router-link> |
        <router-link to="/task">Tasks</router-link> |
        <router-link to="/solution">Solutions</router-link> |
        <router-link to="/user">Users</router-link>
    </div>
</template>

<script>
    export default {
        name: "LinkMenu"
    }
</script>

<style scoped lang="scss">

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #443344;

            &.router-link-exact-active {
                color: orange;
            }
        }
    }

</style>