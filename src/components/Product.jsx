import React from 'react'
import Badge from './Badge'
import Image from './Image';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import Flex from './Flex';
import Heading from './Heading';

const Product = ({ imgSrc }) => {
    return (
        <>
            <Badge bdgeName={'New'} className={'absolute top-[20px] left-[20px]'} />
            <Image imgSrc={imgSrc} className='w-full' />
            <div className="bg-white p-4 invisible group-hover:visible absolute bottom-[75px] left-0 w-full">
                <Flex className={'justify-end items-center gap-x-2 mb-6 mr-4'}>
                    <p className='font-dm text-[16px] text-menuText'>Add to Wish List</p>
                    <FaHeart />
                </Flex>
                <Flex className={'justify-end items-center gap-x-2 mb-6 mr-4'}>
                    <p className='font-dm text-[16px] text-menuText'>Compare</p>
                    <BsArrowRepeat className='font-bold text-lg' />
                </Flex>
                <Flex className={'justify-end items-center gap-x-2 mr-4'}>
                    <p className='font-dm text-[16px] text-menuText'>Add to Cart</p>
                    <FaShoppingCart />
                </Flex>
            </div>
            <Flex className={'justify-between py-3'}>
                <Heading as={'h4'} text={'Basic Crew Neck Tee'} className={'font-dm font-bold text-xl'} />
                <Heading as={'h5'} text={'$44.00'} className={'font-dm text-base text-menuText'} />
            </Flex>
            <Heading as={'h5'} text={'Black'} className={'font-dm text-base text-menuText'} />
        </>
    )
}

export default Product
