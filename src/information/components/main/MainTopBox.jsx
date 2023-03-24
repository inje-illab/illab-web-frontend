import React from 'react';
import Computer from '../../../common/icon/Computer';
import Excellence from '../../../common/icon/Excellence';
import Network from '../../../common/icon/Network';


const MainTopBox = () => {
    const topDatas = [
        {icon: <Excellence className={"m-auto"}/>, text: ["우수한 인력으로 구성해", "좋은 환경과 결과를 얻습니다."]},
        {icon: <Network className={"m-auto"}/>, text: ["현직 개발자인 졸업생과", "재학생이 함께 합니다."]},
        {icon: <Computer className={"m-auto"}/>, text: ["프로그래밍, 인턴, 대외활동 등", "교내/외 적극적인 활동을 합니다."]}
    ]

    return (
        <div className="grid grid-cols-3 my-5 mt-14">
            {topDatas.map((topDatas, index) => (<div key={index} className="grid grid-rows-2 text-center">{topDatas.icon}
                <div>
                {topDatas.text.map((texts, sub_index) => (<div key={sub_index}>{texts}</div>))}
                </div>
            </div>))}
        </div>
    );
};

export default MainTopBox;