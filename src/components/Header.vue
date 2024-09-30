<script setup>
import { ref } from 'vue';
import tcs_logo from '../assets/tcs_logo.png';

// Reactive variable to control the menu visibility
const isMenuOpen = ref(false);

// Function to toggle menu visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="border-gray-200 bg-white shadow-lg">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mb-4 xl:px-0 container">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="tcs_logo" class="h-20" alt="Corner Studio Logo" />
      </a>
      <button 
        @click="toggleMenu" 
        type="button" 
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="w-full md:block md:w-auto b-5" id="navbar-solid-bg">
        <ul class="flex flex-col font-medium font-Rubik text-base mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent gap-7">
          <li>
            <a href="#" class="block py-2 px-3 md:p-0 text-black hover:underline rounded">STUDIO</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 md:p-0 text-black hover:underline rounded">EVENTS</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 md:p-0 text-black hover:underline rounded">CONTACT</a>
          </li>
          <li>
            <a href="#" class="text-white font-Rubik bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 font-bold rounded px-3 py-1.5 hover:cursor-pointer">BOOK NOW</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

