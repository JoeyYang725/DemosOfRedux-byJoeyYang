import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo
        onClick={() => { onTodoClick(index) }}
        text={todo.text}
        completed={todo.completed}
        key={index}
      >
      </Todo>
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList