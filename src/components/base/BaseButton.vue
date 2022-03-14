<template>
  <input type="button" :value="msg">
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>