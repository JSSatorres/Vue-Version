<template>
  <q-form @submit.prevent="handleSubmit" >
    <q-input
      v-model="link"
      label="New link"
      placeholder="add a link"
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
</template>

<script setup>
import { useUserStore } from '../stores/user-store'
import { ref } from "vue"
import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'
import {useRouter} from 'vue-router'


// const userStore = useUserStore()
// const router = useRouter()
const link = ref('algotragico@test.com')
// algotragico@test.com
// const password = ref('123456')
const $q = useQuasar()

const handleSubmit = async () =>{
  try {
    await userStore.access(email.value, password.value)
    router.push('/')
  } catch (error) {
    console.log(error);
    if (error.error) {
      return alertDialog(error.error)
    }
    alertDialog(error.errors[0].msg)
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

</script>

<style>

</style>