<template>
  <div id="appRoot">
    <p>{{mensaje}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'indexPage',
  data () {
    return {
      mensaje: 'Hola desde Vue!'
    }
  },
  created () { // lifecycle hook
    this.getMessage()
  },
  methods: {
    getMessage () {
      axios.get('http://localhost:5000/api/v1.0/message').then((response) => {
        this.mensaje = response.data
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
