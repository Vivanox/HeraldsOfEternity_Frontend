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
          'https://drive.google.com/file/d/1hBZKjnpLEBgHQVjLbOQql5TiKG2rtoxU/view?usp=sharing'
        )
      } else if (navigator.platform.includes('Lin')) {
        window.open(
          'https://drive.google.com/file/d/1Ov3zpplX7DqEg5c582ZxGc_ksfs36lIi/view?usp=sharing'
        )
      } else {
        window.alert('No client for your OS, yet.')
      }
    },
  },
}
</script>
