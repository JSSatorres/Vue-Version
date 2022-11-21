<template>
  <h1>Counter view</h1>
  counter:{{ counterStore.count}}
  {{" "}}
  number of changes {{counterStore.numberOfChanges }} 
  <button @click="counterStore.incrementBy(1)">+1</button>
  <button @click="counterStore.incrementBy(2)">+2</button>
  <button @click="counterStore.incrementBy(5)">+5</button>
</template>

<script setup lang="ts">
import {useCounterStore} from '../stores/counter'

const counterStore = useCounterStore()

</script>