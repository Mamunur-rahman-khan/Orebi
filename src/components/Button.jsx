import React from 'react'

const Button = ({ btnName, className }) => {
    return (
        <button className={`font-dm font-bold text-sm border-2 border-black bg-slate-950 text-white hover:bg-white hover:text-black px-16 py-3 ${className}`}>{btnName}</button>
    )
}

export default Button
