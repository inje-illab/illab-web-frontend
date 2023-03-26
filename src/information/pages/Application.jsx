import React from 'react';
import ApplyImage from '../../common/image/ApplyImage';

const Application = () => {
    const FAQList = [
        {q : "illab은 어디에 위치해있나요?", a : "illab은 컴퓨터공학 건물인 장영실관(E동) 112-B호실에 위치해있습니다."},
        {q : "illab엔 누구든 지원할 수 있나요?", a : "인제대학교 컴퓨터공학 2학기 이상을 수학한 재학생이라면 누구든 지원하실 수 있습니다. 즉, 최소 입학 후 2학기이상이라면 인제대 컴공생 누구든 지원가능 합니다."},
        {q : "illab에서는 어떤 개발을 할 수 있나요?", a : "아이엘랩은 개인의 선택을 존중합니다. Web/App/AI/ML/Server/DB 등 원하는 공부는 무엇이든 할 수 있습니다. 학기 중에는 학과 수업에 집중하며, 정기 스크럼/세미나를 통해 혼자 해결하기 힘든 학습을 나누고 있습니다. 개발 뿐만이 다양한 툴을 사용하거나 개발방법, Github, 인턴, 동아리 등의 다양한 경험을 권장하고 공유하고 있습니다."},
        {q : "illab에서는 어떤 것을 제공받을 수 있나요?", a : "물리적인 환경으로는 학습할 수 있는 공간, 책상, 의자, 책, 프린터기, 냉장고, 전공서적 등이 있습니다. 학습 환경으로는 개인 주도적으로 진행하는 개인 학습과 재학생내에서 진행하는 활동, 현직 개발자인 졸업자들과 소통할 수 있는 다양한 환경이 준비되어있습니다."},
    ]

    return (
        <div>
            <div className="hidden md:block md:max-w-6xl m-auto px-4">
                <div className="h-24"></div>
                <div className="grid grid-cols-2 my-10 mt-5">
                    <div className="flex flex-col pt-10">
                        <div className="text-3xl font-bold mb-20 justify-start">🙌🏻 <span className="italic">illab</span>에서 함께 학문할 학우를 모집합니다.</div>
                        <ul className="list-disc flex flex-col gap-3 pl-5">
                            <li><b>접수 일시</b> : 03/27(월) 09시 00분 ~ 04/02(일) 23시 59분까지</li>
                            <li><b>접수 내용</b> : 개인정보 및 지원 동기/학습 희망 방향 내용 등 10개의 내용 제출</li>
                            <li><b>면접 예정</b> : 별도 안내 (04/06(목) 예정)</li>
                            <li><b>참조</b> : 접수 일시 내 제출된 내용에 한정으로 유효합니다. 시간 엄수해주세요.</li>
                        </ul>
                    </div>
                    <ApplyImage className="h-96"/>
                </div>
            </div>
            <div className="md:hidden m-auto mb-10">
                <div className="h-20"></div>
                <div className="px-3 text-lg font-bold">🙌🏻 <span className="italic">illab</span>에서 함께 학문할 학우를 모집합니다.</div>
                <div className="flex"><ApplyImage className="h-56 inline-block m-auto"/></div>
                <ul className="list-disc flex flex-col gap-3 pl-5 text-xs">
                    <li><b>접수 일시</b> : 03/27(월) 09시 00분 ~ 04/02(일) 23시 59분까지</li>
                    <li><b>접수 내용</b> : 개인정보 및 지원 동기/학습 희망 방향 내용 등 10개의 내용 제출</li>
                    <li><b>면접 예정</b> : 별도 안내 (04/06(목) 예정)</li>
                    <li><b>참조</b> : 접수 일시 내 제출된 내용에 한정으로 유효합니다. 시간 엄수해주세요.</li>
                </ul>
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="px-3 text-xl font-bold mb-3">💬 <span className="italic">illab</span> 지원 시 <a className="underline decoration-[#D8705F]">자주 묻는 질문</a></div>
                {FAQList.map((listDetails, index) => (
                    <details key={index} className="open:bg-white open:ring-black/5 p-3 rounded-lg" open={!open}>
                        <summary className="text-sm leading-6 text-slate-900 font-semibold select-none">
                        {listDetails.q}
                        </summary>
                        <div className="pl-3 text-sm leading-6 text-slate-600">
                            <p>{listDetails.a}</p>
                        </div>
                    </details>
                ))}
            </div>
            <div className="max-w-6xl px-5 m-auto my-10">
                <a className="block bg-gray-100 text-center rounded-2xl border-2 py-5 hover:bg-gray-700 hover:text-black hover:cursor-pointer" href="https://forms.gle/1XLLcMFEDcdqtTxe6" target="_blank">illab 지원하기</a>
            </div>
        </div>
    );
};

export default Application;