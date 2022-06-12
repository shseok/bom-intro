import React from 'react';
import Member from './member';

const AboutUs: React.FC = () => {
    return (
        <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
            <div className="container mx-auto px-11">
                <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                    <strong>꾸준함과 의지만 있다면 뭐든 할 수 있다고 생각합니다.</strong> 저는 프론트엔드 개발자를 향한 초석을 다지고 있습니다. 훌륭한 유저 경험을 위해 디자인 및
                    기획 공부 또한 꾸준히 하고 있습니다.
                </p>
            </div>
            <div className="container mx-auto px-11 text-center mt-28">
                <h2>우리 팀</h2>
                <div className="mt-2">the &ldquo;BOM&ldquo;</div>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                    <Member id="1" name="정현" socialId="@Jason" link="https://github.com/JasonKK"/>
                    <Member id="2" name="현호" socialId="@LuBly" link="https://github.com/LuBly"/>
                    <Member id="3" name="채진" socialId="@Brylimo" link="https://github.com/Brylimo"/>
                    <Member id="4" name="현석" socialId="@shseok" link="https://github.com/shseok"/>
                    <Member id="5" name="가희" socialId="@Gahee" link="https://github.com/gaheehee"/>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
