<template>
  <div>
    <input :type="type">
  </div>
</template>

<script>
export default {
    name: "BaseTextInput",
    props: {
        type: String,
    },
};
</script>

<style scoped>

</style>
