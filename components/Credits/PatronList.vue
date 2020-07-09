<template>
  <card class="flex flex-col justify-center mt-4 text-white">
    <heading class="mb-4 self-center">{{ $t('Patrons') }}</heading>

    <sub-heading>{{ $t('Thanks to') }}...</sub-heading>
    <ul class="list-disc mt-2">
      <li v-for="(patron, index) in patrons" :key="index">{{ patron.name }}</li>
    </ul>
  </card>
</template>

<script>
import { mapState } from 'vuex'
import Card from '~/components/Card'
import Heading from '~/components/Typography/Heading'
import SubHeading from '~/components/Typography/SubHeading'

export default {
  components: {
    Card,
    Heading,
    SubHeading,
  },

  computed: {
    ...mapState({
      patrons: (state) => state.credits.patrons,
    }),
  },
}
</script>
