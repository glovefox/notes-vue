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
      text: '# 请用markdown语法或者html语法写笔记',
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
    alert(removeNote+":"+state.notes.length)
   if (removeNote<0 & state.notes.length===0) {
      alert("请请增加新的笔记！")
    }
    else{
    if (removeNote<0 & state.notes.length>0) {
        alert("请选择需要删除的条目！")
        state.activeNote = state.notes[state.notes.length-1]
      }
      else{
        state.notes.$remove(state.activeNote)
        if (state.notes.length>0&removeNote===0) {
           state.activeNote = state.notes[removeNote]
        }
        else{
          if (state.notes.length!==0&removeNote!==0) {
            state.activeNote = state.notes[state.notes.length-1]
          }
        }
      }
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
