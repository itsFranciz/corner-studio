<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import hero_image from '../assets/hero-sample.jpg'

</script>

<template>

    <main>
      <Header />
        <body class="">
          
          <div class="container hero px-0 min-h-[110vh] mx-auto relative">
    
            <div class="title flex flex-col item-start max-w-60-ch m-0 container xl:px-0">
              <h1 class="text-7xl font-bold mt-20 text-mint-green text-stroke text-shadow-sm shadow-sea-blue font-Quicksand">The best ideas start at the <span class="text-orange">corner.</span></h1>
              <p class="leading-7 min-h-28 font-Rubik font-normal max-w-[600px] self-stretch mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut metus tincidunt, vehicula metus eget, semper nunc. Pellentesque viverra sollicitudin nisl. Vestibulum faucibus quam magna, pellentesque tempor orci sagittis euismod.</p>
              <a href="#" class="text-white font-Rubik bg-crayola focus:outline-none focus:ring-2 focus:ring-gray-300 font-bold rounded px-6 py-3 hover:cursor-pointer self-start mt-12">GET TO KNOW ABOUT US</a>
            </div>
    
            <img :src="hero_image" alt="" class="rounded-tl-3xl mt-10 xl:absolute xl:max-w-[697px] xl:max-h-[465px] xl:bottom-0 xl:right-0"/>
    
          </div>
        </body>
      <Footer />
    </main>

</template>


/* DSC_7707 1 */

position: absolute;
width: 697px;
height: 465px;
left: 743px;
top: 554px;

background: url(DSC_7707.jpg);
border-radius: 30px 0px 0px 0px;


4096 x 2734






