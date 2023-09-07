export function TodoItem({ id, title, completed, toggleTodo, DeleteTodo }) {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
          <button
            onClick={() => DeleteTodo(id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </label>
      </li>
    )
  }
  