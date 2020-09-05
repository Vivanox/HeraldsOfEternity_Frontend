<template>
  <span class="inline-flex group p-2" :class="spanCSSClasses" v-on="$listeners">
    <button
      type="button"
      class="inline-flex items-center px-48 py-10 border-4 transition ease-in-out duration-150"
      :class="buttonCSSClasses"
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
      return ' border-dark-blue text-6xl leading-6 font-bold text-white bg-orange-500 group-hover:bg-orange-gold focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700'
    },
  },
}
</script>
