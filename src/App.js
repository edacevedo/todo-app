
import { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4} from 'uuid'

const LOCAL_KEY_TODOS = 'todoApp.todos'

function App() {
  
  const [todos, setTodos] = useState([])
  const inputTodo = useRef()
  

  useEffect(()=>{
    console.log(localStorage.getItem(LOCAL_KEY_TODOS))
    const localTodos = JSON.parse(localStorage.getItem(LOCAL_KEY_TODOS))
    if(localTodos && localTodos.length > 0) setTodos(localTodos)
  }, [])

  useEffect(()=>{
    const stringTodos = JSON.stringify(todos)
    localStorage.setItem(LOCAL_KEY_TODOS, stringTodos)
  }, [todos])

  const handleAddClick = (e) => {
    var todoName = inputTodo.current.value
    if (todoName === '') return
    setTodos((prevTodos)=>{
      return [
        ...prevTodos,
        {
          id: uuidv4(),
          name: todoName,
          complete: false
        }
      ]
    })
    inputTodo.current.value = null
  }

  const handleClearClick = () => {
    setTodos((currentTodos)=>{
      return [...currentTodos].filter(todo => !todo.complete)
    })
  }

  const toggleTodo = (id) => {
    const currentTodos = [...todos]
    const todoToChange = currentTodos.find(todo => todo.id === id)
    todoToChange.complete = !todoToChange.complete
    setTodos(currentTodos)
  }

  return (
    <div className='app'>
      <h1 className='font-effect-shadow-multiple'>Daily TODO</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <label className='left-todo'>{todos.filter((todo)=>!todo.complete).length} left to do</label>
      <input className='name-todo' type="textarea" ref={inputTodo}/>
      <div className='options-ctn'>
        <button className='add' onClick={handleAddClick}>Add</button>
        <button className='clear' onClick={handleClearClick}>Clear completed</button>
      </div>
      
    </div>
  );
}

export default App;
