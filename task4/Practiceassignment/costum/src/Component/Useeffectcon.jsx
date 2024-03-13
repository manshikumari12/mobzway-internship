import { useState,useEffect } from "react"
const Useeffectcon = () =>{
const [text,setText] =useState("")
 useEffect(() => {
  console.log(`Text changed: ${text}`);
}, [text]);
  const handleChange = (e) => {
    setText(e.target.value);
  };
const containerStyle = {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "20px"
  };
  const inputStyle = {
    padding: "5px",
    marginRight: "10px"
  };
  const textStyle = {
    fontWeight: "bold"
  };
  return (
    <>
      <div style={containerStyle}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter text"
          />
        </div>
        <p style={textStyle}>Text: {text}</p>
      </div>
    </>
  );

}
export default Useeffectcon