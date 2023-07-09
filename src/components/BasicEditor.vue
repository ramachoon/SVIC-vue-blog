<template>
  <div>
    <Toolbar
      class="toolbar"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      class="editor"
      :defaultConfig="editorConfig"
      :mode="mode" v-model="valueHtml"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { i18nChangeLanguage } from '@wangeditor/editor';
import { ref, inject, onMounted, onBeforeUnmount, shallowRef } from 'vue'

const server_url = inject("server_url")

const mode = ref('default')
const valueHtml = ref('<p>hello</p>')

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  }
})

const emit = defineEmits(["update:model-value"])

const editorRef = shallowRef()

const toolbarConfig = {
  excludeKeys: ["uploadVideo", "fullScreen"]
}

const editorConfig = {
  placeholder: 'Please enter content...',
  uploadFileName: 'file',
  customUploadImg:async(files, insert) => {
    const formData = new FormData();
    formData.append('file', files[0]);
    console.log('file',insert);
    // try {
    //   if(formData){
    //     const response = fetch(server_url + '/editor/upload', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   if (!response.ok) {
    //     throw new Error('Image upload failed');
    //   }

    //   const data = response.json();
    //   const imageUrl = data.url; // Replace 'url' with the actual key in the response object that holds the image URL

    //   insert(imageUrl);
    //   }
      
    // } catch (error) {
    //   console.error('Image upload error:', error);
    // }
  },
  menus: [
    'head',
    'bold',
    'fontSize',
    'fontName',
    'italic',
    'underline',
    'strikeThrough',
    'foreColor',
    'backColor',
    'link',
    'list',
    'justify',
    'quote',
    'emoticon',
    'image',
    'table',
    'video',
    'code',
    'undo',
    'redo'
  ]
}

editorConfig.MENU_CONF = {}

editorConfig.MENU_CONF['uploadImage'] = {
  server: server_url + '/editor/upload',
  base64LimitSize: 100 * 1024*1024
}

editorConfig.MENU_CONF['insertImage'] = {
  parseImageSrc: (src) => {
    
    return src
  }
}

let initFinished = false

onMounted(() => {
  i18nChangeLanguage('en');

  setTimeout(() => {
    valueHtml.value = props.modelValue
    initFinished = true
  }, 10)
})

onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;

  editor.destroy();
})

const handleCreated = (editor) => {
  editorRef.value = editor;
}

const handleChange = () => {
  if (initFinished) {
    emit("update:model-value", valueHtml.value)
  }
}
</script>

<style scoped>
.toolbar {
  border-bottom: 1px solid #c9c9c9;
  position: sticky;
  top: 0;
  z-index: 999;
}

.editor {
  min-height: 280px;
  overflow: hidden;
}
</style>
