import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Text from '../components/Text';

// Icons
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Category = () => {

    const [open, setOpen] = useState(false);
    const [accopen, setAccOpen] = useState(false);

    let menuRef = useRef();
    let accRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);

            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    useEffect(() => {
        let acchandler = (e) => {
            if (!accRef.current.contains(e.target)) {
                setAccOpen(false);
            }
        };

        document.addEventListener("mousedown", acchandler);

        return () => {
            document.removeEventListener("mousedown", acchandler);
        }
    });

    return (
        <>
            {/* Category part start */}
            < div className="w-full bg-categoryBg py-[30px]" >
                <Container className={'max-w-headerContainer'}>
                    <div className={'container'}>
                        <Flex className={'items-center'}>
                            <div className={'w-1/5'} ref={menuRef} >
                                <div onClick={() => { setOpen(!open) }}>
                                    <Flex className={'gap-x-2 relative cursor-pointer'}>
                                        <HiBars3BottomLeft className={'text-2xl'} />
                                        <Heading as={'h3'} text={'Shop By Category'} className={'font-dm text-sm text-menuTextHov'} />
                                    </Flex>
                                </div>
                                <div className={`absolute dropdown-menu ${open ? 'active' : 'inactive'}`}>
                                    <ul className={'bg-menuTextHov px-5 py-4 cursor-pointer'}>
                                        <li className={'text-[#ffffffa4] hover:text-white hover:font-bold border-b-2 border-[#2D2D2D]'}>
                                            <Flex className={'items-center'}>
                                                <Text CatDroptext={'Accesories'} />
                                                <MdKeyboardArrowRight className={'ml-28'} />
                                            </Flex>
                                        </li>
                                        <li className={'text-[#ffffffa4] hover:text-white hover:font-bold border-b-2 border-[#2D2D2D]'}>
                                            <Flex className={'items-center'}>
                                                <Text CatDroptext={'Furniture'} />
                                                <MdKeyboardArrowRight className={'ml-auto'} />
                                            </Flex>
                                        </li>
                                        <li className={'text-[#ffffffa4] hover:text-white hover:font-bold border-b-2 border-[#2D2D2D]'}>
                                            <Flex className={'items-center'}>
                                                <Text CatDroptext={'Electronics'} />
                                                <MdKeyboardArrowRight className={'ml-auto'} />
                                            </Flex>
                                        </li>
                                        <li className={'text-[#ffffffa4] hover:text-white hover:font-bold border-b-2 border-[#2D2D2D]'}>
                                            <Flex className={'items-center'}>
                                                <Text CatDroptext={'Clothes'} />
                                                <MdKeyboardArrowRight className={'ml-auto'} />
                                            </Flex>
                                        </li>
                                        <li className={'text-[#ffffffa4] hover:text-white hover:font-bold border-b-2 border-[#2D2D2D]'}>
                                            <Flex className={'items-center'}>
                                                <Text CatDroptext={'Bags'} />
                                                <MdKeyboardArrowRight className={'ml-auto'} />
                                            </Flex>
                                        </li>
                                        <li className={'text-[#ffffffa4] hover:text-white hover:font-bold border-b-2 border-[#2D2D2D]'}>
                                            <Flex className={'items-center'}>
                                                <Text CatDroptext={'Home appliances'} />
                                                <MdKeyboardArrowRight className={'ml-auto'} />
                                            </Flex>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="w-2/4 relative ml-20">
                                <input type="text" className='bg-white p-4 rounded-sm w-full' placeholder='Search Products' />
                                <FaSearch className='absolute top-1/2 right-5 -translate-y-1/2' />
                            </div>
                            <div className="w-1/5" ref={accRef}>
                                <Flex className='justify-end gap-x-8'>
                                    <div onClick={() => { setAccOpen(!accopen) }}>
                                        <Flex className={'relative cursor-pointer'}>
                                            <FaUser />
                                            <FaCaretDown />
                                        </Flex>
                                    </div>
                                    <div className={`absolute acc-menu ${accopen ? 'active' : 'inactive'}`}>
                                        <ul className={'border cursor-pointer'}>
                                            {/* <li className={'px-5 py-1 bg-white text-menuTextHov hover:bg-black hover:text-white'}>
                                                <Text CatDroptext={'My Account'} />
                                            </li>
                                            <li className={'px-5 py-1 bg-white text-menuTextHov hover:bg-black hover:text-white'}>
                                                <Text CatDroptext={'Log Out'} />
                                            </li> */}
                                            <li className='font-dm text-sm px-5 py-2 bg-white text-menuTextHov hover:bg-black hover:text-white'>My Account</li>
                                            <li className='font-dm text-sm px-5 py-2 bg-white text-menuTextHov hover:bg-black hover:text-white'>Log Out</li>
                                        </ul>
                                    </div>
                                    <FaShoppingCart />
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


// test


// import React, { useState } from 'react'
// import OutsideClickHandler from 'react-outside-click-handler';
// import Container from '../components/Container'
// import Flex from '../components/Flex'
// import Heading from '../components/Heading'
// import { HiBars3BottomLeft } from "react-icons/hi2";
// import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

// const Category = () => {

//     // const [isOpen, setIsOpen] = useState(false);
//     // const toggleNavbar = () => {
//     //     setIsOpen(!isOpen);
//     // };

//     const [hidden, setHidden] = useState(false);

//     return (
//         <>
//             {/* Category part start */}
//             < div className="w-full bg-categoryBg py-[30px]" >
//                 <Container className={'max-w-headerContainer'}>
//                     <div className={'container'}>
//                         <Flex className={'items-center'}>
//                             <div className={'w-1/5'} >


//                                 <OutsideClickHandler onOutsideClick={() => { setHidden(false); }}>
//                                     <Flex className={'gap-x-2 items-center relative'}>
//                                         <HiBars3BottomLeft className={'text-2xl'} onClick={() => setHidden(!hidden)} />
//                                         <div onClick={() => setHidden(!hidden)}>
//                                             <Heading as={'h3'} text={'Shop By Category'} className={'font-dm text-sm text-menuTextHov'} />
//                                         </div>
//                                     </Flex>

//                                     {hidden && (
//                                         <div className={'absolute'}>
//                                             <ul>
//                                                 <li>Accesories</li>
//                                                 <li>Furniture</li>
//                                                 <li>Electronics</li>
//                                                 <li>Clothes</li>
//                                                 <li>Bags</li>
//                                                 <li>Home appliances</li>
//                                             </ul>
//                                         </div>)}
//                                 </OutsideClickHandler>


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


