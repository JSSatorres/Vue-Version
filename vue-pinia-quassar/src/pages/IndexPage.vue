<template>
  <q-page padding>
    <q-btn @click="access"> Ingresar</q-btn>
  </q-page>
</template>

<script setup>
import axios from "axios";

const access = () => {
  console.log("click");
  axios
    .post("http://localhost:5000/login", {
      email: "algotragico@test.com",
      password: "123456",
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => console.log(error));
};
</script>
