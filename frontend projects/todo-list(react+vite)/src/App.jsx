import { useState } from "react"
import { NewForm } from "./todoForm"
import { TodoList } from "./todo_list"
import "./styles.css"

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) { // Fixed the function name here
    setTodos((curTodos) => {
      return [
        ...curTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })

    // It seems like you're trying to reset some input field or variable here, but there's no declaration for `setNewItem` in your code. Make sure to define it if needed.
  }

  function toggleTodo(id, status) {
    setTodos((curTodos) =>
      curTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: status }
        }
        return todo
      })
    )
  }

  function DeleteTodo(id) {
    setTodos((curTodos) => curTodos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <NewForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} DeleteTodo={DeleteTodo} toggleTodo={toggleTodo} />
    </>
  )
}
