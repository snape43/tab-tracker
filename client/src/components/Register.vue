<template>
  <div>
    <h1>register</h1>

    <input type="email" name="email" placeholder="email" v-model="email" />
    <br />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenthicationService from '@/services/AuthenthicationService'
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register () {
      const response = await AuthenthicationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    },
    mounted() {
      setTimeout(() => {
        this.email = "hello world";
      }, 2000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
