import React from 'react';

import Footer from './footer';
import SideBar from './sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <SideBar/>
            <main className='mb-5'>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;