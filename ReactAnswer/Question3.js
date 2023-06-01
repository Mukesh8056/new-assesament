import React, { useState, useEffect, useCallback, useContext } from 'react';

// useState  --- sateless to state full
const state = () => {
  const [count, setCount] = useState(0); // variable and set state to update

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// useEffect -- for api call and side effect
const effect = () => {
  useEffect(() => {
    console.log('Component mounted'); // we can fetch data from api in here with fetch and axios

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return <p>Hello, useEffect example!</p>;
};

// useCallback -- to call back the function
const call = () => {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <button onClick={handleClick}>Click me</button>;
};

// useContext  -- default hook for common storage to access
const ThemeContext = React.createContext('light'); // to create context api i react

const context = () => {
  const theme = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
};
