<script setup>
import sample from '../assets/sample.jpg'
</script>

<template>
    <div class="p-4">
    <h1 class="font-Quicksand text-[#CBF3F0] text-shadow-sm text-stroke text-5xl mb-6">
      Events at the Corner
    </h1>
    
    <!-- Flex container for event cards -->
    <div class="flex flex-wrap justify-start gap-4">

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img class="rounded-t-lg" :src="sample" alt="Card Image 1" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Event 1</h5>
                </a>
                
                <!-- Location and Time -->
                <div class="mb-3 text-sm font-medium text-gray-700">
                    <p1>Location: The Corner Studio</p1>
                    <p>Time: September 30, 2024, 7:00 PM</p>
                </div>

                <!-- Event Details -->
                <p class="mb-3 font-normal text-gray-700">
                    Join us for an exciting evening filled with great performances, insightful discussions, and fun activities!
                </p>
                
                <!-- Buy Tickets Button -->
                <a href="#" class="text-white hover:bg-white border border-[#F79300] hover:text-[#F79300] focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 bg-[#F79300]"> 
                    BUY TICKETS
                </a>
            </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img class="rounded-t-lg" :src="sample" alt="Card Image 1" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Event 2</h5>
                </a>
                
                <!-- Location and Time -->
                <div class="mb-3 text-sm font-medium text-gray-700">
                    <p1>Location: The Corner Studio</p1>
                    <p>Time: September 30, 2024, 7:00 PM</p>
                </div>

                <!-- Event Details -->
                <p class="mb-3 font-normal text-gray-700">
                    Join us for an exciting evening filled with great performances, insightful discussions, and fun activities!
                </p>
                
                <!-- Buy Tickets Button -->
                <a href="#" class="text-white hover:bg-white border border-[#F79300] hover:text-[#F79300] focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 bg-[#F79300]"> 
                    BUY TICKETS
                </a>
            </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img class="rounded-t-lg" :src="sample" alt="Card Image 1" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Event 3</h5>
                </a>
                
                <!-- Location and Time -->
                <div class="mb-3 text-sm font-medium text-gray-700">
                    <p1>Location: The Corner Studio</p1>
                    <p>Time: September 30, 2024, 7:00 PM</p>
                </div>

                <!-- Event Details -->
                <p class="mb-3 font-normal text-gray-700">
                    Join us for an exciting evening filled with great performances, insightful discussions, and fun activities!
                </p>
                
                <!-- Buy Tickets Button -->
                <a href="#" class="text-white hover:bg-white border border-[#F79300] hover:text-[#F79300] focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 bg-[#F79300]"> 
                    BUY TICKETS
                </a>
            </div>
        </div>

    </div>

    
  </div>
</template>
