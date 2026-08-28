<template>
  <section class="bg-gray-800">
    <!-- Hero -->
    <div class="bg-[#07152D] py-24">
      <div class="w-[90%] mx-auto text-center text-white">
        <p class="inline-block bg-white text-[#2979FF] text-xs font-semibold px-4 py-2 rounded-full mb-6">
          SERVICE
        </p>

        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          Web Development
        </h1>

        <p class="text-gray-400 max-w-3xl mx-auto leading-8">
          I build responsive, fast and SEO-friendly websites using Vue.js,
          Tailwind CSS, PHP and Laravel with modern UI/UX.
        </p>
      </div>
    </div>

    <!-- Content -->
    <div class="w-[90%] mx-auto py-20 ">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- Image -->
        <div>
          <img
            src="../../assets/image/banner.jpeg"
            class="w-full rounded-3xl shadow-xl"
            alt="Web Development"
          />
        </div>

        <!-- Details -->
        <div>
          <h2 class="text-4xl font-bold text-gray-200 mb-6">
            Modern Website Development
          </h2>

          <p class="text-gray-300 leading-8 mb-8">
            I develop professional business websites, landing pages, portfolios,
            and custom web applications that are fully responsive, optimized for
            performance, and built with clean, maintainable code.
          </p>

          <div class="grid grid-cols-2 gap-5 text-white">
            <div class="flex items-center gap-3">
              <i class="fa-solid fa-check text-gray-500"></i>
              <span>Responsive Design</span>
            </div>

            <div class="flex items-center gap-3">
              <i class="fa-solid fa-check text-gray-500"></i>
              <span>Vue.js</span>
            </div>

            <div class="flex items-center gap-3">
              <i class="fa-solid fa-check text-gray-500"></i>
              <span>Tailwind CSS</span>
            </div>

            <div class="flex items-center gap-3">
              <i class="fa-solid fa-check text-gray-500"></i>
              <span>PHP & Laravel</span>
            </div>

            <div class="flex items-center gap-3">
              <i class="fa-solid fa-check text-gray-500"></i>
              <span>SEO Friendly</span>
            </div>

            <div class="flex items-center gap-3">
              <i class="fa-solid fa-check text-gray-500"></i>
              <span>Fast Loading</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Features -->
      <div class="mt-24">
        <div class="text-center mb-14">
          <p class="text-blue-600 font-semibold uppercase tracking-[3px]">
            Features
          </p>

          <h2 class="text-5xl font-bold mt-3 text-white">
            What's Included
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div class="group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-[#2979FF] hover:-translate-y-3 transition-all duration-300 shadow-sm hover:shadow-xl">
            <i class="fa-solid fa-laptop-code text-4xl text-[#F54927] mb-5"></i>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-[#2979FF]">
              Custom UI
            </h3>
            <p class="text-gray-600">
              Pixel-perfect responsive interface with modern design.
            </p>
          </div>

          <div class="group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-[#2979FF] hover:-translate-y-3 transition-all duration-300 shadow-sm hover:shadow-xl">
            <i class="fa-solid fa-mobile-screen text-4xl text-[#F54927] mb-5"></i>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-[#2979FF]">
              Mobile First
            </h3>
            <p class="text-gray-600">
              Optimized for mobile, tablet and desktop devices.
            </p>
          </div>

          <div class="group bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-[#2979FF] hover:-translate-y-3 transition-all duration-300 shadow-sm hover:shadow-xl">
            <i class="fa-solid fa-gauge-high text-4xl text-[#F54927] mb-5"></i>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-[#2979FF]">
              Performance
            </h3>
            <p class="text-gray-600">
              Fast loading pages with clean and optimized code.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>