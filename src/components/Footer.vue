<script setup>
import tcs_logo_white from '../assets/tcs_logo_white.png';
</script>

<template>
  <div class="bg-black mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-white">
    <!-- Footer main layout -->
    <div class="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
      
      <!-- Logo and Terms/Privacy section -->
      <div class="md:w-1/3">
        <a href="#" class="flex items-center">
          <img :src="tcs_logo_white" class="mr-3 h-20 w-16" alt="TCS Logo white" />
        </a>
        <div class="mt-4">
          <a href="#" class="block text-sm text-white hover:underline">Terms of Service</a>
          <a href="#" class="block text-sm text-white hover:underline">Privacy Policy</a>
        </div>
      </div>

      <!-- Sitemap section -->
      <div class="md:w-1/3">
        <h3 class="text-lg font-bold mb-4">Sitemap</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-sm text-white hover:underline">Studio</a></li>
          <li><a href="#" class="text-sm text-white hover:underline">Events</a></li>
          <li><a href="#" class="text-sm text-white hover:underline">Contact Us</a></li>
        </ul>
      </div>

      <!-- Contact Info section -->
      <div class="md:w-1/3">
        <h3 class="text-lg font-bold mb-4">Contact Us</h3>
        <p class="text-sm">
          <i class="fa-solid fa-phone me-2"></i> (+63) 912 3456 789 <br />
          <i class="fa-solid fa-envelope me-2"></i> cornerstudio432@gmail.com
        </p>

        <hr class="my-6 border-b border-white sm:mx-auto" />

        <p class="text-sm">
          <a href="https://www.facebook.com/thecornerstudio.432" class="block text-sm text-white underline">
            <i class="fa-brands fa-facebook me-2"></i>The Corner Studio
          </a>
          <a href="https://www.instagram.com/thecornerstudio432/" class="block text-sm text-white underline">
            <i class="fa-brands fa-instagram me-2"></i>@thecornerstudio432
          </a>
          <a href="https://www.tiktok.com/@thecornerstudio432" class="block text-sm text-white underline">
            <i class="fa-brands fa-tiktok me-2"></i>@thecornerstudio432
          </a>
        </p>
      </div>
    </div>

    <!-- Footer bottom line -->
    <div class="text-center mt-6">
      <hr class="my-6 border-white sm:mx-auto" />
      <div class="flex items-center justify-center">
        <span class="text-sm">
          © 2024 Corner Studio. All Rights Reserved.
        </span>
      </div>
    </div>
  </div>
</template>
