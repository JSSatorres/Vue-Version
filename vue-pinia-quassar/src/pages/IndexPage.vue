<template>
  <q-page padding>
    <q-btn @click="linkStore.createLink('as.com')"> Create link</q-btn>

    <!-- {{ linkStore.links}} -->
    <div v-for="(link, index) in linkStore.links" :key="index">
      <p> {{ link.longLink }}</p>

    </div>
  </q-page>
</template>

<script setup>
import {useLinkStore} from '../stores/link-store'
  const linkStore = useLinkStore()

  // const allLinks =  linkStore.getLinks()
  // const linkDraw = allLinks.map((link)=> link.longLink)
  
</script>
