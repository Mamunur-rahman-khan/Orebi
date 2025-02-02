import React from 'react'
import Heading from './Heading'

const FormText = ({ FormHead }) => {
    return (
        <>
            <Heading as={'h6'} text={FormHead} className={'font-dm font-bold text-base text-menuTextHov'} />
        </>
    )
}

export default FormText
