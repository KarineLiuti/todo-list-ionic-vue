import Vue from 'vue'
import VueRouter from 'vue-router';

import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';

Vue.use(VueRouter);

const routes = [
  { path: '', redirect: '/todos'},
  { path: '/todos', component: TodoList },
  { path: '/todos/add', component: AddTodoItem}
]

export default new VueRouter({ routes })