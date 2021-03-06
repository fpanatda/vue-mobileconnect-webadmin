import fireauthApp from '@utils/fireauth.config'
import firestoreApp from "@utils/firestore.config"

import {
  sendSuccessNotice,
  sendErrorNotice,
  closeNotice,
  commitPagination,
  getDefaultPagination,
} from '@utils/pagination-util'

export const state = {
  cached: [],
  // Data Table Initial Setup Variables
  items: null,
  pagination: getDefaultPagination(),
  loading: false,
  mode: '',
  snackbar: false,
  notice: '',
  // Search Result Variables
}

export const getters = {
  hadUserList(state) {
    return !!state.items
  }
}

export const mutations = {
  CACHE_USER(state, newUser) {
    state.cached.push(newUser)
  },
  setPagination (state, pagination) {
    state.pagination = pagination
  },
  // update Page
  updatePage(state, paginationPage) {
    state.pagination.page = paginationPage
  },
  updateSortBy(state, paginationSortBy) {
    state.pagination.sortBy = paginationSortBy
  },
  updateDescending(state, paginationDesc) {
    state.pagination.descending = paginationDesc
  },
  // Mutate Value in Pagination
  setLoading(state, { loading }) {
    state.loading = loading
  },
  setNotice (state, { notice }) {
    state.notice = notice
  },
  setSnackbar (state, { snackbar }) {
    state.snackbar = snackbar
  },
  setMode (state, { mode }) {
    state.mode = mode
  },
  setItems (state, items) {
    state.items = items
  }
}

export const actions = {
  // ===
  // CREAT Zone
  // ===
  async createUser( { commit, dispatch }, newUser) {

    commit('setLoading', { loading: true })
    console.log(`Create User ${newUser.firstName}`)

    let user = null
    let updatedUser = null
    let password = generatePass()

    try {
      user = await fireauthApp
        .createUserWithEmailAndPassword(
          newUser.email, 
          password
        )
      
      await fireauthApp.sendPasswordResetEmail(newUser.email)

      updatedUser = await firestoreApp
        .collection('users')
        .add(newUser)
       
    } catch (error) { console.log(error) }


    if (user && updatedUser) {

      sendSuccessNotice(commit, 'New User has been added.')
      closeNotice(commit, 3000)
      commit('setLoading', { loading: false })
      dispatch('getAllUsers')

    } else {

      commit('setLoading', { loading: false })
      sendErrorNotice(commit, 'Create User failed! Please try again later. ')
      closeNotice(commit, 3000)

    }
  },
  // ===
  // READ Zone
  // ===
  fetchUser({ commit, state, rootState }, { username }) {
    // 1. Check if we already have the user as a current user.
    const { currentUser } = rootState.auth
    if (currentUser && currentUser.email === username) {
      return Promise.resolve(currentUser)
    }
    // 2. Check if we've already fetched and cached the user.
    const matchedUser = state.cached.find(user => user.email === username)
    if (matchedUser) {
      return Promise.resolve(currentUser)
    }

    // 3. Fetch the user from the API and cache it in case
    //    we need it again in the future.
    return firestoreApp
      .collection('users')
      .where('email', '==', username)
      .get()
      .then(querySnapshot => {
        var updatedUser = {}
        querySnapshot.forEach(doc => {
          updatedUser = doc.data()
          updatedUser['id'] = doc.id
        })
        commit('setUserInfo', updatedUser)
        return updatedUser
      })      
  },
  getAllUsers({ commit }) {

    commit('setLoading', { loading: true })
    
    return firestoreApp
      .collection('users')
      .get()
      .then(querySnapshot => {

        let userList = []

        querySnapshot.forEach(doc => {
          let data = {}
          data = doc.data()
          data['id'] = doc.id
          userList.push(data)
        })

        commitPagination(commit, userList)
        commit('setLoading', { loading: false })
        sendSuccessNotice(commit, 'Loading Finished!')
        closeNotice(commit, 2000)
        return userList
      })
      .catch(error => {
        console.log(error)
        commit('setLoading', { loading: false })
        sendErrorNotice(commit, 'Load Failed!')
        closeNotice(commit, 2000)
        return error
      })
  },
  // ===
  // DELETE Zone
  // ===
  deleteUser({ commit, dispatch }, userId) {

    commit('setLoading', { loading: true })

    return firestoreApp
      .collection('users')
      .doc(userId)
      .delete()
      .then(() => {
        dispatch('getAllUsers')
        commit('setLoading', { loading: false })
        sendSuccessNotice(commit, 'User Deleted!')
        closeNotice(commit, 2000)
      })
      .catch(error => {
        commit('setLoading', { loading: false })
        console.log("Error removing document: ", error)
      })
  },
  // ===
  // ETC. Zone
  // ===
  closeSnackBar ({ commit }, timeout ) {
    closeNotice(commit, timeout)
  },
}

// ===
// Private helpers
// ===
function generatePass() {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var pass = ''

  for (let i = 0; i < 32; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)]
  }

  return pass;
}
