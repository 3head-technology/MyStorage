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
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
</style>
