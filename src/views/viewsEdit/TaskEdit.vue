<template>
    <div class="taskEdit">
        <div class="container">
            <div><h2>Редактор заданий</h2></div>
            <div class="panel-body">
                <form @submit="handleSubmit">

                    <div class="form-group">
                        <label for="inputIdTopic" style="float: left">ID темы</label>
                        <select class="form-control" id="inputIdTopic" v-model="id_topic">
                            <option v-for="top in topicItem" :value="top.id">{{top.id}} ({{top.theory}})</option>
                        </select>
                    </div>

                    <p></p>

                    <div class="form-group">
                        <label for="inputTextTask" style="float: left">Текст задания</label>
                        <input type="text" class="form-control" id="inputTextTask" v-model="task_text">
                    </div>

                    <p></p>

                    <div class="form-group">
                        <label for="inputAnswer" style="float: left">Ответ</label>
                        <input type="text" class="form-control" id="inputAnswer" v-model="answer">
                    </div>

                    <p></p>

                    <div class="form-group">
                        <label for="inputComplexly" style="float: left">Сложность</label>
                        <input type="text" class="form-control" id="inputComplexly" v-model="complexity">
                    </div>


                    <p></p>

                    <button type="submit" class="btn btn-primary pull-right" style="float: left">Сохранить</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: "TaskEdit",

        data() {
            return {
                id: parseInt(this.$route.params.id),
                id_topic: 0,
                task_text: "",
                answer: "",
                complexity: 0
            };
        },

        created() {
            if (this.id !== 0 && this.taskItem) {
                this.id_topic = this.taskItem.id_topic;
                this.task_text = this.taskItem.task_text;
                this.answer = this.taskItem.answer;
                this.complexity = this.taskItem.complexity
            }
        },

        methods:{
            async handleSubmit(e) {
                e.preventDefault();
                const item = {
                    id_topic: this.id_topic,
                    task_text: this.task_text,
                    answer: this.answer,
                    complexity: this.complexity
                };
                if (this.id !== 0) {
                    item.id = this.id;
                    await this.editTask(item);
                } else {
                    await this.addTask(item);
                }
                await this.$router.push({name: "Task"});
            },
            ...mapActions([
                'addTask',
                'editTask'
            ])
        },

        computed: {
            ...mapState({
                topicItem: state => state.topic
            }),
            taskItem() {
                return this.id !== 0 ?
                    this.$store.state.task.find(item => item.id === this.id) :
                    null;
            }
        }
    }
</script>

<style scoped>

</style>