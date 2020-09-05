<template>
  <div class="bg-dark-blue px-4 relative">
    <div class="py-6 container mx-auto">
      <Heading
        class="text-3xl leading-9 font-extrabold tracking-tight text-center text-white sm:text-4xl sm:leading-10"
      >
        {{ $t('Sign up for our news letter!') }}
      </Heading>

      <ValidationObserver ref="form">
        <form class="mt-8" @submit.prevent="submit">
          <TextField
            v-model="form.email"
            class="mt-6"
            :label="$t('E-Mail')"
            type="email"
            autocomplete="email"
            rules="required|max:254|email"
          />

          <div class="mt-6">
            <button
              v-tooltip="$t('Click to sign up for our newsletter')"
              type="submit"
              class="w-full flex justify-center text-white hover:text-gray-500"
              :class="{
                'text-red-500': state === states.ERROR,
                'text-green-500': state === states.SUCCESS,
              }"
              :disabled="[states.SUBMITTING, states.SUCCESS].includes(state)"
            >
              <svg
                class="h-16 w-16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="bevel"
                  stroke-linejoin="bevel"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <p class="text-center flex items-center">{{ state }}</p>
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { extend, ValidationObserver } from 'vee-validate'
import { required, max, email } from 'vee-validate/dist/rules'
extend('required', required)
extend('max', max)
extend('email', email)

const states = {
  DEFAULT: '',
  SUBMITTING: '...',
  ERROR: 'Whoopsie, please see fields for errors.',
  SUCCESS: "Thanks! You're on the list! :).",
}

export default {
  components: {
    ValidationObserver,
  },

  data: () => ({
    state: states.DEFAULT,
    states,

    form: {
      email: '',
    },
  }),

  methods: {
    async submit() {
      return await window.alert('Newsletter soon(tm) available.')

      //   try {
      //     this.state = states.SUBMITTING

      //     await this.$axios.$post('/api/newsletter-signups', this.form)

      //     this.state = states.SUCCESS

      //     this.resetForm()
      //   } catch (e) {
      //     this.state = states.ERROR

      //     if (e.response && e.response.status === 422) {
      //       this.$refs.form.setErrors(e.response.data.errors)
      //     } else {
      //       throw e
      //     }
      //   }
    },

    resetForm() {
      this.form.email = ''
      this.$refs.form.reset()
    },
  },
}
</script>
