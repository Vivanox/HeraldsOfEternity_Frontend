<template>
  <div>
    <label
      :for="blockIdentifier"
      class="block text-lg md:text-3xl lg:text-xl font-bold leading-5 text-white"
      >{{ label }}</label
    >
    <ValidationProvider
      v-slot="{ errors, failed }"
      :rules="rules"
      :name="validationField || label"
    >
      <div class="mt-1 relative">
        <slot
          :id="blockIdentifier"
          :type="type"
          :failed="failed"
          :describedBy="helpText ? helpTextId : errorsId"
        >
          <input
            :id="blockIdentifier"
            class="form-input text-white block w-full pr-10 pl-2 py-2 sm:text-sm sm:leading-5 md:text-3xl lg:text-xl bg-transparent border border-white"
            :class="{
              'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': failed,
            }"
            :type="type"
            :aria-invalid="failed"
            :aria-describedby="helpText ? helpTextId : errorsId"
            :value="value"
            :autocomplete="autocomplete"
            aria-autocomplete="both"
            :autofocus="autofocus"
            :placeholder="placeholder"
            :aria-placeholder="placeholder"
            @input="$emit('change', $event.target.value)"
          />
        </slot>
        <div
          v-show="failed"
          class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
        >
          <svg
            class="h-5 w-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <p
        v-if="helpText"
        :id="helpTextId"
        class="mt-2 text-sm leading-5 md:text-2xl lg:text-lg text-gray-200"
      >
        {{ helpText }}
      </p>

      <ul v-show="failed" :id="errorsId" class="mt-2">
        <li
          v-for="(message, index) in errors"
          :key="index"
          class="mt-2 text-xl md:text-4xl lg:text-2xl md:leading-6 text-red-600"
        >
          {{ message }}
        </li>
      </ul>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    label: {
      type: String,
      required: false,
      default: 'label',
    },

    type: {
      type: String,
      required: false,
      default: 'text',
    },

    value: {
      type: String,
      required: false,
      default: '',
    },

    id: {
      type: String,
      required: false,
      default: '',
    },

    rules: {
      type: [String, Array, Object],
      required: false,
      default: null,
    },

    validationField: {
      type: String,
      required: false,
      default: null,
    },

    autocomplete: {
      type: String,
      required: false,
      default: null,
    },

    autofocus: {
      type: Boolean,
      required: false,
      default: false,
    },

    placeholder: {
      type: String,
      required: false,
      default: null,
    },

    helpText: {
      type: String,
      required: false,
      default: null,
    },
  },

  data: () => ({
    blockIdentifier: '',
  }),

  computed: {
    errorsId() {
      return `${this.blockIdentifier}-errors`
    },

    helpTextId() {
      return `${this.blockIdentifier}-help-text`
    },
  },

  created() {
    this.blockIdentifier = this.id || `text-field-${this._uid}`
  },
}
</script>
