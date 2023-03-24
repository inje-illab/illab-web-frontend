import classNames from 'classnames';
import React from 'react';

const MainMiddleMobileBox = () => {
    const middleContentDatas = [
        {title : "CRIL", descriptionKR : "협업 연구와 독립적인 학습을 함께", descriptionUS : "Collaborative Research and Independent Learning", detail : ["서로 다른 배경과 전문성을 가진 사람들이", "함께 연구하고 지식을 공유하는 방식을 추구합니다."], tags : "#협업 #개인학습", textClass : "text-[#EFB904]", borderClass : "border-[#EFB904]"},
        {title : "PIL", descriptionKR : "이론을 넘어 현실로", descriptionUS : "Project-based Inquiry Learging", detail : ["프로젝트 기반 문제 해결 학습을 통해,","직접 해결하며 개발자의 소통 방법을 습득할 수 있습니다."], tags : "#프로젝트 #개발소통", textClass : "text-[#D8705F]", borderClass : "border-[#D8705F]"},
        {title : "IRIL", descriptionKR : "적극적인 참여를 통한 상호작용", descriptionUS : "Interactive Research and Inquiry-based Learning", detail : ["문제를 해결하기 위한 질문을 직접 제시/참여하고,", "활발한 활동을 통해 학습 효과를 극대화하고자 합니다."], tags : "#상호작용 #질문중심", textClass : "text-[#0BA7A0]", borderClass : "border-[#0BA7A0]"}
    ]
    return (
        <div className="p-5 max-w-5xl m-auto">
            {middleContentDatas.map((contentData, index) => (
                <div key={index} className="my-12">
                    <div className={classNames("h-32 text-center text-3xl italic flex items-center justify-center rounded-lg border-[1px] ", contentData.borderClass)}>
                            <div className={contentData.textClass}>{contentData.title}</div>
                    </div>
                    <div className="pt-3">
                        <div className="font-bold">{contentData.descriptionKR}</div>
                        <div className="text-gray-300 italic text-sm">{contentData.descriptionUS}</div>
                        <div className='pt-4 text-xs'>
                            {contentData.detail.map((contentDetail, subIndex) => (
                                <div key={subIndex}>
                                    {contentDetail}
                                </div>
                            ))}
                        </div>
                        <div className="text-right font-bold pt-3">
                            <div className={contentData.textClass}>{contentData.tags}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainMiddleMobileBox;