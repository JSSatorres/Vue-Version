import { defineStore } from 'pinia';
import { api } from 'src/boot/axios'
import {ref} from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref(null)
  const expiresIn = ref(null)

  const access = async () => {
    try {
      const res = await api.post("auth/login", {
        email:"algotragico@test.com",
        password: "123456"
      })
      token.value = res.data.token;
      expiresIn.value = res.data.expiresIn;
      sessionStorage.setItem("user", true)
      console.log("access desde store",token.value);
      setTime()
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
      sessionStorage.setItem('user',true)
      setTime()
    } catch (error) {
      console.log(error);
      sessionStorage.removeItem('user')     
    }
  }

  const setTime = () => {
    setTimeout(()=>{
      refreshToken()
    }, expiresIn.value * 1000 - 6000) 
  } 

  const logout = async () =>{
    try {
      const res = await api.get("auth/logout")
      console.log(res.data);
      setTime()
    } catch (error) {
      console.log(error);
    } finally {
      resetStrore()
      sessionStorage.removeItem('user')      
    }
  }  

  const resetStrore = () => {
    token.value = null
    expiresIn.value = null
    console.log(token.value);
  }

  return{
    token,
    expiresIn,
    access,
    refreshToken,
    logout
  }
})