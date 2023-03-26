import React from 'react';
import ApplicationImgae from '../../assets/application.png';

const ApplyImage = ({className}) => {
    return (
        <img className={className} src={ApplicationImgae}/>
    );
};

export default ApplyImage;