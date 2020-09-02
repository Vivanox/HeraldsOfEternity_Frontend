<template>
  <div>
    <IngameFootage />

    <HashTags />

    <SignupForNewsletter />

    <div class="flex items-center justify-center py-10">
      <span class="inline-flex bg-orange-500 group p-2">
        <button
          type="button"
          class="inline-flex items-center px-48 py-10 border-4 border-black text-6xl leading-6 font-bold text-white bg-orange-400 group-hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition ease-in-out duration-150"
          @click="downloadClient"
        >
          {{ $t('Play Now') }}
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import IngameFootage from '~/components/Index/IngameFootage'
import HashTags from '~/components/Index/HashTags'
import SignupForNewsletter from '~/components/Index/SignupForNewsletter'

export default {
  components: {
    IngameFootage,
    HashTags,
    SignupForNewsletter,
  },

  methods: {
    downloadClient() {
      if (navigator.platform.includes('Win')) {
        window.open(
          'https://drive.google.com/file/d/1y4uRJ7zPMycCZcx5ceJ7SFxjGvGi8yK2/view'
        )
      } else if (navigator.platform.includes('Lin')) {
        window.open(
          'https://drive.google.com/file/d/1hjl7x2mpqz7J0nu8QNW_pFhXgqcFnwC0/view?usp=sharing'
        )
      } else {
        window.alert('No client for your OS, yet.')
      }
    },
  },
}
</script>
