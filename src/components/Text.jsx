import React from 'react'
import Heading from './Heading'

const Text = ({ SHeading, ShopHeading, BreadText, SProdCatHeading, ProdCatText, ShopPHeader }) => {
    return (
        <>
            <Heading as={'h3'} text={SHeading} className={'font-dm font-bold text-menuTextHov text-[39px]'} />
            <Heading as={'h2'} text={ShopHeading} className={'font-dm font-bold text-menuTextHov text-[49px]'} />
            <Heading as={'h5'} text={SProdCatHeading} className={'font-dm font-bold text-menuTextHov text-[20px]'} />
            <Heading as={'p'} text={BreadText} className={'font-dm text-menuText text-xs'} />
            <Heading as={'p'} text={ProdCatText} className={'font-dm text-menuText text-base py-5'} />
            <Heading as={'p'} text={ShopPHeader} className={'font-dm text-menuText text-base'} />
        </>
    )
}

export default Text
