import { TodoItem } from './todoItem'

export function TodoList({ todos, toggleTodo, DeleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && <li>No Todos</li>}
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} DeleteTodo={DeleteTodo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  )
}
