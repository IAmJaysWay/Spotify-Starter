import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

return(
  <>
  <div className="container">
     <Link to="/album" className="link">Album Page</Link>
  </div>
  </>
)
}

export default Home;
