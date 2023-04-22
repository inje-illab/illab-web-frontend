import React from 'react';
import Pride from '../components/main/Pride';
import Mood from '../components/main/Mood';
import Activity from '../components/main/Activity';

const Main = () => {
    return (
        <div className="max-w-6xl m-auto">
            <div className="md:flex">
                <div className="h-[20rem] md:h-[54rem] flex flex-col justify-center items-center px-4 md:items-start">
                    <div className="font-extrabold italic text-8xl">illab</div>
                    <div className="font-bold flex text-xl h-7 overflow-hidden">
                        <div className="">에서는</div>
                        <div className="pl-2 vertical-animation">
                            <div>개발자의 소통 방법을 배울 수 있습니다.</div>
                            <div>개인 목표를 존중하면서도 함께 공부합니다.</div>
                            <div>재학생과 졸업생이 꾸준히 소통하고 있습니다.</div>
                            <div>재미있는 학부생활과 의미있는 개발을 합니다.</div>
                            <div>협업 툴과 방법, 문서부터 개발까지 함께합니다.</div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:h-[14rem] md:m-auto md:flex md:flex-col md:justify-center md:items-center md:px-4 md:items-start">
                    <img className="md:h-[24rem] h-[14rem] rounded-2xl" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-32 mb-20">
                <Pride />
                <Mood />
                <Activity />
            </div>
        </div>
    );
};

export default Main;