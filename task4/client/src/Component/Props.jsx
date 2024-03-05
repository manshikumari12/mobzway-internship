import React from "react";
const Props = (props) =>{
    return (
        <>
         <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
        </>
    )
}
export {Props}