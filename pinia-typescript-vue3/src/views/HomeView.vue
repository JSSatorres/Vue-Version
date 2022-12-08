<template>
  <!-- <Navbar /> -->
  <h1>Home view: {{ counterStore.count}}</h1>
</template>

<script  lang="ts" setup>
// import Navbar from '../components/Navbar.vue'
import {useCounterStore} from '../stores/counter'

const counterStore = useCounterStore()


</script>