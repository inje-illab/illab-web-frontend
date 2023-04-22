import React from 'react';

const NavMobileMenu = ({onClick, menuText}) => {
    return (
        <div onClick={onClick} className="block py-2 px-4 text-sm hover:cursor-pointer ">
            {menuText}
        </div>
    );
};

export default NavMobileMenu;