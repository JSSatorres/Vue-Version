<template>
  <h2>Login aa  {{token}}</h2>
</template>

<script setup>
import { useUserStore } from '../stores/user-store'
import { api } from 'src/boot/axios'

const userStore = useUserStore()


const access = async () => {
  try {
    const res = await api.post("auth/login", {
      email:"algotragico@test.com",
      password: "123456"
    })
    userStore.token = res.data.token;
    userStore.expiresIn = res.data.expiresIn;
    setTime()
  } catch (error) {
    console.log(error)
  }
}

const refreshToken = async () =>{
  try {
    const res = await api.get("auth/refresh")
    console.log(res.data);
    userStore.token = res.data.token;
    userStore.expiresIn = res.data.expiresIn;
    setTime()
  } catch (error) {
    console.log(error);
  }
}
</script>

<style>

</style>