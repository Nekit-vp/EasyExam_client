<template>
    <div class="solutionEdit">
        <div class="container">
            <div><h2>Редактор решений</h2></div>
            <div class="panel-body">
                <form @submit="handleSubmit">

                    <div class="form-group">
                        <label for="inputIdUser" style="float: left">ID пользователя</label>
                        <select class="form-control" id="inputIdUser" v-model="id_user">
                            <option v-for="top in userItem" :value="top.id">{{top.id}} ({{top.login}})</option>
                        </select>
                    </div>

                    <p></p>

                    <div class="form-group">
                        <label for="inputIdTask" style="float: left">ID задачи</label>
                        <select class="form-control" id="inputIdTask" v-model="id_task">
                            <option v-for="top in taskItem" :value="top.id">{{top.id}} ({{top.task_text}})</option>
                        </select>
                    </div>

                    <p></p>

                    <div class="form-group">
                        <label for="inputAnswerUser" style="float: left">Ответ пользователя</label>
                        <input type="text" class="form-control" id="inputAnswerUser" v-model="answer_user">
                    </div>

                    <p></p>

                    <div class="form-group">
                        <label for="inputMark" style="float: left">Оценка</label>
                        <input type="text" class="form-control" id="inputMark" v-model="mark">
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
        name: "SolutionEdit",

        data() {
            return {
                id: parseInt(this.$route.params.id),
                id_user: 0,
                id_task: 0,
                answer_user: "",
                mark: false
            };
        },

        created() {
            if (this.id !== 0 && this.solutionItem) {
                this.id_user = this.solutionItem.id_user;
                this.id_task = this.solutionItem.id_task;
                this.answer_user = this.solutionItem.answer_user;
                this.mark = this.solutionItem.mark
            }
        },

        methods:{
            async handleSubmit(e) {
                e.preventDefault();
                const item = {
                    id_user: this.id_user,
                    id_task: this.id_task,
                    answer_user: this.answer_user,
                    mark: this.mark
                };
                if (this.id !== 0) {
                    item.id = this.id;
                    await this.editSolution(item);
                } else {
                    await this.addSolution(item);
                }
                await this.$router.push({name: "Solution"});
            },
            ...mapActions([
                'editSolution',
                'addSolution'
            ])
        },

        computed: {
            ...mapState({
                taskItem: state => state.task,
                userItem: stage => stage.user
            }),
            solutionItem() {
                return this.id !== 0 ?
                    this.$store.state.solution.find(item => item.id === this.id) :
                    null;
            }
        }
    }
</script>

<style scoped>

</style>