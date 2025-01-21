import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import Flex from '../components/Flex'

// Icons
import { FaPlus, FaCircle, FaCaretUp } from "react-icons/fa";

const Shop = () => {
    return (
        <div className='pt-44 pb-[70px]'>
            <Container className={'max-w-headerContainer'}>

                {/* Shop header part start */}
                <div>
                    <Text ShopHeading={'Products'} />
                    <Text BreadText={'Home  >  Products'} />
                </div>
                {/* Shop header part end */}

                {/* Shop by category part start */}
                <div className="w-3/12 pt-[100px]">
                    <div>
                        <Text SProdCatHeading={'Shop by Category'} />
                        <ul>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'Category 1'} />
                                    <FaPlus className={'ml-[265px]'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'Category 2'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'Category 3'} />
                                    <FaPlus className={'ml-[260px]'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'Category 4'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'Category 5'} />
                                </Flex>
                            </li>
                        </ul>
                    </div>
                    <div className={'mt-10'}>
                        <Flex className={'items-center'}>
                            <Text SProdCatHeading={'Shop by Color'} />
                            <FaCaretUp className={'ml-[209px]'} />
                        </Flex>
                        <ul>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <FaCircle className='text-xs mr-3' />
                                    <Text className={''} ProdCatText={'Color 1'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <FaCircle className='text-xs mr-3 text-[#FF8686]' />
                                    <Text className={''} ProdCatText={'Color 2'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <FaCircle className='text-xs mr-3 text-[#7ED321]' />
                                    <Text className={''} ProdCatText={'Color 3'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <FaCircle className='text-xs mr-3 text-[#B6B6B6]' />
                                    <Text className={''} ProdCatText={'Color 4'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <FaCircle className='text-xs mr-3 text-[#15CBA5]' />
                                    <Text className={''} ProdCatText={'Color 5'} />
                                </Flex>
                            </li>
                        </ul>
                    </div>
                    <div className={'mt-10'}>
                        <Flex className={'items-center'}>
                            <Text SProdCatHeading={'Shop by Brand'} />
                            <FaCaretUp className={'ml-[203px]'} />
                        </Flex>
                        <ul>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'Brand 1'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'Brand 2'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'Brand 3'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'Brand 4'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'Brand 5'} />
                                </Flex>
                            </li>
                        </ul>
                    </div>
                    <div className={'mt-10'}>
                        <Text SProdCatHeading={'Shop by Price'} />
                        <ul>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'$0.00 - $9.99'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'$10.00 - $19.99'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'$20.00 - $29.99'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'$30.00 - $39.99'} />
                                </Flex>
                            </li>
                            <li className={'border-b-2'}>
                                <Flex className={'items-center'}>
                                    <Text className={''} ProdCatText={'$40.00 - $69.99'} />
                                </Flex>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Shop by category part end */}
            </Container>
        </div>
    )
}

export default Shop
