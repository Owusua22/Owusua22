import React from 'react';
import { useNavigate,Link } from 'react-router-dom';



const About = () => {
    const navigate = useNavigate();

  return (
    <div>
        <button style={{marginLeft: "20px"}}>
        <Link to={`/`}>Home</Link>
      </button>
      <button style={{marginLeft: "20px"}}>
        <Link to={`/about`}>About</Link>
      </button>
      <button style={{marginLeft: "20px"}}>
        <Link to={`/services`}>Services</Link>
      </button>
        
<h1>ABOUT</h1>
 <p>Maame Jane organic shop is a healthy shop that provides nutritious and cost effective fruit dinks for all age group.</p>
      
    </div>
  );
};
    

export default About;
