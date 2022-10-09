¡<template>
  <div id="app">
    <table>
      <tr>
        <td><CommerceProducts /></td>
      </tr>
      <tr>
        <td><CommerceCart /></td>
      </tr>
    </table>
  </div>
</template>

<script>
import CommerceCart from './components/CommerceCart'
import CommerceProducts from './components/CommerceProducts'

export default {
  name: 'App',
  components: {
    CommerceCart,
    CommerceProducts
  }
}
</script>

<style>
table {
  width: 100%;
}
</style>
