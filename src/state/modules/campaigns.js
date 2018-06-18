import firestoreApp from "@utils/firestore.config"

import {
  sendSuccessNotice,
  sendErrorNotice,
  closeNotice,
  commitPagination,
  getDefaultPagination,
} from '@utils/pagination-util'

export const state = {
  // Data Table Initial Setup Variables
  items: null,
  pagination: getDefaultPagination(),
  loading: false,
  mode: '',
  snackbar: false,
  notice: '',  
}

export const getters = {
  hadCampaignList(state) {
    return !!state.items
  }
}

export const mutations = {
  setPagination (state, pagination) {
    state.pagination = pagination
  },
    // update Page
  updatePage(state, paginationPage) {
    state.pagination.page = paginationPage
  },
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
  // READ Zone
  // ===
  getAllCampaigns({ commit }) {
    
    commit('setLoading', { loading: true })
    
    return firestoreApp
      .collection('campaigns')
      .get()
      .then(querySnapshot => {

        let campaignList = []

        querySnapshot.forEach(doc => {
          let data = {}
          data = doc.data()
          data['id'] = doc.id
          campaignList.push(data)
        })

        commitPagination(commit, campaignList)
        commit('setLoading', { loading: false })
        sendSuccessNotice(commit, 'Load Campaigns Finished!')
        closeNotice(commit, 2000)
        return campaignList
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
  deleteCampaign({ commit, dispatch }, campaignId) {
    
    commit('setLoading', { loading: true })

    return firestoreApp
      .collection('campaigns')
      .doc(campaignId)
      .delete()
      .then(() => {
        dispatch('getAllCampaigns')
        sendSuccessNotice(commit, 'Campaign Deleted!')
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