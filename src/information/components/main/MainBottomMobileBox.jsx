import React from 'react';

const MainBottomMobileBox = () => {
    const activityContents = [
        {who: "🏫 재학생", title: "개인학습", content: ["학과 수업 혹은 졸업생들의", "추천 내용 중 자유롭게 선택합니다."]},
        {who: "🏫 재학생", title: "주간스크럼", content: ["한 주 동안 어떠한 학습을 했는지", "랩원과 공유합니다."]},
        {who: "🏫 재학생", title: "대외활동", content: ["방학 중 인턴 과정, 다양한 외부 동아리 등의", "정보를 공유해 더 넓은 경험을 추구합니다."]},
        {who: "🏫 재학생 🎓 졸업생", title: "정기세미나", content: ["재학생들이 원하는 주제(개발, 취업, 진로)로", "졸업생들과 소통하는 시간을 가집니다."]},
        {who: "🏫 재학생 🎓 졸업생", title: "프로젝트", content: ["재학생끼리 혹은 졸업생과 함께", "자유로운 주제로 실제 프로젝트를 구현합니다."]},
        {who: "🏫 재학생 🎓 졸업생", title: "코드리뷰", content: ["프로젝트 과정 중 어려움이 있으면", "Git을 통해 이야기를 나눕니다."]},
        {who: "🏫 재학생 🎓 졸업생", title: "커피챗", content: ["1:1로 원하는 상담을 진행합니다.", "단, 일정조율은 당연히 필요해요!"]},
        {who: "🗓️ 연간 단위", title: "illab 컨퍼런스", content: ["1년 중 본인이 가장 인상깊은 주제로", "발표하는 과정을 진행합니다."]},
    ]
    return (
        <div className="gap-5 items-center max-w-5xl m-auto">
            {activityContents.map((activityContent, index) => (<div key={index} className="shadow-xl rounded-lg text-center p-7 my-5">
                <div>
                    <div className="font-light text-sm">{activityContent.who}</div>
                    <div className="font-bold text-lg my-2">{activityContent.title}</div>
                    <div className="font-light text-gray-600 text-sm">{activityContent.content.map((contentDetail, sub_index)=>(
                        <div key={sub_index}>{contentDetail}</div>
                    ))}</div>
                </div>
            </div>))}
            <div className="bg-slate-300 rounded-lg p-7 h-40">
                <div className="text-2xl font-bold">What's next?</div>
                <div className="text-right font-light mt-6">
                    <div>자유로운 소통을 통해</div>
                    <div>언제든 랩실 활동은 추가될 수 있습니다.</div>
                </div>
            </div>
        </div>
    );
};

export default MainBottomMobileBox;