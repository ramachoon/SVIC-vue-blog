<template>
  <div class="category-panel">
    <n-card :bordered="false" title="Category management">
      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Operate</th>
          </tr>
        </thead>
        <tbody v-for="category in categoryList">
          <tr>
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td>
              <n-space>
                <n-button strong secondary type="primary" @click="toUpdate(category)">Edit</n-button>
                <n-button strong secondary type="warning" @click="deleteCategory(category)">Delete</n-button>
              </n-space>
            </td>
          </tr>
        </tbody>
      </n-table>

      <n-button class="add-button" strong secondary type="primary" @click="showModal = true">
        <template #icon>
          <n-icon>
            <add-icon />
          </n-icon>
        </template>
        Add to
      </n-button>

      <n-modal v-model:show="showModal" preset="dialog" title="Dialog">
        <template #header>
          <div>Add Category</div>
        </template>
        <n-space vertical>
          <n-input v-model:value="addCategory.name" type="text" placeholder="Please enter a name" />
        </n-space>
        <template #action>
          <n-button secondary type="primary" @click="add">
            <template #icon>
              <n-icon>
                <add-icon />
              </n-icon>
            </template>
            Submit
          </n-button>
        </template>
      </n-modal>

      <n-modal v-model:show="showUpdateModal" preset="dialog" title="Dialog">
        <template #header>
          <div>Modify Classification</div>
        </template>
        <n-space vertical>
          <n-input v-model:value="updateCategory.name" type="text" placeholder="Please enter a name" />
        </n-space>
        <template #action>
          <n-button strong secondary type="primary" @click="update">
            <template #icon>
              <n-icon>
                <add-icon />
              </n-icon>
            </template>
            Submit
          </n-button>
        </template>
      </n-modal>
    </n-card>
  </div>
</template>

<script setup>
import { ref, reactive, inject, onMounted } from 'vue'
import { GitCommit as AddIcon } from '@vicons/ionicons5'

const axios = inject('axios')
const message = inject('message')
const dialog = inject('dialog')

const categoryList = ref([])
const showModal = ref(false)
const showUpdateModal = ref(false)

const addCategory = reactive({
  name: '',
})

const updateCategory = reactive({
  id: 0,
  name: '',
})

onMounted(() => {
  loadData()
})

const loadData = async () => {
  let res = await axios.get('/category/list')
  categoryList.value = res.data.rows
}

const add = async () => {
  let res = await axios.post('/category/_token/add', { name: addCategory.name })

  if (res.data.code == 200) {
    loadData()
    message.info(res.data.msg)
  } else {
    message.info(res.data.msg)
  }

  showModal.value = false
}

const toUpdate = (category) => {
  showUpdateModal.value = true
  updateCategory.id = category.id
  updateCategory.name = category.name
}

const update = async () => {
  let res = await axios.put('/category/_token/update', { id: updateCategory.id, name: updateCategory.name })

  if (res.data.code == 200) {
    loadData()
    message.success(res.data.msg)
  } else {
    message.error(res.data.msg)
  }

  showUpdateModal.value = false
}

const deleteCategory = async (category) => {
  dialog.warning({
    title: 'Delete',
    content: 'Confirm deletion?',
    positiveText: 'Sure',
    negativeText: 'Cancel',

    onPositiveClick: async () => {
      let res = await axios.delete(`/category/_token/delete?id=${category.id}`)

      if (res.data.code == 200) {
        loadData()
        message.success(res.data.msg)
      } else {
        message.error(res.data.msg)
      }
    },

    onNegativeClick: () => {
      message.info('Cancelled')
    }
  })
}
</script>

<style lang="scss" scoped>
.category-panel {
  padding: 20px;

  .add-button {
    margin: 20px 0;
  }
}
</style>
