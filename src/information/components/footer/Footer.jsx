import React from 'react';
import BuildingOffice from '../../../common/icon/BuildingOffice';
import Envelope from '../../../common/icon/Envelope';
import IllabRect from '../../../common/icon/IllabRect';
import MapPin from '../../../common/icon/MapPin';

const Footer = () => {
    const detailInfo = [
        {icon:<Envelope className={'w-4 h-4 text-gray-700'}/>, text:"inje.illab@gmail.com"},
        {icon:<BuildingOffice className={'w-4 h-4 text-gray-700'}/>, text:"인제대학교 컴퓨터공학과 소속 연구실"},
        {icon:<MapPin className={'w-4 h-4 text-gray-700'}/>, text:"(50834) 경상남도 김해시 인제로 197 장영실관(E동) E122-B"}
    ]

    const illabLicks = [
        {title : "Github", url : "https://github.com/inje-illab"},
        {title : "Blog", url : ""}
    ]

    const policyLicks = [
        {title : "개인정보처리방침", url : ""},
        {title : "이용약관", url : ""},
        {title : "이메일수집취소", url : ""}
    ]

    return (
        <div className="border-t-2">
            <div className="max-w-6xl mx-auto px-4 py-5">
                {/* default footer */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-[25%_40%_35%]">
                        <div className="m-auto">
                            <IllabRect className={'h-14'}></IllabRect>
                        </div>
                        <div>
                            <div className="font-semibold mb-2">아이엘랩</div>
                            <div className="flex flex-col gap-1">
                                {detailInfo.map((detailDatas, index) => (<div key={index} className="text-sm font-light text-gray-700 flex gap-1 items-center">{detailDatas.icon} {detailDatas.text}</div>))}
                            </div>
                        </div>
                        <div className='pl-5 flex flex-col gap-3'>
                            <div className="grid grid-cols-2">
                                <div className="font-semibold text-center">illab Lick</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {illabLicks.map((lickDatas, index) => (<a key={index} href={lickDatas.url} target="_blank" className="text-sm font-light text-gray-500 hover:font-semibold hover:text-black">{lickDatas.title}</a>))}
                                </div>
                            </div>   
                            <div className="border h-0"></div>
                            <div className='flex gap-6 text-center justify-center'>
                                {policyLicks.map((policyDatas, index) => (<a key={index} href={policyDatas.url} target="_blank" className="text-xs font-light text-gray-400 hover:font-semibold hover:text-black">{policyDatas.title}</a>))}
                            </div> 
                            <div className='text-gray-400 text-[13px] text-center'>
                                ⓒ illab All rights reserved. Develop by illab.
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile footer */}
                <div className="lg:hidden flex flex-col gap-2">
                    <div className="flex justify-center divide-x-2 divide-gray-100">
                        {illabLicks.map((lickDatas, index) => (<a key={index} href={lickDatas.url} target="_blank" className="text-sm font-light text-gray-500 hover:font-normal hover:text-black px-2">{lickDatas.title}</a>))}
                    </div>
                    <div className='flex justify-center divide-x-2 divide-gray-100'>
                        {policyLicks.map((policyDatas, index) => (<a key={index} href={policyDatas.url} target="_blank" className="text-xs font-light text-gray-400 hover:font-normal hover:text-black px-2">{policyDatas.title}</a>))}
                    </div>
                    <div className="m-auto">
                        <IllabRect className={"h-8"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;