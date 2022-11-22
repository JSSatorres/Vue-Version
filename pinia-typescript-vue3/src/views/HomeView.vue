<template>
  <!-- <Navbar /> -->
  <h1>Home view: {{ counterStore.count}}</h1>
</template>

<script setup lang="ts">
// import Navbar from '../components/Navbar.vue'
import {useCounterStore} from '../stores/counter'

const counterStore = useCounterStore()


</script>