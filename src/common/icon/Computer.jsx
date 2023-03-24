import React from 'react';
import ComputerImage from "../../assets/Loptop.png";

const Computer = ({className}) => {
    return (
        <img src={ComputerImage} className={className}/>
    );
};

export default Computer;