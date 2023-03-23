import React from 'react';
import illabRect from '../../assets/illab-rect.png'

const IllabRect = ({onClick, className}) => {
    return (
        <img onClick={onClick} className={className} src={illabRect}/>
    );
};

export default IllabRect;