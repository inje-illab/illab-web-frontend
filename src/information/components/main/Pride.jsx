import React from 'react';
import prideData from '../../../data/information/labPride.json';
import TitleText from '../../../common/components/TitleText';
import ImageTextVertical from '../../../common/components/ImageTextVertical';

const Pride = () => {
    return (
        <div>
            <TitleText text={"📖 illab은 _____ 을 자랑합니다."}/>
            <div className="mt-10 md:gap-30 md:flex md:flex-row md:justify-center md:items-baseline flex flex-col gap-14">
                {prideData.list.map((data, index) => (<ImageTextVertical key={index} data={data}></ImageTextVertical>))}
            </div>
        </div>
    );
};

export default Pride;