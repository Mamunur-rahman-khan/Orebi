import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'

const Contacts = () => {
    return (
        <div>
            <Container className={'max-w-headerContainer'}>

                {/* Contacts page header part start */}
                <div className='mt-32'>
                    <Text ShopHeading={'Contacts'} />
                    <Text BreadText={'Home  >  Contacts'} />
                </div>
                {/* Contacts page header part end */}

                {/* Contacts page form part start */}
                <div className='mt-32'>
                    <Text SHeading={'Fill up a Form'} />
                </div>
                {/* Contacts page form part end */}

            </Container>
        </div>
    )
}

export default Contacts
