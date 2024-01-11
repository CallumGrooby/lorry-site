import React from 'react'
import { Link } from 'react-router-dom'
export const NavigationBar = () => {
  return (
    <div>
        <div className='logo'>

        </div>

        <nav className='navbar'>
            <Link className='navigation-link' to={"/home"}><h1>Home</h1></Link>
            <Link className='navigation-link' to={"/services"}><h1>Services</h1></Link>
            <Link className='navigation-link' to={"/group-divisions"}><h1>Group Divisions</h1></Link>
            <Link className='navigation-link' to={"/careers"}><h1>Careers</h1></Link>
        </nav>
    </div>
  )
}
