<template>
  <StyledButton @click="downloadClient">
    {{ $t('Play Now') }}
  </StyledButton>
</template>

<script>
export default {
  methods: {
    downloadClient() {
      if (navigator.platform.includes('Win')) {
        window.open(
          'https://drive.google.com/file/d/1UfDtLWOum0RkAZ8-nCAC2_w7xdoppH8U/view?usp=sharing'
        )
      } else if (navigator.platform.includes('Lin')) {
        window.open(
          'https://drive.google.com/file/d/1RUkuzQyKQ43PcXfdsdem2ulkhlE6MAIo/view?usp=sharing'
        )
      } else {
        window.alert('No client for your OS, yet.')
      }
    },
  },
}
</script>
