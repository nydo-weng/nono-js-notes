import { Button } from 'antd';

import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="box">
        <h1>计数器</h1>
        <input
          className="display"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <Button className="button" type="primary" ghost="true" onClick={() => setCount(count + 1)}>
          +
        </Button>

        <Button className="button" type="dashed" ghost="true" onClick={() => setCount(count - 1)}>
          -
        </Button>
      </div>
    </>
  );
}

export default App;
