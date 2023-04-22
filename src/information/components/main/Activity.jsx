import React from 'react';
import labActivity from '../../../data/information/labActivity.json';
import TitleText from '../../../common/components/TitleText';

const Activity = () => {
    return (
        <div>
            <TitleText text={"💻 illab은 _____ 활동을 합니다."}/>
            <div className="max-w-6xl m-auto mt-8 md:grid md:grid-cols-3">
                {labActivity.list.map((data, index)=>(<div key={index} className="m-5 p-8 text-center rounded-xl drop-shadow-lg bg-white">
                    <div className="font-light text-base">{data.who}</div>
                    <div className="text-lg font-bold my-2">{data.title}</div>
                    <div className="font-light text-sm">
                        {data.content.map((detailData, subIndex) => (<div key={subIndex}>
                            {detailData}
                        </div>))}
                    </div>
                </div>))}
                <div className="m-5 p-8 text-right rounded-xl drop-shadow-lg bg-slate-100 pt-10">
                    <div className="text-2xl font-bold">What is Next? </div>
                    <div className="font-light text-sm pt-6">
                        <div>랩 내에서 자유로운 소통을 통해</div>
                        <div>언제든 활동을 추가하고 참여할 수 있습니다.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;