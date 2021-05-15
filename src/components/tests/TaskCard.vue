<template>
  <div>


    <div class="topic-card mx-lg-5 p-1" v-for="(item, index) in taskItems" :key="index">

      <b-card bg-variant="secondary" text-variant="white">
        <b-card-title>Задача № {{ item.id }}</b-card-title>
        <b-card-text>{{ item.task_text }}</b-card-text>
        <input class="input-group-text" type="text" id="answer">

        <br>
        <b-button href="#" variant="light">Проверить</b-button>
      </b-card>

    </div>

  </div>
</template>

<script>
export default {
  name: "TaskCard",

  data() {
    return {
      id: parseInt(this.$route.params.id)
    };
  },


  computed: {
    taskItems() {
      return this.$store.state.task.filter(item => item.id_topic === this.id);
    }
  }
}
</script>

<style scoped>

</style>