import React, { useState, memo } from "react";

const UnoptimizedChild = memo(({ items }) => {
  console.log("Child component is rendering...");
  let renderedItems = [];
  for (let i = 0; i < items.length; i++) {
    renderedItems.push(<p key={i}>{items[i]}</p>);
  }

  return (
    <div>
      <h2>Unoptimized Child</h2>
      {renderedItems}
    </div>
  );
});

const App = () => {
  const [numbers, setNumbers] = useState([10, 20, 30]);
  const [count, setCount] = useState(0);

  const addNumber = () => {
    const newNumbers = [...numbers];
    newNumbers.push(newNumbers.length * 10 + 10);
    setNumbers(newNumbers);
  };

  return (
    <div>
      <h1>Prevent Unnecessary Re-renders</h1>
      <button onClick={addNumber}>Add Number</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <UnoptimizedChild items={numbers} />
    </div>
  );
};

export default App;
