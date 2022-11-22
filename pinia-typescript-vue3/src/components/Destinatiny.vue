<template>
  <div>
    <h5> destination {{$route.params.id}}</h5>
  </div>
</template>

<script setup lang="ts">

  // computed:{
  //   destanitaionId() {
  //     return this.$route.params.id
  //   }
  


</script>

<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 30px;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #4e6c71;
  z-index: 2;
}
</style>