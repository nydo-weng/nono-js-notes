import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

// 模拟数据库
const DATA = [
  {
    id: 1,
    title: 'todo1',
    completed: false,
  },
  {
    id: 2,
    title: 'todo2',
    completed: true,
  },
  {
    id: 3,
    title: 'todo3',
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(DATA);

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    );
  };

  return (
    <div className="appContainer">
      <div className="topContainer">
        <h1>Todo List</h1>
      </div>
      <ul className="todoContainer">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} checkTodo={checkTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
