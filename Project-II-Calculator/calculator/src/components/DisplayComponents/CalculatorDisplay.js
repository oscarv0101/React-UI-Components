import React from 'react';
import './Display.css';
import ActionButton from "../ButtonComponents/ActionButton"

const CalculatorDisplay = (props) => {
    return (
        <div className = "display-container">
        <div className = "answer">0</div>
        <div className="row1">
        <ActionButton text="clear"/>
        <ActionButton text="/"/>
        
        </div>

        </div>
    );
};

export default CalculatorDisplay;