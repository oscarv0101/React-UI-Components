import React from 'react';
import './Card.css';


const CardContent = () => {
    return (
        <a className="link" href="https://google.com">
        <div  className="card-content">
        
            <h2>Get Started with React</h2>
            <p>React makes it painless to create intereactive UIs. Design simple views for each state in your application.</p>
            <p>reactjs.org</p>
            
        </div>
        </a>
    );
};

export default CardContent;