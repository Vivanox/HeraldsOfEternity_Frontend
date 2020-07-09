<template>
  <div>
    <Gallery />

    <Herald-overview />

    <Role-overview />
  </div>
</template>

<script>
import Gallery from '~/components/Index/Gallery'
import HeraldOverview from '~/components/Index/HeraldOverview'
import RoleOverview from '~/components/Index/RoleOverview'

export default {
  components: {
    Gallery,
    HeraldOverview,
    RoleOverview,
  },
}
</script>
