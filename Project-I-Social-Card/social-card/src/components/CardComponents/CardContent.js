import React from 'react';
import './Card.css';


const CardContent = () => {
    return (
        <div  className="card-content">
        <a href="https://reactjs.org">
            <h2>Get Started with React</h2>
            <p>React makes it painless to create intereactive UIs. Design simple views for each state in your application.</p>
            </a>
            <a href="https://reactjs.org">reactjs.org</a>
        </div>
    );
};

export default CardContent;