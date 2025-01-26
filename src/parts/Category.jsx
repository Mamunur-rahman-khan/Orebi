// import React, { useEffect, useRef, useState } from 'react'
// import Container from '../components/Container'
// import Flex from '../components/Flex'
// import Heading from '../components/Heading'
// import { HiBars3BottomLeft } from "react-icons/hi2";
// import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

// const Category = () => {

//     const [open, setOpen] = useState(false);

//     let menuRef = useRef();

//     useEffect(() => {
//         let handler = (e) => {
//             if (!menuRef.current.contains(e.target)) {
//                 setOpen(false);
//                 console.log(menuRef.current);

//             }
//         };

//         document.addEventListener("mousedown", handler);

//         return () => {
//             document.removeEventListener("mousedown", handler);
//         }
//     });

//     return (
//         <>
//             {/* Category part start */}
//             < div className="w-full bg-categoryBg py-[30px]" >
//                 <Container className={'max-w-headerContainer'}>
//                     <div className={'container'}>
//                         <Flex className={'items-center'}>
//                             <div className={'w-1/5'} ref={menuRef} >
//                                 <div onClick={() => { setOpen(!open) }}>
//                                     <Flex className={'gap-x-2'}>
//                                         <HiBars3BottomLeft className={'text-2xl'} />
//                                         <Heading as={'h3'} text={'Shop By Category'} className={'font-dm text-sm text-menuTextHov'} />
//                                     </Flex>
//                                 </div>
//                                 <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
//                                     <ul>
//                                         <li>Accesories</li>
//                                         <li>Furniture</li>
//                                         <li>Electronics</li>
//                                         <li>Clothes</li>
//                                         <li>Bags</li>
//                                         <li>Home appliances</li>
//                                     </ul>
//                                 </div>

//                             </div>

//                             <div className="w-2/4 relative ml-20">
//                                 <input type="text" className='bg-white p-4 rounded-sm w-full' placeholder='Search Products' />
//                                 <FaSearch className='absolute top-1/2 right-5 -translate-y-1/2' />
//                             </div>
//                             <div className="w-1/5">
//                                 <Flex className='justify-end'>
//                                     <FaUser />
//                                     <FaCaretDown />
//                                     <FaShoppingCart className='ml-4' />
//                                 </Flex>
//                             </div>
//                         </Flex>
//                     </div>
//                 </Container>
//             </div >
//             {/* Category part start */}
//         </>
//     )
// }

// export default Category


// test


import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

const Category = () => {

    // const [isOpen, setIsOpen] = useState(false);
    // const toggleNavbar = () => {
    //     setIsOpen(!isOpen);
    // };

    const [hidden, setHidden] = useState(false);

    return (
        <>
            {/* Category part start */}
            < div className="w-full bg-categoryBg py-[30px]" >
                <Container className={'max-w-headerContainer'}>
                    <div className={'container'}>
                        <Flex className={'items-center'}>
                            <div className={'w-1/5'} >


                                <OutsideClickHandler onOutsideClick={() => { setHidden(false); }}>
                                    <Flex className={'gap-x-2 items-center relative'}>
                                        <HiBars3BottomLeft className={'text-2xl'} onClick={() => setHidden(!hidden)} />
                                        <div onClick={() => setHidden(!hidden)}>
                                            <Heading as={'h3'} text={'Shop By Category'} className={'font-dm text-sm text-menuTextHov'} />
                                        </div>
                                    </Flex>

                                    {hidden && (
                                        <div className={'absolute'}>
                                            <ul>
                                                <li>Accesories</li>
                                                <li>Furniture</li>
                                                <li>Electronics</li>
                                                <li>Clothes</li>
                                                <li>Bags</li>
                                                <li>Home appliances</li>
                                            </ul>
                                        </div>)}
                                </OutsideClickHandler>


                            </div>

                            <div className="w-2/4 relative ml-20">
                                <input type="text" className='bg-white p-4 rounded-sm w-full' placeholder='Search Products' />
                                <FaSearch className='absolute top-1/2 right-5 -translate-y-1/2' />
                            </div>
                            <div className="w-1/5">
                                <Flex className='justify-end'>
                                    <FaUser />
                                    <FaCaretDown />
                                    <FaShoppingCart className='ml-4' />
                                </Flex>
                            </div>
                        </Flex>
                    </div>
                </Container>
            </div >
            {/* Category part start */}
        </>
    )
}

export default Category


