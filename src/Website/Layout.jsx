import React from 'react'
import Header from './Common/Header'
import { Outlet } from 'react-router'
import Footer from './Common/Footer'

export default function Layout() {
    return (
        <>
            <div className="flex flex-col ">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
