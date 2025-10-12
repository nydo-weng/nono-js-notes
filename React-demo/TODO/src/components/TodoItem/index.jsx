import './index.css';
import { Button } from 'antd';

function TodoItem({ todo, checkTodo, deleteTodo }) {
  return (
    <li className="item-card flex items-center p-2 border-b border-gray-200 px-4 ">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => checkTodo(todo.id)}
        className="m-2 w-4 h-4 cursor-pointer"
      />
      <span className={`${todo.completed ? 'line-through' : ''} text-gray-800 font-medium flex-1`}>
        {todo.title}
      </span>
      <Button color="danger" variant="solid" onClick={() => deleteTodo(todo.id)} className="m-2">
        Delete
      </Button>
    </li>
  );
}

export default TodoItem;
