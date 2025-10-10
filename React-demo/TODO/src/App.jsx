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
  // 下一步, 抽出一个 Todo 组件, 用于渲染每个 todo 项

  return (
    <div className="appContainer">
      <div className="topContainer">
        <h1>Todo List</h1>
      </div>
      <ul className="todoContainer">
        {DATA.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
