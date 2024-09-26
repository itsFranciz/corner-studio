<script setup>

import sample from '../assets/sample.jpg'

// Sample event data
const events = [
    {
        id: 1,
        title: 'Sample Night II',
        location: 'The Corner Studio',
        date: 'September 30, 2024, 7:00 PM',
        description: 'Join us for an exciting evening filled with great performances, insightful discussions, and fun activities!',
        image: sample,
        link: '#',
    },
    {
        id: 2,
        title: 'Quiz Night',
        location: 'The Corner Studio',
        date: 'October 1, 2024, 8:00 PM',
        description: 'Join us for a fun-filled quiz night with exciting prizes for the winners!',
        image: sample,
        link: '#',
    },
    {
        id: 3,
        title: 'Sample Night III: The Test',
        location: 'The Corner Studio',
        date: 'October 5, 2024, 7:30 PM',
        description: 'An evening of great music and performances awaits you!',
        image: sample,
        link: '#',
    },
    {
        id: 4,
        title: 'Sample Night IV',
        location: 'The Corner Studio',
        date: 'October 10, 2024, 7:00 PM',
        description: 'Enjoy a relaxing evening filled with art, music, and wonderful performances!',
        image: sample,
        link: '#',
    },
];
</script>

<template>
    <div class="p-6">
        <!-- Main heading -->
        <h1 class="font-Quicksand text-[#CBF3F0] text-shadow-sm shadow-sea-blue text-stroke text-5xl mb-6">
            Events at the Corner
        </h1>
    
        <!-- Flex container for event cards -->
        <div class="flex flex-wrap justify-center sm:justify-between gap-4">
            
            <!-- Loop through events -->
            <div v-for="event in events" :key="event.id" class="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] bg-white border border-black shadow">
                <a :href="event.link">
                    <img class="rounded-t-lg p-4 w-full h-auto" :src="event.image" :alt="`Card Image for ${event.title}`" />
                </a>
                <div class="p-5">
                    <a :href="event.link">
                        <h5 class="mb-2 text-2xl font-Rubik font-bold tracking-tight text-gray-900">{{ event.title }}</h5>
                    </a>
                    <!-- Location and Time -->
                    <div class="mb-3 text-sm font-medium font-Rubik text-[#B6B5BB]">
                        <p><i class="fa-solid fa-location-dot"></i> {{ event.location }}</p>
                        <p><i class="fa-solid fa-clock"></i> {{ event.date }}</p>
                    </div>
                    <!-- Event Details -->
                    <p class="mb-3 font-normal font-Rubik text-black">
                        {{ event.description }}
                    </p>
                    <!-- Buy Tickets Button -->
                    <div class="flex justify-center">
                        <a :href="event.link" 
                        class="w-full sm:w-48 text-white font-Rubik bg-[#F79300] hover:bg-white hover:text-[#F79300] focus:outline-none focus:ring-2 focus:ring-[#F79300] font-bold rounded px-5 py-2.5 hover:cursor-pointer text-center transition-colors duration-300">
                            BUY TICKETS
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
=======

</script>


<template>
<div class="max-w-screen-xl mx-auto p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="Card Image 1" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <!-- Repeat the card structure for the remaining cards -->
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-2.jpg" alt="Card Image 2" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Innovative Solutions in 2021</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Discover the most innovative solutions that have emerged this year.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-3.jpg" alt="Card Image 3" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tech Trends to Watch</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore the top technology trends that will shape the future.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-4.jpg" alt="Card Image 4" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Future of Tech</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Insights into the future of technology and innovation.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>

</template>






