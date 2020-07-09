export const state = () => ({
  patrons: [],
  developers: [],
  contributors: [],
})

export const mutations = {
  SET_CREDITS(state, credits) {
    state.patrons = credits.patrons
    state.developers = credits.developers
    state.contributors = credits.contributors
  },
}

export const actions = {
  fetch({ commit }) {
    // const data = await this.$axios.$get('/api/credits')

    // commit('SET_CREDITS', data)
    commit('SET_CREDITS', {
      patrons: [
        {
          name: 'John Doe',
        },
        { name: 'John Doe' },
        { name: 'John Doe' },
        { name: 'John Doe' },
        { name: 'John Doe' },
      ],

      developers: [
        {
          name: 'Ricardo Cooper',
          role: 'Lead developer',
          photo_url:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Ted Fox',
          role: 'Designer',
          photo_url:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],

      contributors: [
        {
          name: 'Kristen Ramos',
          role: 'Developer',
          photo_url:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },

        {
          name: 'Esther Howard',
          role: '',
          photo_url:
            'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
      ],
    })
  },
}
