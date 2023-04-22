import classNames from 'classnames';
import React from 'react';
import labMood from '../../../data/information/labMood.json';
import TitleText from '../../../common/components/TitleText';

const Mood = () => {
    return (
        <div>
            <TitleText text={"🙌🏻 illab은 _____ 분위기를 지향합니다."}/>
            <div className="px-6">
                {labMood.list.map((data, index)=>(<div key={index} className="max-w-3xl m-auto py-10">
                    <div className="md:grid md:grid-cols-3 gap-10">
                        <div className={classNames("flex md:h-auto h-32 text-2xl font-extrabold italic text-center items-center justify-center rounded-lg border-[2px]", data.borderColorCode)}>
                            <div className={data.textColorCode}>{data.title}</div>
                        </div>
                        <div className="col-span-2 md:pt-0 pt-5">
                            <div className="font-bold">{data.descriptionKR}</div>
                            <div className="text-gray-300 italic">{data.descriptionUS}</div>
                            <div className="pt-4">
                                {data.detailDescrip.map((subData, subIndex) => (<div key={subIndex} className="">
                                    {subData}
                                </div>))}
                            </div>
                            <div className="text-right font-bold pt-3">
                                <div className={data.textColorCode}>{data.tags}</div>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
};

export default Mood;