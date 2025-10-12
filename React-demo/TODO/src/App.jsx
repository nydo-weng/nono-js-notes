import { useEffect, useState } from 'react';
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
    <div className="screen-container w-screen h-screen bg-gray-200 flex flex-col items-center">
      {/* flex-1: 让当前元素占据父容器剩余空间, container: tailwind 内置的响应式容器类, mx-auto: 水平居中, px-4: 左右内边距, py-6: 上下内边距  */}
      <div className="app-container  bg-cyan-50 flex-1 flex flex-col container mx-auto px-4 py-6 overflow-hidden">
        {/* 这里设置 overflow hidden 可以在不设置子元素的圆角时, 防止圆角被裁剪 */}
        <div className="top-container rounded-t-2xl overflow-hidden">
          <div className="header-filter-container bg-green-100 flex flex-col items-center">
            <div className="filter-container self-end space-x-2 p-2 bg-blue-50 rounded-md shadow-sm">
              <label htmlFor="filter" className="text-gray-700 font-medium">
                Filter:
              </label>
              <select
                id="filter"
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 bg-white text-gray-700
               focus:outline-none focus:ring-2 focus:ring-blue-400
               hover:bg-gray-50 transition duration-200"
              >
                <option value="all">All</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <h1 className="app-name text-4xl font-bold text-center">Todo List</h1>
          </div>

          <div className="add-container bg-green-100 flex  px-4 py-2 gap-4">
            <input
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              type="text"
              placeholder=" Add a new todo"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
            />
            <button
              onClick={() => addTodo({ title: titleInput })}
              className="px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-200"
            >
              Add
            </button>
          </div>
        </div>

        <ul className="todo-container rounded-b-2xl flex-1 bg-green-50 overflow-scroll">
          {filterd.map((todo) => (
            <TodoItem todo={todo} key={todo.id} checkTodo={checkTodo} deleteTodo={deleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
