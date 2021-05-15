<template>
    <div class="lessonEdit">
        <div class="container">
            <div><h2>Редактор предмета</h2></div>
            <div class="panel-body">
                <form @submit="handleSubmit">

                    <div class="form-group">
                        <label for="inputLesson" style="float: left">Название предмета</label>
                        <input type="text" class="form-control" id="inputLesson" v-model="name">
                    </div>

                    <p></p>

                    <button type="submit" class="btn btn-primary pull-right" style="float: left">Сохранить</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "LessonEdit",

        data() {
            return {
                id: parseInt(this.$route.params.id),
                name: ""
            };
        },

        created() {
            if (this.id !== 0 && this.lessonItem) {

                this.name = this.lessonItem.name;
            }
        },

        methods: {
            async   handleSubmit(e) {
                e.preventDefault();
                const item = {
                    name: this.name,
                };
                if (this.id !== 0) {
                    item.id = this.id;
                    await this.editLesson(item);
                } else {
                    await this.addLesson(item);
                }
                await this.$router.push({name: "lesson"});
            },
            ...mapActions([
                'addLesson',
                'editLesson'
            ])
        },
        computed: {
            lessonItem() {
                return this.id !== 0 ?
                    this.$store.state.lesson.find(item => item.id === this.id) :
                    null;
            }
        }

    }
</script>

<style scoped>

</style>