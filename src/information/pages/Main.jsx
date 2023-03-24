import React from 'react';
import LaptopTable from '../../common/image/LaptopTable';
import MainBottomBox from '../components/main/MainBottomBox';
import MainBottomMobileBox from '../components/main/MainBottomMobileBox';
import MainMiddleBox from '../components/main/MainMiddleBox';
import MainMiddleMobileBox from '../components/main/MainMiddleMobileBox';
import MainTitleBox from '../components/main/MainTitleBox';
import MainTopBox from '../components/main/MainTopBox';
import MainTopMobileBox from '../components/main/MainTopMobileBox';

const Main = () => {
    const mainIntroText = [
        {text : "새로운 아이디어와 적극적인 개발자 소통,", className:"text-2xl"},
        {text : "프로젝트 기반의 협업 학습 연구실", className:"text-2xl mb-20"},
        {text :"Innocative Learning Laboratory", className:"text-5xl font-extrabold"}
    ]
    const mainIntroMdText = [
        {text : "새로운 아이디어와 적극적인 개발자 소통,", className:"text-xs"},
        {text : "프로젝트 기반의 협업 학습 연구실", className:"text-xs mb-3"},
        {text : "Innocative Learning Laboratory", className:"text-xl font-bold"}
    ]
    const mainContent = [
        {text : <MainTitleBox text={"📖 illab은 _____ 을 자랑합니다."} className="font-bold text-2xl"/>, content : <MainTopBox/>},
        {text : <MainTitleBox text={"🙌🏻 illab은 _____ 분위기를 지향합니다."} className="font-bold text-2xl"/>, content : <MainMiddleBox/>},
        {text : <MainTitleBox text={"💻 illab은 _____ 학습 및 활동을 합니다."} className="font-bold text-2xl"/>, content : <MainBottomBox/>}
    ]
    const mainMobileContent = [
        {text : <MainTitleBox text={"📖 illab은 _____ 을 자랑합니다."} className="font-bold"/>, content : <MainTopMobileBox className="text-xs"/>},
        {text : <MainTitleBox text={"🙌🏻 illab은 _____ 분위기를 지향합니다."} className="font-bold"/>, content : <MainMiddleMobileBox/>},
        {text : <MainTitleBox text={"💻 illab은 _____ 학습 및 활동을 합니다."} className="font-bold"/>, content : <MainBottomMobileBox/>}
    ]
    return (
        <div>
            {/* lg 이상 메인 이미지*/}
            <div className="hidden lg:block">
                <div className="relative -z-50 flex justify-center">
                        <LaptopTable className={'z-0 backdrop-brightness-95'}/>
                    <div className="absolute text-center object-center flex flex-col pt-[18%]">
                        {mainIntroText.map((mainIntroDatas, index) => (<div key={index} className={mainIntroDatas.className}>{mainIntroDatas.text}</div>))}
                    </div>
                </div>
            </div>
            {/* lg 미만 메인 이미지*/}
            <div className='lg:hidden'>
                <div className="relative -z-50 flex justify-center">
                        <LaptopTable className={'z-0'}/>
                    <div className="absolute text-center object-center flex flex-col pt-[18%]">
                        {mainIntroMdText.map((mainIntroDatas, index) => (<div key={index} className={mainIntroDatas.className}>{mainIntroDatas.text}</div>))}
                    </div>
                </div>
            </div>
            {/* md 이상 메인 콘텐츠 */}
            <div className="hidden md:block max-w-6xl m-auto py-12">
                <div className="text-md">
                    {mainContent.map((contents, index)=>(<div key={index}>{contents.text}{contents.content}</div>))}
                </div>
            </div>
            {/* md 미만 메인 콘텐츠 */}
            <div className="md:hidden m-auto p-5">
                <div className="text-md">
                    {mainMobileContent.map((contents, index)=>(<div key={index}>{contents.text}{contents.content}</div>))}
                </div>
            </div>
        </div>
    );
};

export default Main;