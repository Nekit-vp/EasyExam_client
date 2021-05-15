<template>

    <div class="topic">
        <LinkMenu></LinkMenu>
        <div class="container" style="margin-top: 10px">
            <div class="panel-heading"><h2>Список тем</h2></div>

            <router-link role="button" class="btn btn-secondary" style="float: right"
                         :to="{name: 'TopicEdit', params: {id: 0}}">
                Добавить
            </router-link>

            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Теория</th>
                    <th>Номер задания в Егэ</th>
                    <th>Файлы</th>
                    <th>Предмет</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(item, index) in topic" :key="index">
                    <th>{{index + 1}}</th>
                    <td>{{item.theory}}</td>
                    <td>{{item.number_task}}</td>
                    <td>{{item.files}}</td>
                    <td>{{lesson.find(les => les.id === item.id_lesson).name}} (id = {{item.id_lesson}})</td>
                    <td style="width: 20px"><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'TopicEdit', params: {id: item.id}}">
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
        name: "Topic",

        methods: {
            async handleRemoveClick(e, id) {
                console.log(this.topic)
                await this.removeTopic(id);
            },
            ...mapActions([
                'removeTopic'
            ])
        },
        components: {
            LinkMenu
        },

        computed: {
            ...mapState({
                topic: state => state.topic,
                lesson: state => state.lesson
            })
        },
    }
</script>

<style scoped>

</style>