import React, { useState } from 'react';
import Nav, {Logo, Menu, MenuLink, Hamburger} from './Navbar.style'
import { FiMenu } from 'react-icons/fi';

const NavbarHome = () => {
    // const [isOpen, setIsOpen] = useState(sessionStorage.getItem('pass') || false)
    const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav justify='space-between' wrap='wrap'>
      <Logo to='/'>
        <i>{'<MSKose/>'}</i>
        <span>Recipe</span>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <FiMenu size={40}/>
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="login" onClick={() => sessionStorage.clear()}>Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default NavbarHome