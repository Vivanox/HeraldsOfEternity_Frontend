<template>
  <card class="flex flex-col lg:flex-row mt-4">
    <div class="w-full xl:pl-8 mb-4 xl:w-3/4 rounded-full shadow-lg">
      <vue-slick-carousel
        :accessibility="true"
        :arrows="true"
        :dots="true"
        :center-mode="true"
        center-padding="20px"
        :slides-to-show="3"
        :pause-on-hover="true"
        :autoplay="true"
        :infinite="true"
        lazy-load="ondemand"
      >
        <img class="px-2" src="/gallery/Back.png" alt />
        <img class="px-2" src="/gallery/Back.png" alt />
        <img class="px-2" src="/gallery/Back.png" alt />

        <img class="px-2" src="/gallery/Back.png" alt />
        <img class="px-2" src="/gallery/Back.png" alt />
        <img class="px-2" src="/gallery/Back.png" alt />

        <img class="px-2" src="/gallery/Back.png" alt />
        <img class="px-2" src="/gallery/Back.png" alt />
        <img class="px-2" src="/gallery/Back.png" alt />

        <template #prevArrow>
          <svg fill="none" viewBox="0 0 24 24" stroke="white">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </template>

        <template #nextArrow>
          <svg fill="none" viewBox="0 0 24 24" stroke="white">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </template>
      </vue-slick-carousel>
    </div>

    <div class="w-full pr-2 xl:w-1/4 p-4 text-white">
      <heading>Welcome to Heralds of Eternity</heading>
      <paragraph>Heralds of Eternity is a team-based:</paragraph>
      <ul class="list-disc pl-4">
        <li>Deathmatch</li>
        <li>Capture the flag</li>
        <li>And Domination</li>
      </ul>
      <paragraph>Game with a twist.</paragraph>
      <paragraph
        >Play view a top-down, first-person or third-person view.</paragraph
      >
      <paragraph>We offer 16 <b>powerful</b> Heralds,</paragraph>
      <paragraph>Ready to be played in a 8 vs 8 game.</paragraph>
    </div>
  </card>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

import Card from '~/components/Card'
import Heading from '~/components/Typography/Heading'
import Paragraph from '~/components/Typography/Paragraph'

export default {
  components: {
    Card,
    Heading,
    Paragraph,
    VueSlickCarousel,
  },
}
</script>
