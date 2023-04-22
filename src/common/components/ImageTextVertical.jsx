import React from 'react';
import Computer from '../icon/Computer';
import Excellence from '../icon/Excellence';
import Network from '../icon/Network';

const ImageTextVertical = ({data}) => {
    const imageDatas = {
        Excellence : Excellence,
        Network : Network,
        Computer : Computer
    }

    return (
        <div className="text-center m-auto">
            <div className="flex justify-center h-[100px]">{imageDatas[data.image]("")}</div>
            <div className="flex flex-col mt-2">
                {data.description.map((detail, index) => (<div key={index}>{detail}</div>))}
            </div>
        </div>
    );
};

export default ImageTextVertical;