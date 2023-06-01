import React from 'react';

const ParentComponent= () => {
  const data = 'Hello from parent component';

  return <ChildComponent data={data} />;
};



const ChildComponent = ({ data }) => {
  return <p>{data}</p>;
};

export default ParentComponent;
