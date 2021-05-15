<template>
    <div class="lesson">
        <LinkMenu></LinkMenu>
        <div class="container" style="margin-top: 10px">
            <div class="panel-heading" style="float: left"><h3>Список предметов</h3></div>

            <router-link role="button" class="btn btn-secondary" style="float: right"
                         :to="{name: 'lessonEdit', params: {id: 0}}">
                Добавить
            </router-link>

            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Предмет</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(item, index) in lesson" :key="index">
                    <th>{{index + 1}}</th>
                    <td>{{item.name}}</td>
                    <td style="width: 20px"><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'lessonEdit', params: {id: item.id}}">
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

    import {mapActions, mapState} from 'vuex';
    import LinkMenu from "./LinkMenu";

    export default {
        name: "Lesson",

        methods: {
            async handleRemoveClick(e, id) {
                await this.removeLesson(id);
            },
            ...mapActions([
                'removeLesson'
            ])
        },
        components: {
            LinkMenu
        },

        computed: {
            ...mapState({
                lesson: state => state.lesson
            })
        },

    }

</script>

<style>
    .panel-heading {
        float: left;
    }

</style>