import React from 'react'

export const TodoItem = (props) => {
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={props.todo.isComplete}
      /> {props.todo.name}</li>
  )
}
