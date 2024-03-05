import React from "react";
import PropTypes  from "prop-types"
const ChildComponent = (props) =>{
    return (
        <>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>City:{props.city}</p>

        </>
    )
}
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
export {ChildComponent}