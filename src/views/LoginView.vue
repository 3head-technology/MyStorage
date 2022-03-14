<template>
    <div>
      <base-text-input type="text"></base-text-input>
      <base-text-input type="password"></base-text-input>
      <base-button @click="toLogin" msg="Sign In"></base-button>
    </div>
</template>

<script>
import BaseTextInput from "@/components/base/BaseTextInput";
import BaseButton from "@/components/base/BaseButton";

export default {
    name: "LoginView",
    components: {BaseButton, BaseTextInput, },
    data () {
        return {username: "", };
    },
    methods: {
        toLogin () {
            this.$router.push("/user");
        },
    },
};

</script>

<style scoped>
    :deep(.baseButton){
    background: blue;
  }
</style>
