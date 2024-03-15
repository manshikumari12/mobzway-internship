import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
 
  let { id } = useParams();

  return (
    <>
      <h1>Home Page</h1>
      <p>Route Parameter ID: {id}</p>
    </>
  );
}

export default Home;
