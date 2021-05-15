<template>
  <div class="mx-auto">

    <div class="desc">
      <h2 class="p-3">Добро пожаловать на портал EasyExam </h2>
      <p class="border p-3">Приветсвуем вас на портале подготовки к Егэ, здесь вы можете подтянуть свои знания по различным предметам,
        найти теорию в понятном и доступном формате, прорешать множество тестов по различным темам</p>

    </div>

    <p style="text-align: center">Выбирите предмет:</p>
    <div class="card-list">
      <div class="topic-card" v-for="(item, index) in lesson" :key="index">
        <b-card bg-variant="secondary" header="#Егэ" text-variant="white" class="text-center">
          <b-card-text>
            <router-link role="button" class="btn-secondary"
                         :to="{name: 'TopicCard', params: {id: item.id}}">
              {{ item.name }}
            </router-link>
            </b-card-text>
        </b-card>
      </div>
    </div>


  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "CardLesson",

  computed: {
    ...mapState({
      lesson: state => state.lesson
    })
  },
}
</script>

<style scoped>
.desc {


}

.card-list {
  margin: 0 auto;
  width: 970px;
  display: flex;
  flex-wrap: wrap;
  padding-right: 20px;

}

.topic-card {
  width: 200px;
  margin-left: 20px;
  margin-top: 15px;
}

.topic-card + .topic-card {

}
</style>