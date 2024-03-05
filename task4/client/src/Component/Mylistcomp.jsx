const Mylistcomp =()=>{
const listitem  = ["Apple","Mango","Lichi" ,"cherry"]
return (
    <>
    {listitem.map((listitem,ind)=>(
        <li key={ind}>{listitem}</li>
    ))}
    </>
)
}
export {Mylistcomp}