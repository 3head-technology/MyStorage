<template>
  <div>
    <base-button @click="toLogin" msg="Sign in"></base-button>
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
</style>
