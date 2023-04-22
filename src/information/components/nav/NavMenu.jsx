import React from 'react';

const NavMenu = ({onClick, menuText}) => {
    return (
        <div onClick={onClick} className="text-gray-500 px-3 py-2 hover:text-black hover:font-semibold hover:cursor-pointer">
            {menuText}
        </div>
    );
};

export default NavMenu;