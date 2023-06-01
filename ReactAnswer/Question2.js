import React, { useState, useEffect } from 'react';

const ExampleComponent= () => {
    //UseState
  const [count, setCount] = useState(0);  // variable and set state to update

  useEffect(() => {
    console.log('Count value changed:', count); // we can fetch data from api in here with fetch and axios
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExampleComponent;
