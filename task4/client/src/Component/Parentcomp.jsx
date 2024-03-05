import React from "react";
import PropTypes from "prop-types";

const ChildComponent = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
};

ChildComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

ChildComponent.defaultProps = {
  name: "Guest",
  age: 18,
  city: "Unknown",
};

const Parentcomp = () => {
  const name = "Alice";
  const age = 30;
  const city = "New York";

  return(
<>
<ChildComponent name={name} age={age} city={city} />;
</>
  ) 
};

export { Parentcomp };
