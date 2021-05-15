import Vue from 'vue'
import Vuex from 'vuex'
import Api from "../api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lesson: [],
        topic: [],
        task: [],
        solution: [],
        user: []
    },
    mutations: {
        'SET_LESSON'(state, lesson) {
            state.lesson = lesson;
        },
        'SET_TOPIC'(state, topic) {
            state.topic = topic;
        },
        'SET_TASK'(state, task) {
            state.task = task;
        },
        'SET_SOLUTION'(state, solution) {
            state.solution = solution;
        },
        'SET_USER'(state, user){
            state.user = user;
        },


        'ADD_LESSON'(state, item) {
            state.lesson.push(item);
        },
        'ADD_TOPIC'(state, item) {
            state.topic.push(item);
        },
        'ADD_TASK'(state, item) {
            state.task.push(item);
        },
        'ADD_SOLUTION'(state, item) {
            state.solution.push(item);
        },
        'ADD_USER'(state, item) {
            state.user.push(item);
        },



        'EDIT_LESSON'(state, lessonItem) {
            const item = state.lesson.find(item => item.id === lessonItem.id);
            Object.assign(item, lessonItem);
        },
        'EDIT_TOPIC'(state, topicItem) {
            const item = state.topic.find(item => item.id === topicItem.id);
            Object.assign(item, topicItem);
        },
        'EDIT_TASK'(state, taskItem) {
            const item = state.task.find(item => item.id === taskItem.id);
            Object.assign(item, taskItem);
        },
        'EDIT_SOLUTION'(state, solutionItem) {
            const item = state.solution.find(item => item.id === solutionItem.id);
            Object.assign(item, solutionItem);
        },
        'EDIT_USER'(state, userItem) {
            const item = state.user.find(item => item.id === userItem.id);
            Object.assign(item, userItem);
        },


        'REMOVE_LESSON'(state, lessonItem) {
            const index = state.lesson.findIndex(item => item.id === lessonItem.id);
            state.lesson.splice(index, 1);
        },
        'REMOVE_TOPIC'(state, topicItem) {
            const index = state.topic.findIndex(item => item.id === topicItem.id);
            state.topic.splice(index, 1);
        },
        'REMOVE_TASK'(state, taskItem) {
            const index = state.task.findIndex(item => item.id === taskItem.id);
            state.task.splice(index, 1);
        },
        'REMOVE_SOLUTION'(state, solutionItem) {
            const index = state.solution.findIndex(item => item.id === solutionItem.id);
            state.solution.splice(index, 1);
        },
        'REMOVE_USER'(state, userItem) {
            const index = state.user.findIndex(item => item.id === userItem.id);
            state.user.splice(index, 1);
        },



    },
    actions: {

        async initialize(context) {

            const responseLesson = await Api.lesson.getAll();
            context.commit('SET_LESSON', responseLesson.data);

            const responseTopic = await Api.topic.getAll();
            context.commit('SET_TOPIC', responseTopic.data);

            const responseTask = await Api.task.getAll();
            context.commit('SET_TASK', responseTask.data);

            const responseSolution = await Api.solution.getAll();
            context.commit('SET_SOLUTION', responseSolution.data);

            const responseUser = await Api.user.getAll();
            context.commit('SET_USER', responseUser.data);
        },

        async addLesson(context, item) {
            const response = await Api.lesson.add(item);
            context.commit('ADD_LESSON', response.data );
        },
        async addTopic(context, item) {
            const response = await Api.topic.add(item);
            context.commit('ADD_TOPIC', response.data );
        },
        async addTask(context, item) {
            const response = await Api.task.add(item);
            context.commit('ADD_TASK', response.data );
        },
        async addSolution(context, item) {
            const response = await Api.solution.add(item);
            context.commit('ADD_SOLUTION', response.data );
        },
        async addUser(context, item) {
            const response = await Api.user.add(item);
            context.commit('ADD_USER', response.data );
        },


        async editLesson(context, item) {
                const response = await Api.lesson.edit(item.id, item);
                context.commit('EDIT_LESSON', response.data );
        },
        async editTopic(context, item) {
            const response = await Api.topic.edit(item.id, item);
            context.commit('EDIT_TOPIC', response.data );
        },
        async editTask(context, item) {
            const response = await Api.task.edit(item.id, item);
            context.commit('EDIT_TASK', response.data );
        },
        async editSolution(context, item) {
            const response = await Api.solution.edit(item.id, item);
            context.commit('EDIT_SOLUTION', response.data );
        },
        async editUser(context, item) {
            const response = await Api.user.edit(item.id, item);
            context.commit('EDIT_USER', response.data );
        },


        async removeLesson(context, id) {
                const response = await Api.lesson.delete(id);
                context.commit('REMOVE_LESSON', response.data );
        },
        async removeTopic(context, id) {
            const response = await Api.topic.delete(id);
            context.commit('REMOVE_TOPIC', response.data );
        },
        async removeTask(context, id) {
            const response = await Api.task.delete(id);
            context.commit('REMOVE_TASK', response.data );
        },
        async removeSolution(context, id) {
            const response = await Api.solution.delete(id);
            context.commit('REMOVE_SOLUTION', response.data );
        },
        async removeUser(context, id) {
            const response = await Api.user.delete(id);
            context.commit('REMOVE_USER', response.data );
        },




    },
    modules: {}
})
