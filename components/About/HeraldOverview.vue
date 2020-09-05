<template>
  <card class="container mx-auto text-white flex flex-col justify-center">
    <span class="mb-4 text-center">
      <heading>{{ $t('When choosing your herald') }}</heading>

      <paragraph class="mt-4"
        >{{ $t('As soon as you enter a game') }},</paragraph
      >
      <paragraph
        >{{ $t('You will need to choose a Herald to play') }}.</paragraph
      >
    </span>

    <img
      class="bg-white-smoke opacity-75 shadow-lg rounded-md max-w-6xl max-h-full"
      src="/football-team.png"
      alt="Team of Heralds"
    />

    <StyledButton class="mt-4 self-center">
      <nuxt-link :to="{ path: '/heralds' }">
        {{ $t('View all Heralds') }}
      </nuxt-link>
    </StyledButton>
  </card>
</template>

<script>
import Card from '~/components/Card'
import Heading from '~/components/Typography/Heading'
import Paragraph from '~/components/Typography/Paragraph'

export default {
  components: {
    Card,
    Heading,
    Paragraph,
  },
}
</script>
