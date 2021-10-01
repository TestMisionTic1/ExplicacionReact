import Footer from "componets/Footer";
import Header from "componets/Header";
import React from 'react'


const Layout = ({children}) => {
    return (
        <div className='mainContainer'>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
