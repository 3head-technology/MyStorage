<template>
  <div>
    <input class="btn" type="button" :value="msg">
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
  .btn {
        text-transform: uppercase;
        padding: 1em 2em;
        background-color: #90B653;
        color: #fff;
        text-decoration: none;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
        border-radius: 5px;
        font-weight: bold;
        transition: all ease-in-out 0.2s;
    }
    .btn:hover {
        background-color: #aed373;
        cursor: pointer;
    }
</style>
