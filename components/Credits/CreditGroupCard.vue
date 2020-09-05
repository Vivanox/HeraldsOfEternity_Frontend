<template>
  <card class="flex flex-col justify-center">
    <h1
      class="self-center tracking-wide leading-9 text-orange-400 text-5xl pb-5"
      v-html="group"
    />

    <div class="flex justify-around">
      <ul
        v-for="(chunk, idx) in chunks"
        :key="idx"
        class="text-white text-3xl tracking-wide leading-8"
      >
        <li v-for="(item, index) in chunk" :key="index">{{ item.name }}</li>
      </ul>
    </div>
  </card>
</template>

<script>
import chunk from '~/helpers/array_chunk'

export default {
  props: {
    group: {
      type: String,
      required: true,
    },

    creditables: {
      type: Array,
      required: true,
    },
  },

  computed: {
    chunks() {
      return chunk(this.creditables, 3)
    },
  },
}
</script>
