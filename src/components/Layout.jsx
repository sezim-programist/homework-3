import React from 'react'
import { Outlet } from 'react-router'


const Layout = () => {
  return (
    <div>
        <Outlet/>
        <footer>
            <p className='text'>16.01.24</p>
        </footer>
    </div>
  )
}

export default Layout