<template>
  <q-page padding class="row justify-center">
    <div class="col-12 col-sm-6 col-md-5">
      <h3 class="ss">login</h3>
      <q-form
        @submit.prevent="handleSubmit"
      >
      <q-input
        v-model="email"
        label="Email"
        type="email"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      >
      </q-input>
      <q-input
        v-model="password"
        label="Password"
        type="password"
        :rules="[ val => val && val.length > 5 || 'Please type at least 5 characters']"
      >
      </q-input>
      <q-btn type="submit" label="login"> </q-btn>
      </q-form>
    </div>

  </q-page>
</template>

<script setup>
import { useUserStore } from '../stores/user-store'
import { ref } from "vue"
import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'
import {useRouter} from 'vue-router'


const userStore = useUserStore()
const router = useRouter()
const email = ref('')
// algotragico@test.com
const password = ref('')
const $q = useQuasar()

const handleSubmit = async () =>{
  try {
    await userStore.access(email.value, password.value)
    router.push('/')
  } catch (error) {
    console.log(error);
    alertDialog(error.error)
  }
}

const alertDialog = (message = 'login error') => {
  $q.dialog({
        title: 'Login failure',
        message
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
}
// const access = async () => {
//   try {
//     const res = await api.post("auth/login", {
//       email:"algotragico@test.com",
//       password: "123456"
//     })
//     userStore.token = res.data.token;
//     userStore.expiresIn = res.data.expiresIn;
//     setTime()
//   } catch (error) {
//     console.log(error)
//   }
// }

// const refreshToken = async () =>{
//   try {
//     const res = await api.get("auth/refresh")
//     console.log(res.data);
//     userStore.token = res.data.token;
//     userStore.expiresIn = res.data.expiresIn;
//     setTime()
//   } catch (error) {
//     console.log(error);
//   }
// }
</script>

<style>

</style>