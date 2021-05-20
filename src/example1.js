import React, { useState } from 'react';

export const Example = () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(3);
  // 声明多个变量
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  console.log("333", useState(0));

  return (
    <div>
      <h1>Example1 -useState 的使用</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>{age}</p>
      <button onClick={() => setAge('apple')}>
        Click me
      </button>
      <p>{fruit}</p>


      <button onClick={() => setFruit('apple')}>
        Click me
      </button>
      {todos.map(item => {
        return <p key={item}>{item.text || item.tex}</p>
      })}
      <button onClick={() => setTodos([{ tex: 'Learn Hooks2' }])}>
        Click me
      </button>
    </div>
  );
};