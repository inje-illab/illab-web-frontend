import React from 'react';
import LaptopTable from '../../common/image/LaptopTable';
import MainBox from '../components/main/MainBox';

const Main = () => {
    const mainIntroText = [
        {text : "새로운 아이디어와 적극적인 개발자 소통,", className:"text-[1rem]"},
        {text : "프로젝트 기반의 협업 학습 연구실", className:"text-xl mb-20"},
        {text :"Innocative Learning Laboratory", className:"text-5xl font-extrabold"}
    ]
    const mainIntroMdText = [
        {text : "새로운 아이디어와 적극적인 개발자 소통,", className:"text-[1rem]"},
        {text : "프로젝트 기반의 협업 학습 연구실", className:"text-sm mb-3"},
        {text : "Innocative Learning Laboratory", className:"text-xl font-bold"}
    ]
    const mainContent = [
        {text : <MainBox text={"📖 illab은 _____ 을 자랑합니다."}/>, content : ""},
        {text : <MainBox text={"🙌🏻  illab은 _____ 분위기를 지향합니다."}/>, content : ""},
        {text : <MainBox text={"💻  illab은 _____ 학습 및 활동을 합니다."}/>, content : ""}
    ]
    return (
        <div>
            {/* lg 이상 */}
            <div className="hidden lg:block">
                <div className="relative -z-50 flex justify-center">
                        <LaptopTable className={'z-0 backdrop-brightness-95'}/>
                    <div className="absolute text-center object-center flex flex-col pt-[18%]">
                        {mainIntroText.map((mainIntroDatas, index) => (<div key={index} className={mainIntroDatas.className}>{mainIntroDatas.text}</div>))}
                    </div>
                </div>
            </div>
            {/* lg 미만 */}
            <div className='lg:hidden'>
                <div className="relative -z-50 flex justify-center">
                        <LaptopTable className={'z-0'}/>
                    <div className="absolute text-center object-center flex flex-col pt-[18%]">
                        {mainIntroMdText.map((mainIntroDatas, index) => (<div key={index} className={mainIntroDatas.className}>{mainIntroDatas.text}</div>))}
                    </div>
                </div>
            </div>
            
            <div className="max-w-6xl m-auto">
                <div className="text-md">
                    {mainContent.map((contents, index)=>(<div key={index} className="p-10">{contents.text}{contents.content}</div>))}
                </div>
            </div>
        </div>
    );
};

export default Main;