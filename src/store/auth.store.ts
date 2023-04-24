import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed } from 'vue'


export const useAuthStore = defineStore('authStore', () => {
  const token = useStorage('token', '')
  const isAdmin = useStorage('911cd5e6-b332-4b1d-89c5-44bf9cf2099d', false)
  return {
  } as const
})
