import React, { useState, type SetStateAction } from 'react'
import type { todo } from './todo'

const CreateTodo = ({ todos, setTodos }: { todos: todo[], setTodos: React.Dispatch<SetStateAction<todo[]>> }) => {
  const [todo, setTodo] = useState<string>("");


  function addTodo() {

    let nextId = 3;
    setTodos([
      ...todos,
      {
        id: nextId++,
        text: todo,
        done: false
      }]
    )
    setTodo("");
  }
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); addTodo() }}
      style={{ display: "flex",justifyContent:"center", gap: "50px", margin: "10px", borderRadius: "8px" }}>
      <input style={{ width:"70%"} } value={todo} type="text" onChange={(e) => setTodo(e?.target?.value)} required />
      <button
      >
        Add
      </button>
    </form>
  )
}

export default CreateTodo