import { useState } from 'react'

import './App.css'
import type { todo } from './todo';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

function App() {
  const initialValues =  [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
]
  const [todos, setTodos] = useState<todo[]>(initialValues);
  console.log(todos);
console.log(todos)
  return (
    <>
      <h1>Todo</h1>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />


    </>
  )
}

export default App
