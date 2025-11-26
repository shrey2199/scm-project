import { FaTrash } from 'react-icons/fa';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo._id, todo.completed)}
      />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;
