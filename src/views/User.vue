<template>
    <div class="user">
        <LinkMenu></LinkMenu>
        <div class="container" style="margin-top: 10px">
            <div class="panel-heading"><h2>Список пользователей</h2></div>

            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Логин</th>
                    <th>Пароль</th>
                    <th>Роль</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(item, index) in user" :key="index">
                    <th>{{index + 1}}</th>
                    <td>{{item.login}}</td>
                    <td>{{item.password}}</td>
                    <td>{{item.user_role}}</td>
                    <td style="width: 20px"><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'UserEdit', params: {id: item.id}}">
                        &#9998;
                    </router-link></td>
                    <td style="width: 20px"><button type="button" class="btn btn-sm btn-link" @click="handleRemoveClick($event, item.id)">
                        &#10006;
                    </button></td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";
    import LinkMenu from "./LinkMenu";

    export default {
        name: "User",

        methods: {
            async handleRemoveClick(e, id) {
                await this.removeUser(id);
            },
            ...mapActions([
                'removeUser'
            ])
        },
        components: {
            LinkMenu
        },

        computed: {
            ...mapState({
                user: state => state.user
            })
        },
    }
</script>

<style scoped>

</style>