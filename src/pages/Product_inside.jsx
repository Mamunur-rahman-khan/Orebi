import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Image from '../components/Image'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import FormText from '../components/FormText'

// Images
import Prod1 from '../assets/prodInsideImg1.png'
import Prod2 from '../assets/prodInsideImg2.png'
import Prod3 from '../assets/prodInsideImg3.png'
import Prod4 from '../assets/prodInsideImg4.png'

// Icons
import { FaStar, FaPlus, FaCircle } from "react-icons/fa";


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
                    <div className={'py-2 mt-10'}>
                        <Text SHeading={'Product'} />
                    </div>
                    <div className={'border-b w-[700px]'}>
                        <Flex className={'gap-x-[2px] items-center py-3'}>
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <p className={'font-dm text-sm text-menuText ml-5'}>1 Review</p>
                        </Flex>
                        <Flex className={'items-center py-3'}>
                            <p className={'font-dm text-base text-menuText mr-6'}><s>$88.00</s></p>
                            <Text SProdCatHeading={'$44.00'} />
                        </Flex>
                    </div>
                    <div className={'py-4'}>
                        <Flex className={'items-center'}>
                            <p className={'font-dm font-bold text-base text-menuTextHov mr-12'}>COLOR:</p>
                            <FaCircle className='text-[#9797977a] text-lg mr-3' />
                            <FaCircle className='text-[#FF8686] text-2xl mr-3' />
                            <FaCircle className='text-[#7dd32154] text-lg mr-3' />
                            <FaCircle className='text-[#b6b6b63a] text-lg mr-3' />
                            <FaCircle className='text-[#15cba43f] text-lg' />
                        </Flex>
                    </div>
                    <div className={'border-b w-[700px]'}>
                        <Flex className={'py-4'}>
                            <label className={'font-dm font-bold text-base text-menuTextHov mr-[72px]'}>SIZE:</label>
                            <select name="product" id="product" className={'font-dm border text-base text-menuText w-28 px-1'}>
                                <option value="small">S</option>
                                <option value="medium">M</option>
                                <option value="large">L</option>
                                <option value="extra large">XL</option>
                            </select>
                        </Flex>
                        <Flex className={'mt-3 mb-7'}>
                            <label for='quantity' className={'font-dm font-bold text-base text-menuTextHov mr-[25px]'}>QUANTITY:</label>
                            <input type='number' id='quantity' name='quantity' min='1' max='1000' className={'border w-28'} />
                        </Flex>
                    </div>
                    <div className={'border-b w-[700px] py-5'}>
                        <Flex className={'gap-x-6'}>
                            <p className={'font-dm font-bold text-base'}>STATUS:</p>
                            <p className={'font-dm text-base text-menuText'}>In stock</p>
                        </Flex>
                    </div>
                    <div className={'py-5 border-b w-[700px]'}>
                        <Flex className={'gap-x-4 py-2'}>
                            <Button btnName={'Add to Wish List'} />
                            <Button btnName={'Add to Cart'} />
                        </Flex>
                    </div>
                    <div className={'py-5 border-b w-[700px]'}>
                        <Flex>
                            <p className={'font-dm font-bold text-base text-menuTextHov'}>FEATURES & DETAILS</p>
                            <FaPlus className={'ml-auto text-menuText text-xs'} />
                        </Flex>
                    </div>
                    <div className={'py-5 border-b w-[700px]'}>
                        <Flex>
                            <p className={'font-dm font-bold text-base text-menuTextHov'}>SHIPPING & RETURNS</p>
                            <FaPlus className={'ml-auto text-menuText text-xs'} />
                        </Flex>
                    </div>
                    <div className={'w-[700px] py-5'}>
                        <Text ShopPHeader={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
                    </div>
                    <div className={'mt-20 border-b'}>
                        <Flex className={'gap-x-8 py-3'}>
                            <p className={'font-dm text-xl text-menuText'}>Description</p>
                            <p className={'font-dm font-bold text-xl text-menuTextHov'}>Reviews (1)</p>
                        </Flex>
                        <p className={'font-dm text-sm text-menuText py-4'}>1 review for Product</p>
                    </div>
                    <div className={'border-b'}>
                        <Flex className={'items-center py-4'}>
                            <p className={'font-dm text-base text-menuTextHov mr-10'}>John Ford</p>
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <FaStar className={'text-[#FFD881] text-sm'} />
                            <p className={'font-dm text-base text-menuText ml-auto'}>6 months ago</p>
                        </Flex>
                        <p className={'py-2 font-dm text-base leading-[30px] text-menuText'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <div className={'py-10 mb-36'}>
                        <div className={'py-8'}>
                            <Text SProdCatHeading={'Add a Review'} />
                        </div>
                        <div>
                            <FormText FormHead={'Name'} />
                            <input type="text" placeholder='Your name here' className='border-b-2 border-b-[#F0F0F0] font-dm text-sm py-3 w-[550px]' />
                        </div>
                        <div className='mt-6'>
                            <FormText FormHead={'Email'} />
                            <input type="text" placeholder='Your email here' className='border-b-2 border-b-[#F0F0F0] font-dm text-sm py-3 w-[550px]' />
                        </div>
                        <div className='mt-6 mb-7'>
                            <FormText FormHead={'Message'} />
                            {/* <input type="text" placeholder='Your email here' className='border-b-2 font-dm text-sm py-3 w-[550px]' /> */}
                            <textarea name="message" placeholder='Your message here' className='border-b-2 border-b-[#F0F0F0] font-dm text-sm pt-3 pb-20 w-[550px] resize-none' />
                        </div>
                        <Button btnName={'Post'} />
                    </div>
                </section>
                {/* Product page details text part end */}
            </Container>
        </div>
    )
}

export default Product_inside
