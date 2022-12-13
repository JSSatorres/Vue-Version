import {defineStore} from 'pinia'
import {useUserStore} from './user-store'
import { api } from 'src/boot/axios'
import { ref } from 'vue'

export const useLinkStore = defineStore('link', ()=> {
  const userStore = useUserStore()
  const links = ref([])

  const createLink = async (link) => {
    try {
      const res = await api({
        method: 'POST',
        url:'link',
        headers:{
          'Content-Type': 'application/json',
          'Authorization':'Bearer ' + userStore.token 
        },
        data:{
          longLink: link,

        }
      })
      console.log(res.data);
      links.value.push(res.data.newLink);
      
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log(error.response?.data || error);
          // throw error.response?.data || error
      }
    }
  }

  
  const getLinks = async () =>{
    try {
      const res = await api({
        method: 'GET',
        url:'link',
        headers:{
          'Content-Type': 'application/json',
          'Authorization':'Bearer ' + userStore.token 
        },
      })

      links.value = [...res.data.links]
    } catch (error) {
        console.log(error);
      if (error.response) {
        console.log(error.response?.data || error);
      }
    }  
  }
  getLinks()
  return {
    createLink,
    getLinks,
    links,
  }

})