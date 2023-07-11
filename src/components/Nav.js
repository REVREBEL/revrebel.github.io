import React from 'react'
import { Link } from 'react-router-dom'

import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'
import { Container } from 'theme-ui'

import Logo from './logo-file'
import NavLink from './navlink'
import './nav.css'

export default ({ handlePopupOpen }) => (
  <nav className='Nav'>
    <div className='Nav--Container container'>
      <Link to='/'>
        <Logo />
      </Link>
      <NavLink to='/' exact>
        Home
      </NavLink>
      <NavLink to='/about/' exact>
        About
      </NavLink>
      <NavLink to='/blog/' exact>
        Blog
      </NavLink>
      <NavLink to='/contact/' exact>
        Contact
      </NavLink>
    </div>
  </nav>
)
