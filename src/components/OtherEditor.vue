<template>
  <QuillEditor
    :modules="modules" toolbar="full"
    :defaultConfig="editorConfig"
    :mode="mode"
    :value="valueHtml"
    @onCreated="handleCreated"
    @onChange="handleChange"
    @update:model-value="valueHtml = $event"
  />
</template>


<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import BlotFormatter from 'quill-blot-formatter'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { ref, inject, onMounted, onBeforeUnmount, shallowRef, defineProps, defineEmits, watch } from 'vue'
 const server_url = inject("server_url")
 const mode = ref('default')
 const modules = {
  name: 'blotFormatter',
  module: BlotFormatter,
  options: {/* options */ }
}
 const valueHtml = ref('<p>hello</p>')
 const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  }
})
 const emit = defineEmits(["update:model-value"])
 const editorRef = shallowRef()
 let initFinished = false
onMounted(() => {
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
 watch(() => props.modelValue, (newValue) => {
  if (newValue !== valueHtml.value) {
    valueHtml.value = newValue
  }
})
</script>