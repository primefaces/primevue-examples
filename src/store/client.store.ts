import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import type { Client } from '../data/models/client'


export const useClientStore = defineStore('clientStore', () => {
  const isFirstVist = useStorage('0b93793b-f86c-4c71-ab4e-c5ca8baf1e6d',true)
  const client = useStorage('f64a62ab-4bc2-4e0d-92dd-a1a1648847bx',{} as Partial<Client>)

  function setFirstVistToFalse() {
    isFirstVist.value= false;
  }
  return {
    isFirstVist,
    client,
    setFirstVistToFalse
  } as const
})
