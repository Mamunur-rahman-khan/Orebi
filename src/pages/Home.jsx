import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading';
import Product from '../components/Product';
import Image from '../components/Image';

// Images
import adOne from '../assets/Adone.jpg'
import adTwo from '../assets/Adtwo.png'
import adThree from '../assets/Adthree.jpg'
import MidAdsPart from '../assets/Ads_2.png'
import ProdOne from '../assets/product1.png'
import ProdTwo from '../assets/product2.png'
import ProdThree from '../assets/product3.png'
import ProdFour from '../assets/product4.png'
import ProdFive from '../assets/product5.png'
import ProdSix from '../assets/product6.png'
import ProdSeven from '../assets/product7.png'
import ProdEight from '../assets/product8.png'
import ProdNine from '../assets/product9.png'
import ProdTen from '../assets/product10.png'
import ProdEleven from '../assets/product11.png'
import ProdTwelve from '../assets/product12.png'

// Slider
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from '../components/PrevArrow';
import NextArrow from '../components/NextArrow';

// Icons
import { FaTruck, FaUndoAlt } from "react-icons/fa";
import { PiNumberTwoBold } from "react-icons/pi";
import Text from '../components/Text';


const Home = () => {

    var settings = {

        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            {/* Banner part start */}
            <div className="bg-banneerBg w-full py-[300px] bg-no-repeat bg-center"></div>
            {/* Banner part end */}

            {/* Information part start */}
            <div className="w-full py-[25px] border-y-[1px]">
                <Container className={'max-w-headerContainer'}>
                    <Flex className={'justify-between gap-x-96'}>
                        <div className="w-[30%]">
                            <Flex className={'gap-x-2'}>
                                <PiNumberTwoBold className='text-2xl' />
                                <Heading as={'h3'} text={'Two years warranty'} className={'font-dm text-[16px] text-infoText'} />
                            </Flex>
                        </div>
                        <div className="w-[30%]">
                            <Flex className={'gap-x-2'}>
                                <FaTruck className='text-xl' />
                                <Heading as={'h3'} text={'Free shipping'} className={'font-dm text-[16px] text-infoText'} />
                            </Flex>
                        </div>
                        <div className="w-[30%]">
                            <Flex className={'gap-x-2'}>
                                <FaUndoAlt className='text-xl' />
                                <Heading as={'h3'} text={'Return policy in 30 days'} className={'font-dm text-[16px] text-infoText'} />
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* Information part end */}

            {/* Ads part start */}
            <div className="w-full mt-24 mb-24">
                <Container className={'max-w-headerContainer'}>
                    <Flex className={'justify-between'}>
                        <div className="w-[49%]">
                            <img src={adOne} alt={'adOne'} />
                        </div>
                        <div className="w-[49%]">
                            <img src={adTwo} alt={'adTwo'} />
                            <img src={adThree} alt={'adThree'} className={'mt-[38px]'} />
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* Ads part end */}

            {/* Slider part start */}
            <div className='w-full py-[30px]'>
                <Container className={'max-w-headerContainer'}>
                    <div className="py-[20px]">
                        <Text SHeading={'New Arrivals'} />
                    </div>
                    <Slider {...settings}>
                        <div className="relative group px-3">
                            <Product
                                imgSrc={ProdOne}
                            />
                        </div>
                        <div className="relative group px-3">
                            <Product
                                imgSrc={ProdTwo}
                            />
                        </div>
                        <div className="relative group px-3">
                            <Product
                                imgSrc={ProdThree}
                            />
                        </div>
                        <div className="relative group px-3">
                            <Product
                                imgSrc={ProdFour}
                            />
                        </div>
                    </Slider>
                </Container>
            </div>
            {/* Slider part end */}

            {/* Best seller part start */}
            <div className="w-full py-[40px]">
                <Container className={'max-w-headerContainer'}>
                    <div className="py-[20px]">
                        <Text SHeading={'Our Bestsellers'} />
                    </div>
                    <Flex className={'gap-x-5'}>
                        <div className="w-[25%] relative group">
                            <Product
                                imgSrc={ProdFive}
                            />
                        </div>
                        <div className="w-[25%] relative group">
                            <Product
                                imgSrc={ProdSix}
                            />
                        </div>
                        <div className="w-[25%] relative group">
                            <Product
                                imgSrc={ProdSeven}
                            />
                        </div>
                        <div className="w-[25%] relative group">
                            <Product
                                imgSrc={ProdEight}
                            />
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* Best seller part end */}

            {/* Mid ad part start */}
            <div className="w-full mt-[80px] mb-[80px]">
                <Container className={'max-w-headerContainer'}>
                    <Image imgSrc={MidAdsPart} />
                </Container>
            </div>
            {/* Mid ad part end */}

            {/* Special offers part start */}
            <div className="w-full mt-[80px] mb-[130px]">
                <Container className={'max-w-headerContainer'}>
                    <div className="py-[20px]">
                        <Text SHeading={'Special Offers'} />
                    </div>
                    <Flex className={'gap-x-5'}>
                        <div className="w-[25%] relative group">
                            <Product
                                imgSrc={ProdNine}
                            />
                        </div>
                        <div className="w-[25%] relative group">
                            <Product
                                imgSrc={ProdTen}
                            />
                        </div>
                        <div className="w-[25%] relative group">
                            <Product
                                imgSrc={ProdEleven}
                            />
                        </div>
                        <div className="w-[25%] relative group">
                            <Product
                                imgSrc={ProdTwelve}
                            />
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* Special offers part start */}
        </>
    )
}

export default Home
