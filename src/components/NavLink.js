import React from 'react'
import { NavLink } from 'react-router-dom'

import './navlink.css'

export default ({ className, children, ...props }) => (
  <NavLink {...props} className={`NavLink ${className || ''}`}>
    {children}
  </NavLink>
)
