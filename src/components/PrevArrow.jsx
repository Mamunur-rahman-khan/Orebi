import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`bg-bgBorderRight text-white p-4 rounded-full inline-block text-xl absolute right-3 top-[40%] z-10 -translate-y-1/2 ${className}`}
            onClick={onClick}
        ><FaLongArrowAltRight /></div>
    )
}

export default PrevArrow
