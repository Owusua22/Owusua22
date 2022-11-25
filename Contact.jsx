import React from 'react';
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <div>
            <button style={{marginLeft: "20px"}}>
        <Link to={`/`}>Home</Link>
      </button>
      <button style={{marginLeft: "20px"}}>
        <Link to={`/services`}>About</Link>
      </button>
      <button style={{marginLeft: "20px"}}>
        <Link to={`/services`}>Services</Link>
      </button>
            <h1>CONTACT</h1>
            <p> Location: Pokuase,Opposite KSP Limited</p>
            <p>Call or Whatsapp: 0248768473</p>
        </div>
    );
}

export default Contact;
