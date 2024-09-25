<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Events from '@/components/Events.vue'


</script>

<template>
  <main>
    <Header />
    <div class="w-screen h-screen bg-gray-200 flex items-center justify-center">
    <h1 class="font-quicksand font-bold text-h1">Heading 1 - Quicksand Bold 48px</h1>
<h2 class="font-quicksand font-bold text-h2">Heading 2 - Quicksand Bold 32px</h2>

<h3 class="font-rubik font-bold text-h3">Heading 3 - Rubik Bold 24px</h3>
<h3 class="font-rubik font-medium text-h3">Heading 3 - Rubik Medium 24px</h3>

<h4 class="font-rubik font-bold text-h4">Heading 4 - Rubik Bold 16px</h4>
<h4 class="font-rubik font-medium text-h4">Heading 4 - Rubik Medium 16px</h4>

<h5 class="font-rubik font-regular text-h4">Heading 5 - Rubik Regular 16px</h5>
<h5 class="font-rubik font-medium text-h5">Heading 5 - Rubik Medium 14px</h5>

<h6 class="font-rubik font-regular text-h6">Heading 6 - Rubik Regular 14px</h6>
<h6 class="font-rubik font-regular text-h6">Heading 6 - Rubik Regular 12px</h6>

    </div>
    <Footer />
  </main>
</template>
