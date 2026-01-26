import React, { useState } from 'react'
import type { todo } from './todo'

const Todo = ({ todo, todos, setTodos }: { todo: todo, todos: todo[], setTodos: React.Dispatch<React.SetStateAction<todo[]>> }) => {
    const [todoText, setTodoText] = useState(todo.text)
    const [edit, setEdit] = React.useState(false);



    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
        setEdit(false);
    }
    const handleChange = (id: number) => {
        setEdit(!edit)
        setTodos(
            todos.map((todo) =>
                todo.id === id ?
                    { ...todo, text: todoText } :
                    todo)
        )
    }
    return (
        <div style={{ display: "flex",justifyContent:'space-around',alignItems:'center',width:"30rem",height:"4rem", backgroundColor: todo.done ? "green" : "gray", padding: "10px", margin: "10px", borderRadius: "8px" }}>
            <input
                type="checkbox"
                checked={todo.done}
                name="done"
                onChange={() => setTodos(todos.map((t) => t.id === todo.id ? { ...t, done: !t.done } : t))}
            />
            {edit ? <input className='todoEdit' type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} /> : <h3>{todo.text}</h3>}
            {edit ? <button onClick={() => handleChange(todo.id)}>Save</button> : <button onClick={() => setEdit(!edit)}>edit</button>}
            <button style={{ backgroundColor: "#BA0F0F"}} onClick={() => handleDelete(todo.id)}>delete</button>
        </div>
    )
}

export default Todo