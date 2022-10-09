import React from 'react'

export default function Todo({todo, toggleTodo}) {

  const handleChangeComplete = ()=> {
    toggleTodo(todo.id)
  }
  return (
    <div className='todo'>
      <label className={todo.complete ? 'lined-text': ''}>
        <input type="checkbox" onChange={handleChangeComplete}  checked={todo.complete}/>
        <span>{todo.name}</span>
      </label>
    </div>
  )
}
