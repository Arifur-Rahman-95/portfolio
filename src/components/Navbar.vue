<template>
  <nav class="bg-gray-900 text-white shadow-lg fixed top-0 left-0  w-full z-50" >
    <div class="max-w-7xl w-[90%] mx-auto ">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <RouterLink to="/" class="text-3xl font-bold">
          Portfolio<span class="text-blue-500">.</span>
        </RouterLink>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-8 font-medium">
          <li>
            <RouterLink
              to="/"
              class="hover:text-blue-500 duration-300"  active-class="text-blue-500 font-semibold">
              Home
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/about"
              class="hover:text-blue-500 duration-300"   active-class="text-blue-500 font-semibold" >
              About
            </RouterLink>
          </li>

         <!-- Services Dropdown -->
<li class="relative group">
  <button class="flex items-center gap-1 hover:text-blue-500 duration-300">
    Services
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  <ul class="absolute left-0 mt-3 w-64 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

    <li>
      <RouterLink to="/services/web-development"
        class="block px-5 py-3 hover:bg-zinc-800 hover:text-blue-500">
        Web Development
      </RouterLink>
    </li>

    <li>
      <RouterLink to="/services/wordpress"
        class="block px-5 py-3 hover:bg-zinc-800 hover:text-blue-500">
        WordPress Development
      </RouterLink>
    </li>

    <li>
      <RouterLink to="/services/seo"
        class="block px-5 py-3 hover:bg-zinc-800 hover:text-blue-500">
        SEO Optimization
      </RouterLink>
    </li>

    <li>
      <RouterLink to="/services/uiux"
        class="block px-5 py-3 hover:bg-zinc-800 hover:text-blue-500">
       Digital Marketing
      </RouterLink>
    </li>

  </ul>
</li>

          <li>
            <RouterLink
              to="/blog"
              class="hover:text-blue-500 duration-300" active-class="text-blue-500 font-semibold" >
              Blog
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/contact"
              class="hover:text-blue-500 duration-300" active-class="text-blue-500 font-semibold" >
              Contact
            </RouterLink>
          </li>
        </ul>

        <!-- Hire Button -->
       

        <!-- Mobile Toggle -->
        <button @click="isOpen = !isOpen" class="md:hidden">
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"  >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"  >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isOpen"
      class="md:hidden bg-zinc-900 border-t border-zinc-800" >
      <ul class="flex flex-col px-6 py-5 space-y-4 font-medium">
        <li>
          <RouterLink
            @click="closeMenu"
            to="/"
            class="block"  active-class="text-blue-500 font-semibold"  >
            Home
          </RouterLink>
        </li>

        <li>
          <RouterLink
            @click="closeMenu"
            to="/about"
            class="block" active-class="text-blue-500 font-semibold">
            About
          </RouterLink>
        </li>

        <!-- Services Dropdown -->
<li class="relative group">
  <button
  @click="serviceOpen = !serviceOpen"
  class="w-full flex items-center gap-2 hover:text-blue-500 duration-300"
>
  Services

  <svg
    class="w-4 h-4 duration-300"
    :class="{ 'rotate-180': serviceOpen }"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M19 9l-7 7-7-7"/>
  </svg>
</button>

 <ul v-show="serviceOpen" class="pl-4 mt-3 space-y-2 border-l">
  <li><RouterLink @click="closeMenu" to="/services/web-development" class="block py-2">Web Development</RouterLink></li>

  <li><RouterLink @click="closeMenu" to="/services/wordpress" class="block py-2">WordPress Development</RouterLink></li>

  <li><RouterLink @click="closeMenu" to="/services/seo" class="block py-2">SEO Optimization</RouterLink></li>

  <li><RouterLink @click="closeMenu" to="/services/uiux" class="block py-2">UI / UX Design</RouterLink></li>
</ul>
</li>

        <li>
          <RouterLink
            @click="closeMenu"
            to="/blog"
            class="block" active-class="text-blue-500 font-semibold" >
            Blog
          </RouterLink>
        </li>

        <li>
          <RouterLink
            @click="closeMenu"
            to="/contact"
            class="block"  active-class="text-blue-500 font-semibold" >
            Contact
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const serviceOpen = ref(false);

const closeMenu = () => {
  isOpen.value = false;
  serviceOpen.value = false;
};
</script>