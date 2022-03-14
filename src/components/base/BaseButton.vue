<template>
  <div>
    <input class="baseButton" type="button" :value="msg">
  </div>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        msg: String,
    },
};
</script>

<style scoped>
  .baseButton{
    background: aquamarine;
  }
</style>
