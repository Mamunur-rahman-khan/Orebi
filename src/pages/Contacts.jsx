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
                    <div className='mt-6 mb-7'>
                        <FormText FormHead={'Message'} />
                        {/* <input type="text" placeholder='Your email here' className='border-b-2 font-dm text-sm py-3 w-[550px]' /> */}
                        <textarea name="message" placeholder='Your message here' className='border-b-2 border-b-[#F0F0F0] font-dm text-sm pt-3 pb-20 w-[550px] resize-none' />
                    </div>
                    <Button btnName={'Post'} />

                    <div className='w-full py-32'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1291.164124777442!2d90.3788973041363!3d23.74867622810208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b98387c333a3%3A0x3d6a16f33fef1da1!2zRGhhbm1vbmRpIC0gS2FsYWJhZ2FuIENvbm5lY3RpbmcgQnJpZGdlIOCmp-CmvuCmqOCmruCmqOCnjeCmoeCmvy3gppXgprLgpr7gpqzgpr7gppfgpr7gpqgg4Ka44KaC4Kav4KeL4KaXIOCmuOCnh-CmpOCngQ!5e0!3m2!1sen!2sbd!4v1738525257200!5m2!1sen!2sbd" width="1444" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
                {/* Contacts page form part end */}

            </Container>
        </div>
    )
}

export default Contacts
