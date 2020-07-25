<template>
  <ValidationObserver ref="form">
    <form class="mt-8" @submit.prevent="submit">
      <TextField
        v-model="form.name"
        :label="$t('Name')"
        autocomplete="name"
        :autofocus="true"
        rules="required|max:254"
        :placeholder="$t('Whom do we address you as?')"
      />

      <TextField
        v-model="form.email"
        class="mt-6"
        :label="$t('E-Mail')"
        type="email"
        autocomplete="email"
        rules="required|max:254|email"
        :help-text="$t(`We'll reach out to you here, make sure it's valid.`)"
      />

      <TextField
        v-model="form.subject"
        class="mt-6"
        :label="$t('Subject')"
        autocomplete="off"
        rules="required|max:254"
        :placeholder="$t('Briefly describe what your inquery is about')"
      />

      <TextField class="mt-6" :label="$t('Message')" rules="required">
        <template v-slot="{ id, describedBy, failed }">
          <textarea
            :id="id"
            v-model="form.message"
            rows="8"
            class="form-input text-white block w-full pr-10 pl-2 py-2 sm:text-sm sm:leading-5 bg-transparent border border-white"
            :class="{
              'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': failed,
            }"
            :aria-invalid="failed"
            :aria-describedby="describedBy"
          />
        </template>
      </TextField>

      <div class="mt-6">
        <button
          type="submit"
          class="w-full flex justify-center text-white hover:text-brand"
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

          {{ state }}
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { extend, ValidationObserver } from 'vee-validate'
import { required, max, email } from 'vee-validate/dist/rules'
extend('required', required)
extend('max', max)
extend('email', email)

const states = {
  SUBMITTING: 'Submitting...',
  ERROR: 'Whoopsie, please see fields for errors.',
  SUCCESS: 'Thanks! Your request has been received.',
}

export default {
  components: {
    ValidationObserver,
  },

  data: () => ({
    state: null,
    states,

    form: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  }),

  methods: {
    async submit() {
      try {
        this.state = states.SUBMITTING

        await this.$axios.$post('/api/contact-requests', this.form)

        this.state = states.SUCCESS

        this.resetForm()
      } catch (e) {
        this.state = states.ERROR

        if (e.response && e.response.status === 422) {
          this.$refs.form.setErrors(e.response.data.errors)
        } else {
          throw e
        }
      }
    },

    resetForm() {
      this.form.name = ''
      this.form.email = ''
      this.form.subject = ''
      this.form.message = ''
      this.$refs.form.reset()
    },
  },
}
</script>
