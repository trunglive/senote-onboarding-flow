import * as api from "../data"

export const getAllData = ({ commit }) => {
  api.getAllData(data => {
    commit("getAll", data)
  })
}

export const toggleSwitch = ({ commit }, payload) => {
  commit("toggleSwitch", payload)
}
