import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import FormText from '../components/FormText'
import Button from '../components/Button'

const Contacts = () => {
    return (
        <div>
            <Container className={'max-w-headerContainer'}>

                {/* Contacts page header part start */}
                <div className='mt-32'>
                    <Text ShopHeading={'Contacts'} />
                    <Flex className={'gap-x-[1px]'}>
                        <Link to={'/'}>
                            <Text BreadText={'Home'} />
                        </Link>
                        <Text BreadText={'>'} />
                        <Link to={'/Contacts'}>
                            <Text BreadText={'Contacts'} />
                        </Link>
                    </Flex>
                </div>
                {/* Contacts page header part end */}

                {/* Contacts page form part start */}
                <div className='mt-32'>
                    <Text SHeading={'Fill up a Form'} />
                </div>
                <section className='mt-12'>
                    <div>
                        <FormText FormHead={'Name'} />
                        <input type="text" placeholder='Your name here' className='border-b-2 border-b-[#F0F0F0] font-dm text-sm py-3 w-[550px]' />
                    </div>
                    <div className='mt-6'>
                        <FormText FormHead={'Email'} />
                        <input type="text" placeholder='Your email here' className='border-b-2 border-b-[#F0F0F0] font-dm text-sm py-3 w-[550px]' />
                    </div>
                    <div className='mt-6'>
                        <FormText FormHead={'Message'} />
                        {/* <input type="text" placeholder='Your email here' className='border-b-2 font-dm text-sm py-3 w-[550px]' /> */}
                        <textarea name="message" placeholder='Your message here' className='border-b-2 border-b-[#F0F0F0] font-dm text-sm pt-3 pb-20 w-[550px] resize-none' />
                    </div>
                    <Button btnName={'Post'} />
                </section>
                {/* Contacts page form part end */}

            </Container>
        </div>
    )
}

export default Contacts
