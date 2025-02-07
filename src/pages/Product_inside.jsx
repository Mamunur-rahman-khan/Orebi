import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Image from '../components/Image'
import { Link } from 'react-router-dom'

// Images
import Prod1 from '../assets/prodInsideImg1.png'
import Prod2 from '../assets/prodInsideImg2.png'
import Prod3 from '../assets/prodInsideImg3.png'
import Prod4 from '../assets/prodInsideImg4.png'

// Icons
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";


const Product_inside = () => {
    return (
        <div>
            <Container className={'max-w-headerContainer'}>

                {/* Product image part start */}
                <div className='mt-6'>
                    <Flex className={'gap-x-[1px]'}>
                        <Link to={'/'}>
                            <Text BreadText={'Home'} />
                        </Link>
                        <Text BreadText={'>'} />
                        <Link to={'/product_inside'}>
                            <Text BreadText={'Products'} />
                        </Link>
                    </Flex>
                </div>
                {/* Product image part end */}

                {/* Product page image part start */}
                <div className='mt-32'>
                    <Flex className={'gap-x-8'}>
                        <Link to={'/product_inside'}>
                            <Image imgSrc={Prod1} imgAlt={'Product_inside Image1'} className={'w-[700px] h-[696px]'} />
                        </Link>
                        <Link to={'/product_inside'}>
                            <Image imgSrc={Prod2} imgAlt={'Product_inside Image2'} className={'w-[700px] h-[696px]'} />
                        </Link>
                    </Flex>
                    <Flex className={'gap-x-8 mt-8'}>
                        <Link to={'/product_inside'}>
                            <Image imgSrc={Prod3} imgAlt={'Product_inside Image3'} className={'w-[700px] h-[696px]'} />
                        </Link>
                        <Link to={'/product_inside'}>
                            <Image imgSrc={Prod4} imgAlt={'Product_inside Image4'} className={'w-[700px] h-[696px]'} />
                        </Link>
                    </Flex>
                </div>
                {/* Product page image part end */}

                {/* Product page details text part start */}
                <section>
                    <div className="">
                        <Text SHeading={'Product'} />
                    </div>
                    <div className={'border-b'}>
                        <Flex className={'gap-x-[2px] items-center py-2'}>
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <p className={'font-dm text-sm text-menuText ml-5'}>1 Review</p>
                        </Flex>
                        <Flex className={'items-center py-2'}>
                            <p className={'font-dm text-base text-menuText mr-6'}><s>$88.00</s></p>
                            <Text SProdCatHeading={'$44.00'} />
                        </Flex>
                    </div>
                    <div className="">
                        <Flex className={'items-center py-3'}>
                            <p className={'font-dm font-bold text-base text-menuTextHov mr-12'}>COLOR:</p>
                            <FaCircle className='text-[#9797977a] text-lg mr-3' />
                            <FaCircle className='text-[#FF8686] text-2xl mr-3' />
                            <FaCircle className='text-[#7dd32154] text-lg mr-3' />
                            <FaCircle className='text-[#b6b6b63a] text-lg mr-3' />
                            <FaCircle className='text-[#15cba43f] text-lg' />
                        </Flex>
                    </div>
                    <div className="">
                        <Flex>
                            <p className={'font-dm font-bold text-base text-menuTextHov mr-12'}>SIZE:</p>
                            <select name="product" id="product" className={'font-dm border text-base text-menuText w-16 px-1'}>
                                <option value="featured">S</option>
                            </select>
                        </Flex>
                    </div>
                </section>
                {/* Product page details text part end */}
            </Container>
        </div>
    )
}

export default Product_inside
