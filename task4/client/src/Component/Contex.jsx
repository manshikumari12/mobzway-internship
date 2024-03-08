import React, { createContext } from "react"
import Mycontext from "./Mycontext"

const LastName =createContext()




const Contex =()=>{
return (
    <>
    <LastName.Provider value = {'kumari'}>
        <Mycontext/>
    </LastName.Provider>

    </>
)
}
export default Contex
export {LastName}