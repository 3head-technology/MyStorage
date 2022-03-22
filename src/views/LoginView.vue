<template>
    <div class="login-container">
            <div class="left-img"></div>
            <div class="right-content">
                <div class="logo-container">
                    <img src="../img/3head-logo.png" alt="3head-logo">
                    <h1>3Head Technologies</h1>
                    <h2>Welcome!!</h2>
                </div>
                <p>Log in</p>
                <div class="input-container">
                    <base-text-input type="text" placeholder="username"></base-text-input>
                    <base-text-input type="password" placeholder="password"></base-text-input>
                    <base-button @click="toLogin" msg="Sign In"></base-button>
                </div>
            </div>
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
    .login-container {
        display: flex;
        position: absolute;
        font-family: 'Open Sans', sans-serif;
        height: 648px;
        width: 1152px;
        background-color: #fafafa;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 3px 3px 10px;
        text-align: center;
    }

    .left-img {
        width: 50%;
        background: url(../img/laptop04.jpg) no-repeat center;
        background-size: cover;
        border-radius: 10px 0px 0 10px;
    }

    .right-content {
        margin: auto;
    }

    .right-content img {
        width: 100px;
    }

    .right-content h1 {
        font-size: 2em;
    }

    .right-content p {
        color: #90B653;
        font-weight: bold;
        font-size: 1.2em;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    @media(max-width: 1200px){
        .login-container {
            flex-direction: column;
            justify-content: flex-start;
            width: 648px;
            height: 848px;
        }
    }
</style>
