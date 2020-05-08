import { combineReducers } from 'redux'

import todosReducer from './todos/todo.slice'

export default combineReducers({
  todos: todosReducer
})
