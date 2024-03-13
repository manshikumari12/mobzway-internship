import React, { useState } from "react"
const Usestatecon = () =>{
const [count ,setCount]=useState(0)

const handleIncrement = () =>{
    setCount(count+1)
}
const handleDecrement = () =>{
    setCount(count-1)
}


return(
    <>

    <h1>count:{count}</h1>
    <button onClick={handleIncrement}>Increament</button>
    <button onClick={handleDecrement}> Decremnt</button>
    </>
)
}
export default Usestatecon