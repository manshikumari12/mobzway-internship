import React from 'react';

// ChildComponent
const ChildComponent = () => {
  return <div>This is the ChildComponent</div>;
};

// ParentComponent containing the ChildComponent
const ParentComponent = () => {
  return (
    <div>
      <h1>This is the ParentComponent</h1>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
