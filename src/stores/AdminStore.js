import { defineStore } from 'pinia'

const AdminStore = defineStore('admin', {
  state: () => {
    return {
      id: 0,
      account: "",
      token: "",
    }
  },
  actions: {},
  getters: {},
})

export { AdminStore }
