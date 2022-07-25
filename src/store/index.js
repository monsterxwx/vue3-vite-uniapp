import { defineStore, createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export default defineStore('global', {
  persist: {
    key: 'pinia',
    paths: ['user']
  },
  state: () => ({
    user: 'test1'
  }),
  actions: {

  }
})

export const pinia = createPinia().use(
  createPersistedState({
    storage: {
      getItem (key) {
        return uni.getStorageSync(key)
      },
      setItem (key, value) {
        uni.setStorageSync(key, value)
      }
    }
  })
)
