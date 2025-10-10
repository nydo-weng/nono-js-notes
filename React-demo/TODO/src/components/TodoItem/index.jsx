import './index.css';
import { Button } from 'antd';

function TodoItem({ todo, checkTodo, deleteTodo }) {
  return (
    <li className="itemCard">
      <input type="checkbox" checked={todo.completed} onChange={() => checkTodo(todo.id)} />
      <span>{todo.title}</span>
      <Button color="danger" variant="solid" onClick={() => deleteTodo(todo.id)}>
        Delete
      </Button>
    </li>
  );
}

export default TodoItem;
