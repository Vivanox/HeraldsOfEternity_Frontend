<template>
  <div>
    <Developer-cards />

    <Contributor-cards />

    <Patron-list />
  </div>
</template>

<script>
import DeveloperCards from '~/components/Credits/DeveloperCards'
import ContributorCards from '~/components/Credits/ContributorCards'
import PatronList from '~/components/Credits/PatronList'

export default {
  components: {
    DeveloperCards,
    ContributorCards,
    PatronList,
  },

  async fetch() {
    await this.$store.dispatch('credits/fetch')
  },
}
</script>
