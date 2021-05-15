<template>
    <div class="task">
        <LinkMenu></LinkMenu>
        <div class="container" style="margin-top: 10px">
            <div class="panel-heading"><h2>Банк задач</h2></div>

            <router-link role="button" class="btn btn-secondary" style="float: right"
                         :to="{name: 'TaskEdit', params: {id: 0}}">
                Добавить
            </router-link>

            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Тема</th>
                    <th>Задача</th>
                    <th>Ответ</th>
                    <th>Сложность</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(item, index) in task" :key="index">
                    <th>{{index + 1}}</th>
                    <td>{{item.id_topic}} ({{topic.find(top => top.id === item.id_topic).theory}})</td>
                    <td>{{item.task_text}}</td>
                    <td>{{item.answer}}</td>
                    <td>{{item.complexity}} %</td>
                    <td style="width: 20px"><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'TaskEdit', params: {id: item.id}}">
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
        name: "Task",

        methods: {
            async handleRemoveClick(e, id) {
                await this.removeTask(id);
            },
            ...mapActions([
                'removeTask'
            ])
        },
        components: {
            LinkMenu
        },

        computed: {
            ...mapState({
                task: state => state.task,
                topic: state => state.topic
            })
        },
    }
</script>

<style scoped>

</style>