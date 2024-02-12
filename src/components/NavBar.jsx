import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink className ='link_one'to='/'>All post</NavLink>
            </li>
            <li>
                <NavLink className ='link_one'to='/post'>1-10 Page</NavLink>
            </li>
            <li>
                <NavLink className ='link_one'to='/post3'>11-20 Page</NavLink>
            </li>
            <li>
                <NavLink className ='link_one'to='/post4'>21-30 Page</NavLink>
            </li>
            <li>
                <NavLink className ='link_one'to='/post5'>31-40 Page</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar