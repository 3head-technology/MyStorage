<template>
  <div>
      <keep-alive>
      <input multiple @change="fileUploded" id="files" type="file">
      </keep-alive>
  </div>
</template>

<script>
import BaseTextInput from "@/components/base/BaseTextInput";

export default {
    name: "UserView",
    components: {BaseTextInput, },
    methods: {
        fileUploded () {
            const files = document.getElementById("files").files;
            console.log(files);
        },
    },
};
</script>

<style scoped>

</style>
