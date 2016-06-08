import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'

Vue.use(Vuex)

export const STORAGE_KEY = 'notes-vuejs'

const state = {
  notes: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  activeNote: {}
}

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: '# 我的新笔记',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    let removeNote=state.notes.indexOf(state.activeNote)
    state.notes.$remove(state.activeNote)
    if (removeNote!==0)
    {
      state.activeNote = state.notes[removeNote-1]
    }
    else
    {
      alert("已经删除完毕！")
    }
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

export default new Vuex.Store({
  state,
  mutations,
  middlewares
})
