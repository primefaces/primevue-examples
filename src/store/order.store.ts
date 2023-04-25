import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import type { Item } from "../data/models/items";
export const useOrderStore = defineStore("orderStore", () => {
  const currentOrder = useStorage("orderList", []as Item[]);
  function resetOrderList() {
    currentOrder.value = [] ;
  }
  return {
    currentOrder,
    resetOrderList,
  } as const;
});
