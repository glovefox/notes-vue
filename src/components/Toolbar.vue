<template>
  <div id="toolbar">
    <i @click="addNote" class="material-icons"><img src ="../assets/ic_note_add_black_36dp.png"></i>
    <i class="material-icons"><img src ="../assets/ic_stars_black_36dp.png"  @click="toggleFavorite"
    :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="material-icons"><img src ="../assets/ic_delete_forever_black_36dp.png"></i>
  </div>
</template>

<script>
import { addNote, deleteNote, toggleFavorite } from '../vuex/actions'

export default {
  vuex: {
      getters: {
        activeNote: state => state.activeNote
    },
    actions: {
      addNote,
      deleteNote,
      toggleFavorite
    }
  }
}
</script>

<style>

#app {
height: 100%;
}

html,body {
margin: 0;
padding: 0;
border: 0;
height: 100%;
max-height: 100%;
position: relative;
}

#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #505050;
  color: #fff;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  /* No support for these yet, use at own risk */
  -o-user-select: none;
  user-select: none;
}

#toolbar img {
  font-size: 40px;
  cursor: pointer;
  margin: 40px 20px 20px 20px;
}

#toolbar img:hover
{
  border:1px solid #000;
}

.starred {
  border:1px solid #000;
}

.material-icons {
display: inline-block;
line-height: 1;

-webkit-filter: invert(1);
-moz-filter: invert(1);
-o-filter: invert(1);
-ms-filter: invert(1);
filter: invert(1);
}
</style>
