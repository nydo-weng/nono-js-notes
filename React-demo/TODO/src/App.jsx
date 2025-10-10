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
  const [titleInput, setTitleInput] = useState('');

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

  const addTodo = ({ title }) => {
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
  };

  return (
    <div className="appContainer">
      <div className="topContainer">
        <div className="headerFilterContainer">
          <h1>Todo List</h1>
          <div className="filterContainer">
            <label htmlFor="filter">Filter: </label>
            <select id="filter">
              <option value="all">All</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="addContainer">
          <input
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            type="text"
            placeholder=" Add a new todo"
          />
          <button onClick={() => addTodo({ title: titleInput })}>Add</button>
        </div>
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
