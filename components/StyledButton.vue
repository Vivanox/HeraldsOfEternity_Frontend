<template>
  <span class="inline-flex group p-2" :class="spanCSSClasses">
    <button
      type="button"
      class="inline-flex items-center px-10 py-4 xl:px-48 xl:py-10 border-4 transition ease-in-out duration-150"
      :class="buttonCSSClasses"
      v-on="$listeners"
    >
      <slot />
    </button>
  </span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'orange',
      validator: (value) => ['orange'].includes(value),
    },
  },

  computed: {
    spanCSSClasses() {
      return 'bg-orange-gold'
    },

    buttonCSSClasses() {
      return ' border-dark-blue text-sm md:text-lg xl:text-6xl leading-5 lg:leading-6 font-bold text-white bg-orange-500 group-hover:bg-orange-gold focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700'
    },
  },
}
</script>
