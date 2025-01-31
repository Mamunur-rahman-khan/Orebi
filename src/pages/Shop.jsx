import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'

// Icons
import { FaPlus, FaCircle, FaCaretUp } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

const Shop = () => {
    return (
        <div className='pt-44 pb-[70px]'>
            <Container className={'max-w-headerContainer'}>

                {/* Shop header part start */}
                <div>
                    {/* <h2 className={'font-dm font-bold text-menuTextHov text-[49px]'}>Products</h2> */}
                    <Text ShopHeading={'Products'} />
                    <Text BreadText={'Home  >  Products'} />
                </div>
                {/* Shop header part end */}

                <Flex className={'gap-x-6'}>

                    {/* Shop by category part start */}
                    <div className="w-3/12 pt-24">
                        <div>
                            <Text SProdCatHeading={'Shop by Category'} />
                            <ul className='py-5'>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'Category 1'} />
                                        <FaPlus className={'ml-[265px] text-menuText text-xs'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'Category 2'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'Category 3'} />
                                        <FaPlus className={'ml-[260px] text-menuText text-xs'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'Category 4'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'Category 5'} />
                                    </Flex>
                                </li>
                            </ul>
                        </div>
                        <div className={'mt-10'}>
                            <Flex className={'items-center py-5'}>
                                <Text SProdCatHeading={'Shop by Color'} />
                                <FaCaretUp className={'ml-[209px]'} />
                            </Flex>
                            <ul>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <FaCircle className='text-xs mr-3' />
                                        <Text className={''} ProdCatText={'Color 1'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <FaCircle className='text-xs mr-3 text-[#FF8686]' />
                                        <Text className={''} ProdCatText={'Color 2'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <FaCircle className='text-xs mr-3 text-[#7ED321]' />
                                        <Text className={''} ProdCatText={'Color 3'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <FaCircle className='text-xs mr-3 text-[#B6B6B6]' />
                                        <Text className={''} ProdCatText={'Color 4'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <FaCircle className='text-xs mr-3 text-[#15CBA5]' />
                                        <Text className={''} ProdCatText={'Color 5'} />
                                    </Flex>
                                </li>
                            </ul>
                        </div>
                        <div className={'mt-10'}>
                            <Flex className={'items-center py-5'}>
                                <Text SProdCatHeading={'Shop by Brand'} />
                                <FaCaretUp className={'ml-[203px]'} />
                            </Flex>
                            <ul>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'Brand 1'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'Brand 2'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'Brand 3'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'Brand 4'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'Brand 5'} />
                                    </Flex>
                                </li>
                            </ul>
                        </div>
                        <div className={'mt-10'}>
                            <Text SProdCatHeading={'Shop by Price'} />
                            <ul className='py-5'>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'$0.00 - $9.99'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'$10.00 - $19.99'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'$20.00 - $29.99'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'$30.00 - $39.99'} />
                                    </Flex>
                                </li>
                                <li className={'border-b py-5'}>
                                    <Flex className={'items-center'}>
                                        <Text className={''} ProdCatText={'$40.00 - $69.99'} />
                                    </Flex>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Shop by category part end */}

                    {/* Pagination part start */}
                    <div className="w-2/3 pt-24">
                        <div>
                            <Flex>
                                <div>
                                    <Flex className={'gap-x-3'}>
                                        <MdWindow className={'text-2xl text-white bg-black p-1'} />
                                        <TfiMenuAlt className={'text-2xl border p-1'} />
                                    </Flex>
                                </div>
                                <div className={'ml-[440px]'}>
                                    <Flex className={'items-center gap-x-[6px]'}>
                                        <Text ShopPHeader={'Sort by:'} />
                                        <select name="product" id="product" className={'font-dm border text-base text-menuText px-10'}>
                                            <option value="featured">Featured</option>
                                        </select>

                                        <Text ShopPHeader={'Show:'} />
                                        <select name="product" id="product" className={'font-dm border text-base text-menuText px-5'}>
                                            <option value="36">36</option>
                                        </select>
                                    </Flex>
                                </div>
                            </Flex>
                        </div>

                        <div className={'mt-14'}>
                            <Pagination itemsPerPage={12} />
                        </div>

                    </div>
                    {/* Pagination part end */}
                </Flex>
            </Container>
        </div>
    )
}

export default Shop
