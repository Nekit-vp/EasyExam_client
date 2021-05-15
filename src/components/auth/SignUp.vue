<template>
  <div class="w-25 mx-auto border p-3 rounded-2">

    <h1 style="text-align: center">Регистрация</h1>

    <b-form @submit="register">

      <b-form-group class="p-3" label="Введите логин: ">
        <b-form-input v-model="form.username" type="text" id="username" placeholder="Логин..."></b-form-input>
      </b-form-group>

      <b-form-group class="p-3" label="Введите пароль: ">
        <b-form-input v-model="form.password" type="password" id="password" placeholder="Пароль..."></b-form-input>
      </b-form-group>

      <div style="text-align: center">
      <b-button variant="primary" type="submit">Войти</b-button>
      <br>
      <p class="mt-3">Уже есть аккаунт?
        <router-link to="/auth/signin">Войти</router-link>
      </p>
      </div>

    </b-form>

  </div>

</template>

<script>
export default {
  name: "SignUp",

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