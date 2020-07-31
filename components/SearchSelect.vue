<template>
  <div class="space-y-1" @keyup.esc="showResults = false">
    <label
      id="listbox-label"
      class="block text-sm leading-5 font-medium text-gray-700"
      @click="toggle"
    >
      <div class="mt-1 relative">
        <div class="absolute inset-y-0 left-0 pt-3 pl-3 flex iems-center">
          <svg
            class="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <input
          v-model="query"
          class="form-input text-white block w-full pr-10 pl-10 py-2 sm:text-sm sm:leading-5 bg-transparent border border-white"
          type="search"
          autocomplete="on"
          aria-autocomplete="both"
          :autofocus="true"
          :placeholder="$t('Search')"
          :aria-placeholder="$t('Search')"
        />
        <div
          v-show="value"
          class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
        >
          <svg
            class="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </label>
    <div class="relative">
      <transition name="fade">
        <div
          v-show="showResults"
          class="z-50 absolute mt-1 w-full rounded-md bg-white-smoke shadow-lg"
        >
          <ul
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            class="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
          >
            <li
              v-for="(option, index) in results"
              :key="index"
              role="option"
              class="text-white cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-brand"
              @click="select(option)"
            >
              <div class="flex space-x-2">
                <slot name="option" :option="option">
                  <span
                    class="font-normal truncate"
                    :class="{ 'font-semibold': value === option }"
                  >
                    {{ option }}
                  </span>
                </slot>
              </div>

              <span
                v-show="value === option"
                class="absolute inset-y-0 right-0 flex items-center pr-4 text-white"
              >
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'select',
  },

  props: {
    options: {
      type: Array,
      required: true,
    },

    filter: {
      type: Function,
      required: true,
    },

    value: {
      type: [Object, String, Number],
      required: true,
    },
  },

  data: () => ({
    showResults: false,
    query: '',
  }),

  computed: {
    results() {
      return this.options.filter((option) => this.filter(option, this.query))
    },
  },

  methods: {
    toggle() {
      this.showResults = !this.showResults
    },

    select(option) {
      if (option === this.value) {
        this.$emit('select', null)
      } else {
        this.$emit('select', option)
      }

      this.showResults = false
    },
  },
}
</script>
