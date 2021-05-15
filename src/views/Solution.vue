<template>
    <div class="solution">
        <LinkMenu></LinkMenu>
        <div class="container" style="margin-top: 10px">
            <div class="panel-heading"><h2>Решения</h2></div>


            <router-link role="button" class="btn btn-secondary" style="float: right"
                          :to="{name: 'SolutionEdit', params: {id: 0}}">
            Добавить
        </router-link>

            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Пользователь</th>
                    <th>Задача</th>
                    <th>Ответ пользователя</th>
                    <th>Оценка</th>

                </tr>
                </thead>
                <tbody>

                <tr v-for="(item, index) in solution" :key="index">
                    <th>{{index + 1}}</th>
                    <td>{{item.id_user}} ({{user.find(us => us.id === item.id_user).login}})</td>
                    <td>{{item.id_task}}</td>
                    <td>{{item.answer_user}}</td>
                    <td>{{item.mark}}</td>
                    <td style="width: 20px"><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'SolutionEdit', params: {id: item.id}}">
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
        name: "Solution",

        methods: {
            async handleRemoveClick(e, id) {
                await this.removeSolution(id);
            },
            ...mapActions([
                'removeSolution'
            ])
        },
        components: {
            LinkMenu
        },

        computed: {
            ...mapState({
                solution: state => state.solution,
                user: state => state.user
            })
        },
    }
</script>

<style scoped>

</style>