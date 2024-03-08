import React from "react"
import { LastName } from "./Contex"



const Context = ()=>{
return (
    <>
    <LastName.Consumer>
        {(lname)=>{
            return  <h1>i am  {lname}</h1>
        }}
    </LastName.Consumer>

   
  
    </>
)
}
export default Context