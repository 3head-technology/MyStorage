<template>
  <div>
      <div class ="file-upload" @dragover.prevent @drop.prevent>
            <input multiple @change="fileUploded" id="files" type="file">
            <label for="files"></label>
            <div @drop="dragFile" id ="drag-and-drop">
                <div v-if="files.length">
                    <ul v-for="file in files" :key="file">
                        <li>{{file.name}}</li>
                    </ul>
                </div>
            </div>
            <p id="file-name"></p>
      </div>
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
    .file-upload {
        position: absolute;
        top: 25%;
        left: 50%;
        border-radius: 10px;
    }
    #files{
        color: rgba(0, 0, 0, 0);
    }
    #files::-webkit-file-upload-button{
        display: none;
    }
    #files::before{
        content: 'Upload File';
        display: inline-block;
        border-radius: 10px;
        padding: 7px 12px;
        user-select: none;
        font-weight: 500;
        background-color: #90B653;
        color: #fff;
        text-decoration: none;
        font-size: 1.2em;
    }
    #files:hover::before {
        background-color: #aed373;
        cursor: pointer;
        transition: all ease-in-out 0.2s;
    }
    #drag-and-drop{
        position: relative;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 3px 3px 10px;
        width: 200px;
        height: 500px;
    }
</style>
