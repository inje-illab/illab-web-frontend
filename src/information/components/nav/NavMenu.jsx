import React from 'react';

const NavMenu = ({onClick, menuText}) => {
    return (
        <div onClick={onClick} className="text-gray-500 hover:text-black hover:font-semibold px-3 py-2 hover:cursor-pointer">
            {menuText}
        </div>
    );
};

export default NavMenu;