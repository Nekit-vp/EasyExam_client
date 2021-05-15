<template>
  <div id="app">
    <header class="bg-dark">
      <b-navbar class="w-75 mx-auto" type="dark" variant="dark">
        <b-navbar-brand>EasyExam</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item href="/main">Главная</b-nav-item>
          <b-nav-item href="#">Список предметов</b-nav-item>
          <b-nav-item href="#">Карта успеваемости</b-nav-item>
          <b-nav-item href="#">Рандомный тест</b-nav-item>
          <b-nav-item href="#">Личный кабинет</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </header>
    <div class="container-fluid my-5">
      <router-view/>
    </div>

    <footer style="text-align: center; bottom: 0;">
      <b-jumbotron class="p-4" bg-variant="dark" text-variant="white">
        <div class="w-75 mx-auto">
          <div class="row">
            <div class="col-4 text-left"> @EasyExam, <p>2021</p></div>
            <div class="col-4 text-center" >
              <p style="font-size: 18pt"> Контакты</p>
              <p style="font-size: 10pt">8(999)100-77-16</p>
              <p style="font-size: 10pt">lobanov_2000_nikita@mail.ru</p>
            </div>
            <div class="col-4 text-right"> О нас <p>@nekit_vp</p></div>
          </div>

        </div>

      </b-jumbotron>
    </footer>


  </div>
</template>

<script>

  import {wait} from "./utils";
  import {mapActions} from "vuex";

  export default {

    mounted() {
      this.$nextTick(async () => {
        await this.initialize();
        await wait(1500);
      });
    },

    methods: {
      ...mapActions([
        'initialize'
      ])
    }
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar,
.navbar-brand {
  font-size: 16pt;
}

footer{
  font-size: 20pt;
}
</style>
