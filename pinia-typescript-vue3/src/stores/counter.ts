import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {

  state: () => ({ 
    count: 0,
    numberOfChanges: 0
  }),
  actions: {
    incrementBy(value:number) {
      this.count += value
      this.numberOfChanges += 1
    },
  },
})