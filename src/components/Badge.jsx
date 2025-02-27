import React from 'react'

const Badge = ({ bdgeName, className }) => {
    return (
        <div className={`font-dm font-bold text-sm py-3 px-8 bg-slate-950 text-white w-[90px] ${className}`}>{bdgeName}</div>
    )
}

export default Badge
