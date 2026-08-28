<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="w-full bg-gray-800 ">
    <Navbar/>

    <div class="pt-6">
      <router-view />
      <Footer/>
    </div>
    
  </div>
  
 
  
</template>
