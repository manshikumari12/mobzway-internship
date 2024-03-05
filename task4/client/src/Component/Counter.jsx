import { useState } from "react"

const Counter = () =>{
    const [count , setCount ] = useState(0)
    // // Reading state
//   const currentCount = count;
//setting state
const increment = ()=>{
setCount(count +1)
}
const decrement = ()=>{
setCount(count-1)
}
    return(
    <>
    <div className="count">
      <p>Count:{count}</p>
  <button onClick={increment}>Increment</button>
  <button onClick={decrement}>decrement</button>
    </div>
    </>
    )
}
export {Counter}