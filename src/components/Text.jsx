import React from 'react'
import Heading from './Heading'

const Text = ({ SHeading, ShopHeading, BreadText, SProdCatHeading, ProdCatText, ShopPHeader, CatDroptext, AboutHText }) => {
    return (
        <>
            <Heading as={'h3'} text={SHeading} className={'font-dm font-bold text-menuTextHov text-[39px]'} />
            <Heading as={'h2'} text={ShopHeading} className={'font-dm font-bold text-menuTextHov text-[49px]'} />
            <Heading as={'h5'} text={SProdCatHeading} className={'font-dm font-bold text-menuTextHov text-xl'} />
            <Heading as={'p'} text={BreadText} className={'font-dm text-menuText text-xs'} />
            <Heading as={'p'} text={ProdCatText} className={'font-dm text-menuText text-base'} />
            <Heading as={'p'} text={ShopPHeader} className={'font-dm text-menuText text-base'} />
            <Heading as={'p'} text={CatDroptext} className={'font-dm text-sm'} />
            <Heading as={'h4'} text={AboutHText} className={'font-dm text-[38px] text-menuTextHov leading-[52px]'} />
        </>
    )
}

export default Text
