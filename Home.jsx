import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Home = (props) => {
    
        console.log(props);
        return (
          <div>
            <Button style={{marginLeft: "20px"}}>
              <Link to="about">About</Link>
            </Button>
            <Button style={{marginLeft: "20px"}}>
              <Link to="services">Services</Link>
            </Button>
            <Button variant="success" size="sm" style={{marginLeft: "20px"}}>
              <Link to="contact">Contact</Link>
            </Button>
        <h1>MAAME JANE'S HEALTHY BAR</h1>
        <p>We are a number one choice for nutritious fruits and vegetable juice. We our fruit juice are nutural with no added preservatives. </p>
        <p>Very tasty and healthy. </p>
          </div>
        
        );
      };
      
    


export default Home;

