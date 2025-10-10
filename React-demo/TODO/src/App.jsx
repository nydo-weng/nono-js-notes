import './App.css';

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
  // todo MVP, 能够渲染数据库内的所有 todo 项

  return (
    <>
      <ul>
        {DATA.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
