<template>
  <div class="login">
      <h1 class="title">Bienvenidos</h1>
      <form class="form" @submit.prevent="getToken">
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">E-mail</label>
          <input v-model.lazy="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
          <div id="emailHelp" class="form-text"></div>
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input v-model.lazy="password" type="password" class="form-control" id="exampleInputPassword1" required>
      </div>
      <button type="submit" class="btn btn-primary">Ingresar</button>
      </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useAuthUser from "../composables/useAuthUser";
export default defineComponent ({
  setup() {
      const { fetchToken } = useAuthUser();
      let email = ref("");
      let password = ref("");
      const getToken = () => {
          fetchToken({email: email.value, password: password.value});
      }
      return{
          email,
          password,
          getToken
      }
  }
});
</script>

<style scoped>
.title {
  font-size:40px;
  margin: 2rem;
  font-style:inherit;
  text-align: center;
  color: #166f7b;
}
.form {
margin: 3rem auto;
display: flex;
flex-direction: column;
justify-content: center;
width: 20%;
min-width: 350px;
max-width: 100%;
background: rgba(203, 216, 225, 0.9);
border-radius: 5px;
padding: 40px;
box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

button{
  border: #166f7b;
  background: #166f7b;
}
</style>
