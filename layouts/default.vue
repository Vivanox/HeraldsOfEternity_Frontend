<template>
  <div
    class="min-h-screen"
    :style="{
      background: 'url(Background01_Space.png)',
      backgroundSize: 'cover',
    }"
  >
    <nav class="bg-glass shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <Logo class="h-16 w-auto" />
            </div>
            <div class="hidden sm:ml-6 sm:flex">
              <!-- Left side of Menu -->
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <nuxt-link
              v-for="(link, index) in links"
              :key="index"
              :to="link.to"
              :class="{ 'ml-8': index !== 0 }"
              class="inline-flex items-center px-2 pt-1 h-12 text-xl font-medium leading-5 text-white hover:text-gray-200 hover:bg-white-smoke focus:outline-none focus:text-white focus:bg-glass transition duration-150 ease-in-out"
              exact-active-class="bg-glass"
              >{{ link.label }}</nuxt-link
            >

            <div class="relative inline-block text-left">
              <div>
                <span class="shadow-sm">
                  <button
                    id="options-menu"
                    type="button"
                    class="inline-flex justify-center w-full px-4 py-2 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                    aria-haspopup="true"
                    aria-expanded="true"
                    @click="localeDropdownOpen = !localeDropdownOpen"
                  >
                    <country-flag :country="currentLocale.flag" />
                    <svg
                      class="-mr-1 ml-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </div>
              <transition name="fade">
                <div
                  v-show="localeDropdownOpen"
                  class="origin-top-right absolute right-0 mt-2 w-56 shadow-lg"
                >
                  <div
                    class="bg-glass shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div class="py-1">
                      <nuxt-link
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        :to="switchLocalePath(locale.code)"
                      >
                        <country-flag :country="locale.flag" />
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>

          <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
          -->
          <div class="hidden sm:hidden">
            <div class="pt-2 pb-3">
              <nuxt-link
                v-for="(link, index) in links"
                :key="index"
                :to="link.to"
                :class="{ 'mt-1': index !== 0 }"
                class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                >{{ link.label }}</nuxt-link
              >
            </div>
            <div class="pt-4 pb-3 border-t border-gray-200">
              <nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
              >
                <country-flag :country="locale.flag" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="py-10">
      <main class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<style>
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(0.3, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(15px);
  opacity: 0;
}

.page-enter-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.3, 1);
}

.page-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.7, 1);
}
.page-enter,
.page-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
import CountryFlag from 'vue-country-flag'
import Logo from '~/components/Logo'

export default {
  components: {
    CountryFlag,
    Logo,
  },

  data: () => ({
    localeDropdownOpen: false,
    links: [
      {
        label: 'About',
        to: '/',
      },
      {
        label: 'Credits',
        to: '/credits',
      },
      {
        label: 'Blog',
        to: '/blog',
      },
      {
        label: 'Contact',
        to: '/contact',
      },
      {
        label: 'Gallery',
        to: '/gallery',
      },
    ],
  }),
  computed: {
    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0]
    },

    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
