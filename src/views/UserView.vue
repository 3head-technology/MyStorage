<template>
  <div class="main-container"  @dragover.prevent @drop.prevent>
        <div class ="drag-drop-container" @drop="dragFile" id ="drag-and-drop">
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <h1>Drag and drop your files here!</h1>
            <h2>File supported: .pdf .jpeg .jpg .png</h2>
            <p>or</p>
            <input multiple id="files" type="file" style="display: none;" @change="fileUploded">
            <label for="files" class="btn-input">Browse files</label>
        </div>
        <div class="file-container" v-if="files.length">
            <div v-for="file in files" :key="file">
                <div class="file">
                    <i class="fa-solid fa-file"></i>
                    <p>{{file.name}}</p>
                </div>
            </div>
        </div>
        <!-- <p id="file-name"></p> -->
  </div>
</template>

<script>
import BaseTextInput from "@/components/base/BaseTextInput";

export default {
    name: "UserView",
    components: {BaseTextInput, },
    data () {
        return {
            files: [],
        };
    },
    computed: {
        filesArray () {
            return Array.from(this.files);
        },
    },
    methods: {
        fileUploded (event) {
            this.files = event.target.files;
        },
        dragFile (event) {
            this.files = event.dataTransfer.files;
        },
    },
};

</script>

<style scoped>
    .main-container {
        display: flex;
        flex-direction: column;
        gap: 50px;
        background-color: #fafafa;
        width: fit-content;
        height: fit-content;
        margin: auto;
        border-radius: 10px;
        padding: 2em;
        margin: 5% auto;
    }

/***********************************************************************
                        DRAG AND DROP CONTAINER
***********************************************************************/

    .drag-drop-container {
        text-align: center;
        border: 2px dotted #A8B5BF;
        background-repeat: repeat-x;

        border-radius: 10px;
        padding: 3em;
    }

    .drag-drop-container i {
        font-size: 4em;
        color: #56738C;
    }

    .drag-drop-container h1 {
        font-size: 3em;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 1.5px;
        color: #1f2933;
    }

    .drag-drop-container h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        color: #A8B5BF;
    }

    .btn-input {
        color: transparent;
    }

    .btn-input {
        display: inline-block;
        width: fit-content;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        background-color: transparent;
        color: #56738C;
        padding: .5rem 1.5rem;
        border: 3px solid #56738C;
        border-radius: 10px;
        transition: all ease-in-out 0.25s;
    }

    .btn-input:hover {
        background-color: #56738C;
        color: #f2f2f2;
        box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
    }

/***********************************************************************
                            FILE CONTAINER
***********************************************************************/

    .file-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        place-items: center;
        gap: 30px;
    }

    .file {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 120px;
        height: 120px;
        background-color: #a8b5bf62;
        border-radius: 15px;
        padding: 1em;
        text-align: center;
        cursor: pointer;
    }

    .file i {
        font-size: 2em;
        color: #56738C;
        transition: all ease-in-out .2s;
    }

    .file:hover {
        outline: #56738C solid 1.5px;
    }

    .file:hover i {
        font-size: 2.6em;
    }

    .file p {
        font-size: .8em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 16ch;
    }

/***********************************************************************
                            MEDIA QUERY
***********************************************************************/

    @media(max-width: 800px){
        .file-container {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media(max-width: 650px){
        .file-container {
            grid-template-columns: repeat(3, 1fr);
        }

    }
</style>

<style>

    html {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        -webkit-box-sizing: inherit;
        -moz-box-sizing: inherit;
        box-sizing: inherit;
    }

    body {
        background-color: #f0f0f0;
    }
</style>
