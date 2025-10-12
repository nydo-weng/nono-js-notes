import { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  // 每次重新加载页面时, 从服务器获取 todos 列表, 并更新 jsonTodos 状态
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3001/DATA');
    xhr.addEventListener('loadend', () => {
      const data = JSON.parse(xhr.responseText);
      setTodos(data);
      console.log(data);
    });
    xhr.send();
  }, []);

  const [titleInput, setTitleInput] = useState('');

  const [filter, setFilter] = useState('all');

  const filterd = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'ongoing') return !todo.completed;
    if (filter === 'completed') return todo.completed;
  });

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
    console.log(todos.length + 1);
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
    setTitleInput('');
  };

  const deleteTodo = (id) => {
    const ok = window.confirm('are you sure you want to delete this todo?');
    if (!ok) return;
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="appContainer">
      <div className="topContainer">
        <div className="headerFilterContainer">
          <h1>Todo List</h1>
          <div className="filterContainer">
            <label htmlFor="filter">Filter: </label>
            <select id="filter" onChange={(e) => setFilter(e.target.value)}>
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
        {filterd.map((todo) => (
          <TodoItem todo={todo} key={todo.id} checkTodo={checkTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
