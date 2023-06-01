// Class Component
import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return <h1>Hello, I'm a class component</h1>;
  }
}

// functional component
import React from 'react';


const FunctionComponent= ({ name }) => {
  return <h1>Hello, {name} I'm a function component</h1>;
};

export { ClassComponent, FunctionComponent };
