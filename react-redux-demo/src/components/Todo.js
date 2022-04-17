import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ text, onClick, completed }) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : '' }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired
}

export default Todo