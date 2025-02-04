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

                {/* About page image part start */}
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
                {/* About page image part end */}
            </Container>
        </div>
    )
}

export default Product_inside
