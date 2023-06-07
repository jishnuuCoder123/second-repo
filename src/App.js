import React from 'react'

function App() {
  let count = 0;
  const addCount = () => {
    count = count + 1
  }
  return (
    <div className="App">
     <h1>Counter: {count}</h1>
     <button onClick={addCount}></button>
    </div>
  );
}

export default App;

