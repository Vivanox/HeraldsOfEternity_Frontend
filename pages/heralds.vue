<template>
  <div class="container mx-auto flex flex-col">
    <h1
      class="self-center tracking-wide leading-3 text-white mt-10 mb-10 text-5xl"
    >
      {{ $t('Choose your Herald') }}
    </h1>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      <nuxt-link
        v-for="herald in heralds"
        :key="herald.name"
        :to="{ path: `/heralds/${herald.name}` }"
        class="border border-orange-gold bg-dark-blue"
      >
        <img :src="herald.photo" />
      </nuxt-link>
    </div>

    <DownloadClientButton class="mt-10 mb-10 self-center" />
  </div>
</template>

<script>
export default {
  data: () => ({
    heralds: [
      {
        name: 'Nujani',
        photo: '/heralds/Nujani_Transparent_No_Border.png',
      },
      {
        name: 'Corrupt',
        photo: '/heralds/Corrupt_Transparent_No_Border.png',
      },
      {
        name: 'Laria',
        photo: '/heralds/Laria_Transparent_No_Border.png',
      },
      {
        name: 'Hawk',
        photo: '/heralds/Hawk_Transparent_No_Border.png',
      },
      {
        name: 'Kiki',
        photo: '/heralds/Kiki_Transparent_No_Border.png',
      },
      {
        name: 'KW',
        photo: '/heralds/KW_Transparent_No_Border.png',
      },
      {
        name: 'Gunther',
        photo: '/heralds/Gunther_Transparent_No_Border.png',
      },
      {
        name: 'Lillith',
        photo: '/heralds/Lillith_Transparent_No_Border.png',
      },
      {
        name: 'Metal',
        photo: '/heralds/Metal_Transparent_No_Border.png',
      },
      {
        name: 'Mr. Bobble',
        photo: '/heralds/MrBobble_Transparent_No_Border.png',
      },
      {
        name: 'Alandia',
        photo: '/heralds/Alandia_Transparent_No_Border.png',
      },
      {
        name: 'Sharira',
        photo: '/heralds/Sharira_Transparent_No_Border.png',
      },
      {
        name: 'Shay',
        photo: '/heralds/Shay_Transparent_No_Border.png',
      },
      {
        name: 'Shiva',
        photo: '/heralds/Shiva_Transparent_No_Border.png',
      },
      {
        name: 'Tls',
        photo: '/heralds/Tls_Transparent_No_Border.png',
      },
      {
        name: 'Veco',
        photo: '/heralds/Veco_Transparent_No_Border.png',
      },
    ],
  }),
}
</script>
