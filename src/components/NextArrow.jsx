import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`bg-bgBorderRight text-white p-4 rounded-full inline-block text-xl absolute left-3 top-[40%] z-10 -translate-y-1/2 ${className}`}
            onClick={onClick}
        ><FaLongArrowAltLeft /></div>
    )
}

export default NextArrow