<template>
  <div class="container mx-auto bg-dark-blue flex flex-col">
    <h1
      class="self-center tracking-wide leading-3 text-white mt-10 mb-5 text-5xl"
    >
      {{ $t('Meet our team') }}
    </h1>

    <div
      v-for="(segment, segmentIndex) in credits"
      :key="segmentIndex"
      :class="segmentIndex % 2 === 0 ? 'bg-dark-blue' : 'bg-block-gray'"
    >
      <CreditGroupCard
        v-for="(creditables, group) in segment"
        :key="group"
        :group="group"
        :creditables="creditables"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch() {
    await this.$store.dispatch('credits/fetch')
  },

  computed: {
    ...mapState({
      credits: (state) => state.credits.credits,
    }),
  },
}
</script>
