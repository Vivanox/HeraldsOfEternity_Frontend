export const state = () => ({
  patrons: [],
  developers: [],
  contributors: [],
})

export const mutations = {
  SET_CREDITS(state, credits) {
    credits.forEach((credit) => state[credit.group.toLowerCase()].push(credit))
  },
}

export const actions = {
  async fetch({ commit }) {
    const { data } = await this.$axios.$get('/api/credits')

    commit('SET_CREDITS', data)
  },
}
