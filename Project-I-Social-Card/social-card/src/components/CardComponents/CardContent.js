import React from 'react';
import './Card.css';


const CardContent = () => {
    return (
        <a href="https://google.com">
        <div  className="card-content">
        <a href="https://reactjs.org">
            <h2>Get Started with React</h2>
            <p>React makes it painless to create intereactive UIs. Design simple views for each state in your application.</p>
            </a>
            
        </div>
        </a>
    );
};

export default CardContent;