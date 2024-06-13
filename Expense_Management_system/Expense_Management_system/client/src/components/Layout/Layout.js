import React from 'react'
import Header from './Header'
import Footer from './footer'
import "./Layout.css";

const Layout =({children}) =>{
    return (
        <>
            <Header />
            <div className="content layout">
                {children}

            </div>
            <Footer/>
        </>
    )
}

export default Layout