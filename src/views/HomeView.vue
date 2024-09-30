<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import hero_image from '../assets/hero-sample.jpg'

import Events from '@/components/Events.vue'



</script>

<template>



      <Header />
        <body class="">
          
          <div class="container max-w-screen-xl hero min-h-[110vh] mx-auto relative 2xl:mx-auto xl:px-10 lg:px-0">
    
            <div class="title flex flex-col item-start max-w-60-ch m-0 container xl:px-0">
              <h1 class="text-7xl font-bold mt-20 text-mint-green text-stroke text-shadow-sm shadow-sea-blue font-Quicksand">The best ideas start at the <span class="text-orange">corner.</span></h1>
              <p class="leading-7 min-h-28 font-Rubik font-normal max-w-[600px] self-stretch mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut metus tincidunt, vehicula metus eget, semper nunc. Pellentesque viverra sollicitudin nisl. Vestibulum faucibus quam magna, pellentesque tempor orci sagittis euismod.</p>
              <a href="#" class="text-white font-Rubik bg-crayola focus:outline-none focus:ring-2 focus:ring-gray-300 font-bold rounded px-6 py-3 hover:cursor-pointer self-start mt-12">GET TO KNOW ABOUT US</a>
            </div>
    
            <img :src="hero_image" alt="" class="rounded-tl-3xl mt-10 lg:absolute xl:max-w-[697px] xl:max-h-[465px] lg:bottom-0 lg:right-0 lg:max-w-[597px] lg:max-h-[365px] lg:mt-0"/>
    
          </div>

          <div class="ourStudio min-h-[50svh] bg-papaya-whip">

            <!-- <div class="container"> -->
              <div class="text-content container items-center flex flex-col mx-auto gap-16  justify-center text-center">
                <h1 class="font-Quicksand font-bold text-crayola text-5xl leading-10 text-stroke-crayola text-shadow-sm shadow-sea-blue mt-32">Innovating Ideas, Shaping Experiences.</h1>
                <p class="max-w-[70ch] leading-5 font-Rubik text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut metus tincidunt, vehicula metus eget, semper nunc. Pellentesque viverra sollicitudin nisl. Vestibulum faucibus quam magna, pellentesque tempor orci sagittis euismod.</p>

                <a href="#" class="text-white font-Rubik bg-orange focus:outline-none focus:ring-2 focus:ring-gray-300 font-bold rounded px-7 py-3 hover:cursor-pointer tracking-wide">BOOK OUR STUDIO</a>
              </div>
             



            <div class="pictures">
              pictures
            </div>


          </div>
          
          <Events />
          
        </body>
      <Footer />

</template>







