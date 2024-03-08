const Eventcomps = () =>{
const handelClick = (msg) =>{
    console.log(msg);
}
return (
    <>
  <button onClick={()=>handelClick("Hello click!!!")}>click me</button>
    </>
)
}
export {Eventcomps}