<template>
  <footer class="bg-gray-900 text-white pt-20 pb-8 mt-20">
    <div class="w-[90%] mx-auto">

      <!-- Top -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- Brand -->
        <div>
         <RouterLink to="/" class="text-3xl font-bold">
          Portfolio<span class="text-blue-500">.</span>
        </RouterLink>

          <p class="text-gray-400 leading-7">
            Full Stack Web Developer specializing in Vue.js, PHP, Laravel & 
            WordPress and SEO-friendly website development.
          </p>

          <div class="flex gap-4 mt-6 text-xl">
            <a href="#" class="hover:text-[#F54927] transition">
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" class="hover:text-[#F54927] transition">
              <i class="fa-brands fa-github"></i>
            </a>

            <a href="#" class="hover:text-[#F54927] transition">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="#" class="hover:text-[#F54927] transition">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-semibold mb-5">Quick Links</h3>

          <ul class="space-y-3 text-gray-400">
            <li><RouterLink to="/" class="hover:text-[#F54927]">Home</RouterLink></li>
            <li><RouterLink to="/about" class="hover:text-[#F54927]">About</RouterLink></li>
            <li><RouterLink to="/services" class="hover:text-[#F54927]">Services</RouterLink></li>
            <li><RouterLink to="/blog" class="hover:text-[#F54927]">Blog</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-[#F54927]">Contact</RouterLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-xl font-semibold mb-5">Services</h3>

          <ul class="space-y-3 text-gray-400">
            <li><RouterLink to="/services/frontend" class="hover:text-[#F54927]">Frontend</RouterLink></li>
            <li><RouterLink to="/services/backend" class="hover:text-[#F54927]">Backend</RouterLink></li>
            <li><RouterLink to="/services/fullstack" class="hover:text-[#F54927]">Full Stack</RouterLink></li>
            <li><RouterLink to="/services/wordpress" class="hover:text-[#F54927]">WordPress</RouterLink></li>
            <li><RouterLink to="/services/seo" class="hover:text-[#F54927]">SEO</RouterLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-xl font-semibold mb-5">Contact</h3>

          <div class="space-y-4 text-gray-400">

            <div class="flex gap-3">
              <i class="fa-solid fa-location-dot text-[#F54927] mt-1"></i>
              <span>Shyamoli, Dhaka, Bangladesh</span>
            </div>

            <div class="flex gap-3">
              <i class="fa-solid fa-envelope text-[#F54927] mt-1"></i>
              <span>arif.rasel.1992@email.com</span>
            </div>

            <div class="flex gap-3">
              <i class="fa-solid fa-phone text-[#F54927] mt-1"></i>
              <span>+880 1747691248</span>
            </div>

          </div>
        </div>

      </div>

      <!-- Bottom -->
      <div class="border-t border-zinc-800 mt-12 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-3">

          <p class="text-gray-500 text-sm">
            © 2026 Arifur Rahman. All Rights Reserved.
          </p>

          <div class="flex gap-6 text-sm text-gray-500">
            <a href="#" class="hover:text-[#F54927]">Privacy Policy</a>
            <a href="#" class="hover:text-[#F54927]">Terms & Conditions</a>
          </div>

        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>