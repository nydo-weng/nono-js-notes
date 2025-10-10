import './index.css';

function TodoItem({ todo }) {
  return (
    <li className="itemCard" key="todo.id">
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.title}</span>
    </li>
  );
}

export default TodoItem;
