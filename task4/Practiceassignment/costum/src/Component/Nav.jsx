import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
 const navStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#333",
        padding: "10px"
    };

  const linkStyle = {
    color: "#4CAF50",
    textDecoration: "none",
    margin: "0 10px",
    padding: "5px 10px", 
    border: "2px solid #4CAF50", 
    borderRadius: "5px",
    transition: "all 0.3s ease",
};



  return (
    <>
    <div style={navStyle}>
 <button style={linkStyle}>
        <Link to="/" >Home</Link>
      </button>
      <button  style={linkStyle}>
        <Link to="/about">About</Link>
      </button>
      <button style={linkStyle}>
        <Link to="/state" >UseState</Link>
      </button>
      <button style={linkStyle}>
        <Link to="/effect" >Useeffect</Link>
      </button>
    </div>
     
    </>
  );
};

export default Nav;
