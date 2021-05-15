<template>
  <div>


    <div class="topic-card mx-lg-5 p-1" v-for="(item, index) in topicItems" :key="index">

      <b-card bg-variant="secondary" text-variant="white">
        <b-card-title>
          {{item.theory}}
        </b-card-title>
        <b-card-text>
          Прочитать теорию: <a href="" style="color: lightgray">{{item.files}}</a>
        </b-card-text>
        <b-button href="#"  variant="light"><router-link role="button" class="btn-light"
                                                         :to="{name: 'TaskCard', params: {id: item.id}}">
          Решать задания
        </router-link></b-button>
      </b-card>

    </div>

  </div>
</template>

<script>
export default {
  name: "CardTopic",

  data() {
    return {
      id: parseInt(this.$route.params.id)
    };
  },


  computed: {
    topicItems() {
      return this.$store.state.topic.filter(item => item.id_lesson === this.id);
    }
  }
}
</script>

<style scoped>

</style>