<script setup>
import tcs_logo_white from '../assets/tcs_logo_white.png';
</script>

<template>
  <div class="bg-black w-full p-4 lg:p-6 text-white">
    <!-- Footer main layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
      
      <!-- Logo and Terms/Privacy section -->
      <div class="text-center md:text-left">
        <a href="#" class="flex justify-center md:justify-start items-center">
          <img :src="tcs_logo_white" class="h-32 md:h-40 w-auto " alt="TCS Logo white" />
        </a>
        <div class="mt-3">
          <a href="#" class="block text-sm text-white hover:underline">Terms of Service</a>
          <a href="#" class="block text-sm text-white hover:underline">Privacy Policy</a>
        </div>
      </div>

      <!-- Sitemap section -->
      <div class="text-center md:text-left">
        <h3 class="text-lg font-Rubik font-bold mb-4">Sitemap</h3>
        <ul class="space-y-2">
          <li><a href="#" class="font-Rubik text-sm text-white hover:underline">Studio</a></li>
          <li><a href="#" class="font-Rubik text-sm text-white hover:underline">Events</a></li>
          <li><a href="#" class="font-Rubik text-sm text-white hover:underline">Contact Us</a></li>
        </ul>
      </div>

      <!-- Contact Info section -->
      <div class="text-center md:text-left">
        <h3 class="text-lg font-Rubik font-bold mb-4">Contact Us</h3>
        <p class="font-Rubik text-sm">
          <i class="fa-solid fa-phone me-2"></i> (+63) 912 3456 789 <br />
          <i class="fa-solid fa-envelope me-2"></i> cornerstudio432@gmail.com
        </p>

        <hr class="my-6 border-b border-white" />

        <p class="font-Rubik text-sm space-y-2">
          <a href="https://www.facebook.com/thecornerstudio.432" target="_blank" class="block text-sm text-white underline hover:no-underline">
            <i class="fa-brands fa-facebook me-2"></i>The Corner Studio
          </a>
          <a href="https://www.instagram.com/thecornerstudio432/" target="_blank" class="block text-sm text-white underline hover:no-underline">
            <i class="fa-brands fa-instagram me-2"></i>@thecornerstudio432
          </a>
          <a href="https://www.tiktok.com/@thecornerstudio432" target="_blank" class="block text-sm text-white underline hover:no-underline">
            <i class="fa-brands fa-tiktok me-2"></i>@thecornerstudio432
          </a>
        </p>
      </div>
    </div>

    <!-- Footer bottom line -->
    <div class="mt-10">
      <hr class="border-white" />
      <div class="text-center mt-4">
        <span class="font-Rubik text-sm">
          © 2024 Corner Studio. All Rights Reserved.
        </span>
      </div>
    </div>
  </div>
</template>
