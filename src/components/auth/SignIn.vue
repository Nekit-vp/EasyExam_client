<template>
  <div class="w-25 mx-auto border p-3 rounded-2" >

    <h1 style="text-align: center">EasyExam</h1>

    <b-form>

      <b-form-group class="p-3" label="Логин:">
        <b-form-input v-model="form.username" type="text" id="username" placeholder="Логин..."></b-form-input>
      </b-form-group>

      <b-form-group class="p-3" label="Пароль:">
        <b-form-input v-model="form.password" type="password" id="password" placeholder="Пароль..."></b-form-input>
      </b-form-group>

      <div style="text-align: center">
      <b-button variant="primary" type="submit" >Войти</b-button>
      <br>
      <p class="mt-3">Ещё не зарегистрированы?
        <router-link to="/auth/signup">Регистрация</router-link>
      </p>
      </div>

    </b-form>

  </div>
</template>

<script>
export default {
  name: "SignIn",

  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },


}
</script>

<style scoped>

</style>