import React from 'react'
import Navber from '../parts/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../parts/Footer'

const Rootlayout = () => {
    return (
        <div>
            <Navber />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Rootlayout
