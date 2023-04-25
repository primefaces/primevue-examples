import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import type { Client } from '../data/models/client'
import type { User } from '../data/models/user'


export const useAuthStore = defineStore('authStore', () => {
  const token = useStorage('token', '')
  const isFirstVist = useStorage('0b93793b-f86c-4c71-ab4e-c5ca8baf1e6d',true)
  const user = useStorage('f64a62ab-4bc2-4e0d-92dd-a1a1648847b4',{} as Partial<User>)
  return {
    isFirstVist,
    user
  } as const
})
