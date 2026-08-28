<template>
  <section class="bg-gray-800  py-20">

    <div class="text-center mb-14">
        <h2 class="text-5xl font-bold mb-6">
          <span class="text-white">My</span>
          <span class="text-blue-600"> Contact</span>
        </h2>
        <div class="w-36 h-1 bg-white mx-auto mt-2 rounded-full mb-6"></div>
         <p class="text-gray-300 max-w-2xl mx-auto">
         For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email contact@domain.com
        </p>
      </div>

    <div
      class="w-[90%] mx-auto bg-[#0B1020] rounded-[30px] p-8 lg:p-14 relative overflow-hidden"
    >
      <!-- Glow -->
      <div class="absolute -top-20 -left-20 w-72 h-72 bg-[#F54927]/20 blur-3xl rounded-full"></div>
      <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-[#F54927]/10 blur-3xl rounded-full"></div>

      <div class="grid lg:grid-cols-2 gap-12 relative z-10">
        <!-- Left -->
        <div class="text-white">
          <p class="text-blue-600 uppercase tracking-[3px] text-sm font-semibold mb-4">
            Get In Touch
          </p>

          <h2 class="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Let's Work <br />
            together
          </h2>

          <p class="text-gray-400 leading-8 mb-10">
            I'm open to Full Stack Web Development missions, short or long-term.
            Landing pages, full product redesign, or just a second pair of
            eyes — let's talk.
          </p>

          <!-- Contact Info -->
          <div class="space-y-5">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <i class="fa-regular fa-envelope text-[#F54927]"></i>
              </div>
              <span class="text-gray-300">arif.rasel.1992@gmail..com</span>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <i class="fa-brands fa-linkedin-in text-[#F54927]"></i>
              </div>
              <span class="text-gray-300">https://www.linkedin.com/in/md-arifur-rahman-833b16214/</span>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <i class="fa-brands fa-github text-[#F54927]"></i>
              </div>
              <span class="text-gray-300">https://github.com/Arifur-Rahman-95</span>
            </div>
          </div>
        </div>

        <!-- Right Form -->
        <form class="space-y-5">
          <div class="grid md:grid-cols-2 gap-5">
            <div>
              <label class="text-sm text-gray-300 mb-2 block">Name *</label>
              <input
                type="text"
                placeholder="Your Name"
                class="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F54927]"
              />
            </div>

            <div>
              <label class="text-sm text-gray-300 mb-2 block">Email *</label>
              <input
                type="email"
                placeholder="Your Email"
                class="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F54927]"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-5">
            <div>
              <label class="text-sm text-gray-300 mb-2 block">phone*</label>
              <input
                type="tel"
                placeholder="Your phone Number"
                class="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F54927]"
              />
            </div>

            <div>
              <label class="text-sm text-gray-300 mb-2 block">status *</label>
              <input
                type="text"
                placeholder="Your status"
                class="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F54927]"
              />
            </div>
          </div>

          <div>
            <label class="text-sm text-gray-300 mb-2 block">Subject</label>
            <input
              type="text"
              placeholder="Project inquiry"
              class="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F54927]"
            />
          </div>

          <div>
            <label class="text-sm text-gray-300 mb-2 block">Message *</label>
            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              class="w-full bg-white/5 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-[#F54927]"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-black text-white font-semibold py-4 rounded-2xl transition duration-300"
          >
            Send Message →
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup></script>