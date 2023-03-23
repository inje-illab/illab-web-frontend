import React from 'react';

const NavMobileMenu = ({onClick, menuText}) => {
    return (
        <div onClick={onClick} className="hover:cursor-pointer block py-2 px-4 text-sm">
            {menuText}
        </div>
    );
};

export default NavMobileMenu;