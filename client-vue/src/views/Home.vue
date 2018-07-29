<template>
  <div class="home">
    <nav-bar/>
    <div class="jumbotron">
      <h1 class="display-4">WELLCOME TO SUBARASHI BATIK</h1>
      <p class="lead">Our Products are Hand Made by the Legendary Richardson from hacktiv8</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit <br>
        Sapiente facilis quas est. Quia rerum soluta dicta voluptatum 
        tempore ratione unde nulla, deleniti id, 
        error magnam eligendi? Quaerat, minus accusantium! Nesciunt.
      </p>
      <p class="lead">
      </p>
    </div>
    <hr>
    <Carousel/>
    <Items/>
  </div>
</template>

<script>
// @ is an alias to /src
import Items from '@/components/Items.vue'
import Carousel from '@/components/carousel.vue'
import NavBar from '@/components/navbar.vue'

export default {
  name: 'home',
  components: {
    Items,
    Carousel,
    NavBar
  }
}
</script>
