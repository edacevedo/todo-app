import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo}) {
  return (
    <div className='todolist'>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
      })}
    </div>
  )
}
