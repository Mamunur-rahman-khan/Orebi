import React from 'react'

const Button = ({ btnName, className }) => {
    return (
        <button className={`font-dm font-bold text-sm bg-slate-950 text-white px-24 py-6 ${className}`}>{btnName}</button>
    )
}

export default Button
