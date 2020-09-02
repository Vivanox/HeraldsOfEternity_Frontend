<template>
  <div>
    <Gallery />

    <Herald-overview />

    <Role-overview />
  </div>
</template>

<script>
import Gallery from '~/components/About/Gallery'
import HeraldOverview from '~/components/About/HeraldOverview'
import RoleOverview from '~/components/About/RoleOverview'

export default {
  components: {
    Gallery,
    HeraldOverview,
    RoleOverview,
  },
}
</script>
