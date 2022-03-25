<template>
  <div class="input-container">
    <input :type="type" :placeholder="placeholder" class="input-text" @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<script>
export default {
    name: "BaseTextInput",
    emits: [ "update:modelValue", ],
    props: {
        modelValue: String, // for example username in LoginView
        type: String,
        placeholder: String,
    },
};
</script>

<style scoped>
  .input-container {
    display: flex;
  }
  .input-text {
        width: 100%;
        padding: 1em 2em;
        border: 1px solid #B9EA6B;
        border-radius: 5px;
    }

    .input-text:focus {
        outline: 1px solid #90B653;
    }
</style>
