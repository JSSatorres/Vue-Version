<template>
  <q-page padding>
    <q-btn @click="createLink"> Create link</q-btn>
    {{ userStore.token }}
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios'

import {useUserStore} from '../stores/user-store'
const userStore = useUserStore()

userStore.refreshToken()

const logoutSesion = () => {
  console.log("oli");
  userStore.logout()
}
// const accessSesion = () => {
//   access()
// }
// const logoutSesion = () => {
//   console.log("oli");
//   logout()
// }
const createLink = async () => {
 try {
  const res = await api({
    method: 'POST',
    url:'link',
    headers:{
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' + userStore.token 
    },
    data:{
      longLink: "http://github.com/JSSatorres/Trello-App-Vue",
    }
    // 'links'
    })

    console.log(res);
 } catch (error) {
  console.log(error);
 }
}
  
</script>
