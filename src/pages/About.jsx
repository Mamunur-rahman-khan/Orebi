import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import Flex from '../components/Flex'
import Image from '../components/Image'

// Images
import Prod1 from '../assets/aboutImg1.png'
import Prod2 from '../assets/aboutImg2.png'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section>
            <div className={'pt-24'}>
                <Container className={'max-w-headerContainer'}>

                    {/* About page header part start */}
                    <div>
                        <Text ShopHeading={'About'} />
                        {/* <Text BreadText={'Home  >  About'} /> */}
                        <Flex className={'gap-x-[1px]'}>
                            <Link to={'/'}>
                                <Text BreadText={'Home'} />
                            </Link>
                            <Text BreadText={'>'} />
                            <Link to={'/about'}>
                                <Text BreadText={'About'} />
                            </Link>
                        </Flex>
                    </div>
                    {/* About page header part end */}

                    {/* About page image part start */}
                    <div className='mt-32'>
                        <Flex className={'gap-x-8'}>
                            <Link to={'/about'}>
                                <Image imgSrc={Prod1} imgAlt={'About Image1'} className={'w-[700px] h-[696px]'} />
                            </Link>
                            <Link to={'/about'}>
                                <Image imgSrc={Prod2} imgAlt={'About Image2'} className={'w-[700px] h-[696px]'} />
                            </Link>
                        </Flex>
                    </div>
                    {/* About page image part end */}

                    {/* About page text part start */}
                    <div className='mt-28'>
                        <Text AboutHText={'Orebi is one of the worlds leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.'} />
                    </div>

                    <div className='mt-32 mb-32'>
                        <Flex className={'gap-x-2'}>
                            <div>
                                <h4 className='font-dm font-bold text-2xl text-menuTextHov mb-5'>Our Vision</h4>
                                <Text ShopPHeader={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.'} />
                            </div>
                            <div>
                                <h4 className='font-dm font-bold text-2xl text-menuTextHov mb-5'>Our Story</h4>
                                <Text ShopPHeader={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.'} />
                            </div>
                            <div>
                                <h4 className='font-dm font-bold text-2xl text-menuTextHov mb-5'>Our Brands</h4>
                                <Text ShopPHeader={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.'} />
                            </div>
                        </Flex>
                    </div>
                    {/* About page text part end */}
                </Container>
            </div>
        </section>
    )
}

export default About
