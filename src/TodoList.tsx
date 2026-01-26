import React from "react"
import type { todo } from "./todo"
import type { SetStateAction } from "react"
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }: { todos: todo[], setTodos: React.Dispatch<SetStateAction<todo[]>> }) => {


    return (
        <div>{
            todos.map((todo) => {
                return (
                    <Todo todo={todo} todos={todos} setTodos={setTodos} />
                    
                )
            })
        }</div>
    )
}

export default TodoList