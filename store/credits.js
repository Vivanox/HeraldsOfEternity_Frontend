export const state = () => ({
  credits: {},
})

export const mutations = {
  SET_CREDITS(state, credits) {
    state.credits = credits
  },
}

export const actions = {
  async fetch({ commit }) {
    const data = await this.$axios.$get('/api/credits')

    commit('SET_CREDITS', data)
  },
}
