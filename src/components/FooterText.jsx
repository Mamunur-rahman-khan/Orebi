import React from 'react'
import Heading from './Heading'

const FooterText = ({ FHeading, FText }) => {
    return (
        <>
            <Heading as={'h6'} text={FHeading} className={'font-dm text-base font-bold text-menuTextHov'} />
            <Heading as={'p'} text={FText} className={'font-dm text-sm text-infoText mt-4'} />
        </>
    )
}

export default FooterText
