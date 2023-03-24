import React from 'react';
import laptopTable from '../../assets/laptop-table.jpg';

const LaptopTable = ({className}) => {
    return (
        <img className={className} src={laptopTable}/>
    );
};

export default LaptopTable;