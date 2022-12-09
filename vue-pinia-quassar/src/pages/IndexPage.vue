<template>
  <q-page padding>
    <q-btn @click="access"> Ingresar</q-btn>
    <q-btn @click="createLink"> Create link</q-btn>
    {{ token }}
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios'
import {ref} from 'vue'

const token = ref('')
const expiresIn = ref('')

const access = async () => {
  try {
    const res = await api.post("auth/login", {
      email:"algotragico@test.com",
      password: "123456"
    })
    token.value = res.data.token;
    expiresIn.value = res.data.expiresIn;
  } catch (error) {
    console.log(error)
  }
}

const refreshToken = async () =>{
  try {
    const res = await api.get("auth/refresh")
    console.log(res.data);
    token.value = res.data.token;
    expiresIn.value = res.data.expiresIn;
  } catch (error) {
    console.log(error);
  }
}
const createLink = async () => {
 try {
  const res = await api({
    method: 'POST',
    url:'/link',
    headers:{
      'Authorization':'Bearer' + token.value 
    },
    data:{
      longLink:"github.com/JSSatorres/Trello-App-Vue"
    }
    // 'links'
    })

    console.log(res);
 } catch (error) {
  console.log(error);
 }
}
refreshToken()
</script>
