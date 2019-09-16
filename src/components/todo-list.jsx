import React from 'react'
import TodoListItem from './todo-list-item';

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem label="Make breakfast"/></li>
      <li><TodoListItem label="Make React App" important/></li>
      <li><TodoListItem label="Make something"/></li>
    </ul>
  )
}

export default TodoList