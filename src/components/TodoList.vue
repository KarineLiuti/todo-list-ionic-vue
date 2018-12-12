<template>
  <ion-page>
    <ion-header>

      <ion-toolbar class="toolbar-md-primary">
        <ion-title>TodoList</ion-title>
      </ion-toolbar>

    </ion-header>
    <ion-content class="content">

      <ion-list>
        <ion-item v-for="todo in todos" :key="todo.id">
          <ion-label full>{{todo.name}}</ion-label>
        </ion-item>
      </ion-list>

      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.$router.push({path: '/todos/add'})
    }
  },
  created() {
    axios.get('http://localhost:3001/todos')
      .then(res => this.todos = res.data)
  }
}
</script>
