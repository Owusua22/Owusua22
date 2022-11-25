import React from 'react';
import { useNavigate,Link } from 'react-router-dom';


const Services = () => {
    return (
        <div>
            <button style={{marginLeft: "20px"}}>
        <Link to={`/`}>Home</Link>
      </button>
      <button style={{marginLeft: "20px"}}>
        <Link to={`/services`}>About</Link>
      </button>
      <button style={{marginLeft: "20px"}}>
        <Link to={`/contact`}>Contact</Link>
      </button>
            <h1>SERVICES</h1>
            <ul>
                <li>
                    Fruit Salad
                    </li>
                    <li>
                    Vegetable salad
                    </li>
                    <li>
                    Fruit drink
                    </li>
                    <li>
                    Vegetable drink
                </li>
            </ul>
        </div>
    );
}

export default Services;
