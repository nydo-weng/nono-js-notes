import './index.css';

function TodoItem({ todo, checkTodo }) {
  return (
    <li className="itemCard">
      <input type="checkbox" checked={todo.completed} onChange={() => checkTodo(todo.id)} />
      <span>{todo.title}</span>
    </li>
  );
}

export default TodoItem;
