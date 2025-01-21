import React from 'react'

const Menu = ({ className, menuName }) => {
    return (
        <ul className={`font-dm text-sm text-menuText hover:font-bold hover:text-menuTextHov px-5 ${className}`}>{menuName}</ul>
    )
}

export default Menu
