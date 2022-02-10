<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'axiosIndex',
  setup() {
    axios
      .get('/users/XPost')
      .then((res) => {
        console.log('res:', res)
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }
})
</script>

<style scoped></style>
