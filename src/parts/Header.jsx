import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Menu from '../components/Menu'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            {/* Header part Start */}
            <div className="w-full py-[25px]">
                <Container className={'max-w-headerContainer'}>
                    <div className={'container'}>
                        <Flex>
                            <div className="w-logoW">
                                <Image imgSrc={Logo} />
                            </div>
                            <div className="w-menuW ml-24">
                                <Flex>
                                    <NavLink to={'/'}>
                                        <Menu menuName={'Home'} />
                                    </NavLink>
                                    <NavLink to={'/shop'}>
                                        <Menu menuName={'Shop'} />
                                    </NavLink>
                                    <NavLink>
                                        <Menu menuName={'About'} />
                                    </NavLink>
                                    <NavLink>
                                        <Menu menuName={'Contacts'} />
                                    </NavLink>
                                    <NavLink>
                                        <Menu menuName={'Journal'} />
                                    </NavLink>
                                </Flex>
                            </div>
                        </Flex>
                    </div>
                </Container>
            </div>
            {/* Header part end */}
        </>
    )
}

export default Header
