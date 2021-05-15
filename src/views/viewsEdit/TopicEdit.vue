<template>
    <div class="tackEdit">
        <div class="container">
            <div><h2>Редактор тем</h2></div>
            <div class="panel-body">
                <form @submit="handleSubmit">

                    <div class="form-group">
                        <label for="inputIdLesson" style="float: left">ID предмета</label>
                        <select class="form-control" id="inputIdLesson" v-model="id_lesson">
                            <option v-for="less in lesson" :value="less.id">{{less.id}} ({{less.name}})</option>
                        </select>
                    </div>

                    <p></p>

                    <div class="form-group">
                        <label for="inputNumberTask" style="float: left">Номер задания в ЕГЭ</label>
                        <input type="text" class="form-control" id="inputNumberTask" v-model="number_task">
                    </div>

                    <p></p>

                    <div class="form-group">
                        <label for="inputTheory" style="float: left">Краткая теория</label>
                        <input type="text" class="form-control" id="inputTheory" v-model="theory">
                    </div>

                    <p></p>

                    <div class="form-group">
                        <label for="inputFiles" style="float: left">Файлы по теории</label>
                        <input type="text" class="form-control" id="inputFiles" v-model="files">
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
        name: "TopicEdit",

        data() {
            return {
                id: parseInt(this.$route.params.id),
                id_lesson: 0,
                number_task: 0,
                theory: "",
                files: ""
            };
        },

        created() {
            if (this.id !== 0 && this.topicItem) {
                this.id_lesson = this.topicItem.id_lesson;
                this.number_task = this.topicItem.number_task;
                this.theory = this.topicItem.theory;
                this.files = this.topicItem.files
            }
        },

        methods:{
            async handleSubmit(e) {
                e.preventDefault();
                const item = {
                    id_lesson: this.id_lesson,
                    number_task: this.number_task,
                    theory: this.theory,
                    files: this.files
                };
                if (this.id !== 0) {
                    item.id = this.id;
                    await this.editTopic(item);
                } else {
                    await this.addTopic(item);
                }
                await this.$router.push({name: "Topic"});
            },
            ...mapActions([
                'addTopic',
                'editTopic'
            ])
        },

        computed: {
            ...mapState({
                lesson: state => state.lesson
            }),
            topicItem() {
                return this.id !== 0 ?
                    this.$store.state.topic.find(item => item.id === this.id) :
                    null;
            }
        }
    }
</script>

<style scoped>

</style>