<template>
  <router-view></router-view>
</template>

<script>
import HomeView from "@/views/HomeView";

export default {
    name: "App",
    components: {
        HomeView,
    },
};
</script>

<style>
</style>
