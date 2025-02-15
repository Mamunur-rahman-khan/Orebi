import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import FooterText from '../components/FooterText'
import Image from '../components/Image'
import FootLogo from '../assets/footLogo.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full bg-bgFooter py-[50px]'>
            <Container className={'max-w-headerContainer'}>
                <Flex>
                    <div className={'w-1/12 mr-12'}>
                        <FooterText FHeading={'MENU'} />
                        <Link to={'/'}>
                            <FooterText FText={'Home'} />
                        </Link>
                        <Link to={'/shop'}>
                            <FooterText FText={'Shop'} />
                        </Link>
                        <Link to={'/about'}>
                            <FooterText FText={'About'} />
                        </Link>
                        <Link to={'/contacts'}>
                            <FooterText FText={'Contact'} />
                        </Link>
                        <Link to={''}>
                            <FooterText FText={'Sing In'} />
                        </Link>
                        <div className='mt-20'>
                            <Flex className={'items-center gap-x-4'}>
                                <FaFacebookF />
                                <FaLinkedinIn />
                                <FaInstagram />
                            </Flex>
                        </div>
                    </div>
                    <div className='w-1/12 mr-12'>
                        <FooterText FHeading={'SHOP'} />
                        <FooterText FText={'Category 1'} />
                        <FooterText FText={'Category 2'} />
                        <FooterText FText={'Category 3'} />
                        <FooterText FText={'Category 4'} />
                        <FooterText FText={'Category 5'} />
                    </div>
                    <div className='w-1/6 mr-14'>
                        <FooterText FHeading={'HELP'} />
                        <FooterText FText={'Privacy Policy'} />
                        <FooterText FText={'Terms & Conditions'} />
                        <FooterText FText={'Special E-shop'} />
                        <FooterText FText={'Shipping'} />
                        <FooterText FText={'Secure Payments'} />
                    </div>
                    <div className='w-1/4 mr-32'>
                        <h6 className='font-dm text-base font-bold text-menuTextHov mr-[51px]'>(052) 611-5711 company@domain.com</h6>
                        <FooterText FText={'575 Crescent Ave. Quakertown, PA 18951'} />
                    </div>
                    <div className='w-1/4'>
                        <Link to={'/'}>
                            <Image imgSrc={FootLogo} />
                        </Link>
                        <div className='mt-60'>
                            <p className='text-[12px] text-infoText font-dm'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Footer
