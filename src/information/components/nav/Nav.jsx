import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavMenu from './NavMenu';
import NavMobileMenu from './NavMobileMenu';
import classNames from "classnames";
import IllabRect from '../../../common/icon/IllabRect';
import HambugerBtn from '../../../common/icon/HambugerBtn';
import XMark from '../../../common/icon/XMark';

const Nav = () => {
    const navigate = useNavigate();
    const handleClickMenuBtn = (page) => {
        navigate(page)
    }
    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <nav>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    {/* 기본 */}
                    <div className="flex items-center py-5">
                        <IllabRect onClick={()=>handleClickMenuBtn("/")} className="md:h-10 h-8 hover:cursor-pointer"></IllabRect>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <NavMenu onClick={()=>handleClickMenuBtn("/introduction")} menuText={"소개"}></NavMenu>
                        <NavMenu onClick={()=>handleClickMenuBtn("/personnel")} menuText={"인원"}></NavMenu>
                        <NavMenu onClick={()=>handleClickMenuBtn("/history")} menuText={"연혁"}></NavMenu>
                        <NavMenu onClick={()=>handleClickMenuBtn("/record")} menuText={"기록"}></NavMenu>
                        <NavMenu onClick={()=>handleClickMenuBtn("/application")} menuText={"지원"}></NavMenu>
                    </div>

                    {/* mobile menu */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuToggle(!menuToggle)}>
                            {menuToggle ? (
                                <XMark></XMark>
                            ) : (
                                <HambugerBtn></HambugerBtn>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu items */}
            <div className={classNames("md:hidden", {hidden : !menuToggle})}>
                <NavMobileMenu onClick={()=>handleClickMenuBtn("/introduction")} menuText={"소개"}></NavMobileMenu>
                <NavMobileMenu onClick={()=>handleClickMenuBtn("/personnel")} menuText={"인원"}></NavMobileMenu>
                <NavMobileMenu onClick={()=>handleClickMenuBtn("/history")} menuText={"연혁"}></NavMobileMenu>
                <NavMobileMenu onClick={()=>handleClickMenuBtn("/record")} menuText={"기록"}></NavMobileMenu>
                <NavMobileMenu onClick={()=>handleClickMenuBtn("/application")} menuText={"지원"}></NavMobileMenu>
            </div>
        </nav>
    );
};

export default Nav;