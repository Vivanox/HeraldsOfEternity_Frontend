<template>
  <div>
    <FrequentlyAskedQuestions />

    <ContactRequest class="mt-48" />

    <div class="mx-auto container flex justify-center px-4 mt-48">
      <div class="mx-auto">
        <Heading class="text-xl md:text-3xl text-center text-white">{{
          $t('Contact Vivanox Studio')
        }}</Heading>

        <span class="flex items-center text-white text-3xl mt-6">
          <svg
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="miter"
              stroke-linejoin="miter"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="miter"
              stroke-linejoin="miter"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span class="text-center pl-8">
            <Paragraph>Odderupvej 16</Paragraph>
            <Paragraph>6880</Paragraph>
            <Paragraph>Tarm, Denmark</Paragraph>
          </span>
        </span>

        <span class="flex text-white mt-6 text-3xl">
          <svg class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>

          <Paragraph class="pl-8">+45 20 32 95 96</Paragraph>
        </span>
      </div>

      <div class="mx-auto container hidden md:block h-64 w-64">
        <no-ssr>
          <l-map :zoom="9" :map="19" :center="[55.86262, 8.61428]">
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
            <l-marker :lat-lng="[55.86262, 8.61428]">
              <l-tooltip>Vivanox Studio</l-tooltip>
            </l-marker>
          </l-map>
        </no-ssr>
      </div>
    </div>

    <Heading
      class="mt-12 text-white text-center text-lg md:text-3xl lg:text-6xl"
    >
      {{ $t('Join the HOE Community') }}
    </Heading>
  </div>
</template>

<script>
import ContactRequest from '~/components/Contact/ContactRequest'

export default {
  components: {
    ContactRequest,
  },
}
</script>
