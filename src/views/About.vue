<template>
  <section class="py-20 bg-gray-800 ">
    <div class="w-[90%] mx-auto">

      <!-- ABOUT -->
      <div class="text-center mb-10">
        <h2 class="text-5xl font-bold text-blue-600 ">About</h2>
        <div class="w-14 h-1 bg-white mx-auto mt-4"></div>
        <p class="text-gray-400 mt-6 max-w-3xl mx-auto">
          Passionate Full Stack Web Developer specializing in Vue, PHP, Laravel and WordPress.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <img src="../assets/image/about.jpeg" class="w-full rounded-xl shadow-lg">

        <div>
          <h3 class="text-4xl font-bold mb-5 text-white">
            Full Stack Web Developer.
          </h3>

          <p class="text-gray-400 italic mb-8">
            I create responsive, fast and SEO-friendly websites with modern technologies.
          </p>

          <div class="grid sm:grid-cols-2 gap-5 text-gray-300">

            <p><span class="font-semibold">Birthday:</span> 10 October 1992</p>
            <p><span class="font-semibold">Age:</span> 34</p>

            <p><span class="font-semibold">Website:</span> www.portfolio.com</p>
            <p><span class="font-semibold">Degree:</span> BSC.ENGINEER</p>

            <p><span class="font-semibold">Phone:</span> +8801747691248</p>
            <p><span class="font-semibold">Email:</span> arif.rasel.1992@email.com</p>

            <p><span class="font-semibold">City:</span> Dhaka, Bangladesh</p>
            <p><span class="font-semibold">Freelance:</span> Available</p>

          </div>

          <p class="text-gray-400 mt-8 leading-8">
            I have experience building business websites, portfolios, landing pages and scalable web applications using Vue.js, Laravel and WordPress.
          </p>
        </div>
      </div>

      <!-- FACTS -->
      <div class="py-24">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-blue-600">Facts</h2>
          <div class="w-14 h-1 bg-white mx-auto mt-4"></div>
          <p class="text-gray-400 mt-6">
            Some achievements from my professional journey.
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          <div>
            <h3 class="text-6xl font-bold text-white">5</h3>
            <div class="w-10 h-1 bg-[#14B8A6] mx-auto my-5"></div>
            <p class="text-gray-400">Clients</p>
          </div>

          <div>
            <h3 class="text-6xl font-bold text-white">5</h3>
            <div class="w-10 h-1 bg-[#14B8A6] mx-auto my-5"></div>
            <p class="text-gray-400">Projects</p>
          </div>

          <div>
            <h3 class="text-6xl font-bold text-white">...</h3>
            <div class="w-10 h-1 bg-white mx-auto my-5"></div>
            <p class="text-gray-400">...</p>
          </div>

          <div>
            <h3 class="text-6xl font-bold text-white">..</h3>
            <div class="w-10 h-1 bg-[#14B8A6] mx-auto my-5"></div>
            <p class="text-gray-400">..</p>
          </div>

        </div>
      </div>

      <!-- TESTIMONIAL -->
      <div class="pb-10">
        <div class="text-center mb-14">
          <h2 class="text-5xl font-bold  text-blue-600">Testimonials</h2>
          <div class="w-16 h-1 bg-white mx-auto mt-4"></div>
          <p class="text-gray-400 mt-6 max-w-3xl mx-auto">
            What my clients say about my work and professionalism.
          </p>
        </div>

        <div class="max-w-3xl mx-auto text-center">
<div class="max-w-3xl mx-auto text-center">
  <img :src="testimonials[current].image"
       class="w-28 h-28 rounded-full object-cover mx-auto">

  <h3 class="text-3xl font-bold mt-5 text-white">
    {{ testimonials[current].name }}
  </h3>

  <p class="text-gray-300">{{ testimonials[current].role }}</p>
  
 <p class="text-gray-400 italic mt-6 leading-8 ">
    {{ testimonials[current].text }}
  </p>

  <div class="flex justify-center gap-1 mt-3 mb-5 text-[#F5C518] text-xl">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
</div>

 
  <!-- Dots -->
 
</div>
         
          <p class="text-gray-400 italic text-lg leading-9">
            “Working with Rasel was an excellent experience. The website was delivered on time, fully responsive, and exceeded our expectations.”
          </p>
           <div class="flex justify-center gap-2 mt-8">
    <span
      v-for="(_, i) in testimonials"
      :key="i"
      @click="current = i"
      class="w-3 h-3 rounded-full cursor-pointer transition-all"
      :class="current === i ? 'bg-blue-600 w-6' : 'bg-gray-300'"
    ></span>
  </div>

          

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const current = ref(0);

const testimonials = [
  {
    name: "Saul Goodman",
    role: "CEO & Founder",
    image: new URL("../assets/image/client1.jpeg", import.meta.url).href,
    text: "Working with Rasel was an excellent experience."
  },
  {
    name: "Sara Wilson",
    role: "UI/UX Designer",
    image: new URL("../assets/image/client2.jpeg", import.meta.url).href,
    text: "Professional, fast and high-quality work."
  },
  {
    name: "John Larson",
    role: "Business Owner",
    image: new URL("../assets/image/client3.jpeg", import.meta.url).href,
    text: "Highly recommended for Vue & Laravel projects."
  }
];

let timer;

onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % testimonials.length;
  }, 3000); // 3 sec
});

onUnmounted(() => clearInterval(timer));
</script>