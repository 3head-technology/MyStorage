<template>
  <div class="login-container">
      <img src="../img/3head-logo.png" alt="3head-logo">
      <h1>3Head Technologies</h1>
      <base-button @click="toLogin" msg="Log In"></base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton";
export default {
    name: "HomeView",
    components: { BaseButton, },
    methods: {
        toLogin () {
            this.$router.push("/login");
        },
    },
};
</script>

<style scoped>
    .login-container {
        position: absolute;
        font-family: 'Open Sans', sans-serif;
        height: 25%;
        width: 35%;
        background-color: #fafafa;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 3px 3px 10px;
        text-align: center;
        margin: auto;
        border: 1px solid #90B653;
    }
    .login-container img {
        position: relative;
        top: 5%;
        width: 100px;
    }
    @media(max-width: 1200px) {
      .login-container {
            flex-direction: column;
            justify-content: flex-start;
            width: 648px;
            height: 848px;
        }
    }
</style>
