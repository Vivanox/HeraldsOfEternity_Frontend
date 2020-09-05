<template>
  <div
    class="min-h-screen"
    :style="{
      background: `url(${backgroundURL})`,
      backgroundSize: 'cover',
    }"
  >
    <nav class="bg-glass shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <nuxt-link
              :to="{ path: '/' }"
              class="hidden lg:flex flex-shrink-0 w-full items-center border-b-2 border-transparent hover:border-orange-400 focus:border-orange-600 transition duration-150 ease-in-out"
              exact-active-class="border-orange-600"
            >
              <Logo class="h-16 w-auto py-2 px-2" />
            </nuxt-link>
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
              class="inline-flex items-center h-16 px-2 pb-2 pt-3 text-4xl font-normal leading-5 text-white border-b-2 border-transparent hover:text-orange-300 hover:bg-glass hover:border-orange-400 focus:border-orange-600 focus:outline-none focus:text-white focus:bg-glass transition duration-150 ease-in-out"
              exact-active-class="bg-white-smoke text-orange-400 border-orange-600"
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

          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-white ransition duration-150 ease-in-out"
              @click="showMobileMenu = !showMobileMenu"
            >
              <svg
                v-if="showMobileMenu"
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              <svg
                v-else
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div v-show="showMobileMenu">
          <div class="pt-2 pb-3">
            <nuxt-link
              :to="{ path: '/' }"
              class="block pl-3 pr-4 py-2 text-base font-medium text-white hover:text-orange-300 hover:bg-glass focus:outline-none focus:text-orange-400 transition duration-150 ease-in-out"
              exact-active-class="border-l-4 border-orange-500 text-orange-400"
              >{{ $t('Index') }}</nuxt-link
            >

            <nuxt-link
              v-for="(link, index) in links"
              :key="index"
              :to="link.to"
              class="mt-1 block pl-3 pr-4 py-2 text-base font-medium text-white hover:text-orange-300 hover:bg-glass focus:outline-none focus:text-orange-400 transition duration-150 ease-in-out"
              exact-active-class="border-l-4 border-orange-500 text-orange-400"
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
    </nav>

    <main class="mx-auto py-1">
      <Nuxt />
    </main>

    <footer class="bg-white-smoke">
      <div
        class="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex justify-center md:order-1">
          <a
            href="https://www.facebook.com/vivanox"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Facebook</span>
            <svg class="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://twitter.com/vivanox_ivs"
            class="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Twitter</span>
            <svg class="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>

          <a
            href="https://discord.gg/e4348S"
            class="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Discord</span>
            <svg class="h-16 w-16" fill="currentColor" viewBox="0 0 245 240">
              <path
                d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
              />
              <path
                d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
              />
            </svg>
          </a>
        </div>
        <div class="mt-8 md:mt-0 md:order-2">
          <p class="text-center text-xl leading-6 text-gray-400">
            &copy; {{ year }} Vivanox. {{ $t('All rights reserved') }}.
          </p>
        </div>
      </div>
    </footer>
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
    showMobileMenu: false,
    links: [
      {
        label: 'About',
        to: '/about',
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
        label: 'Heralds',
        to: '/heralds',
      },
    ],
  }),
  computed: {
    year() {
      return new Date().getFullYear()
    },

    backgroundURL() {
      return require('~/static/Background01_Space.png')
    },

    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0]
    },

    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
