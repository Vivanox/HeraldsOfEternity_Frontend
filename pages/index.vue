<template>
  <div>
    <IngameFootage />

    <HashTags />

    <SignupForNewsletter />

    <div class="flex items-center justify-center py-10">
      <DownloadClientButton />
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
}
</script>
