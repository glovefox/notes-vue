<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>我 的 笔 记 本</h2>
      <div id="list-button">
        <!-- All Notes button -->
        <div>
          <button  @click="show = 'all'"
                   :class="{active: show === 'all'}">
            笔 记
          </button>
        </div>
        <!-- Favorites Button -->
        <div>
          <button @click="show = 'favorites'"
                  :class="{active: show === 'favorites'}">
            收 藏
          </button>
        </div>
      </div>
    </div>
    <div><hr/></div>
    <!-- render notes in a list -->
    <div class="container">
      <div v-for="note in filteredNotes"
           class="list-group-item" href="#"
           :class="{active: activeNote === note}"
           @click="updateActiveNote(note)">
            {{note.text.trim().substring(0, 15)}}
      </div>
    </div>
  </div>
</template>

<script>
import { updateActiveNote } from '../vuex/actions'

export default {
  data () {
    return {
      show: 'all'
    }
  },
  vuex: {
    getters: {
      notes: state => state.notes,
      activeNote: state => state.activeNote
    },
    actions: {
      updateActiveNote
    }
  },
  computed: {
    filteredNotes () {
      if (this.show === 'all'){
        return this.notes
      } else if (this.show === 'favorites') {
        return this.notes.filter(note => note.favorite)
      }
    }
  }
}

</script>
<style>
#notes-list {
  font-family:"Microsoft YaHei";
  float: left;
  width: 300px;
  height: 100%;
  background-color: #888888;
}

#list-button {
  text-align:center;
}

#list-button div{
  display:inline;
}

#list-header h2 {
  text-align: center;
  font-size: 30px;
  color: #fff;
}

#list-header button {
  font-family:"Microsoft YaHei";
  border-radius:5px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  width:120px;
  outline: none;
}

button:hover
{
  border:2px solid #fff;
}

.container{
  height: calc(100% - 150px);
	max-height: calc(100% - 150px);
	overflow: auto;
}

.list-group-item {
  cursor: pointer;
  text-align: center;
  line-height: 40px;
  height: 40px;
  font-size: 20px;
  color:#fff;
}

.list-group-item:hover{
  border:1px solid #fff;
}

.active {
  background-color:#505050;
}
</style>
