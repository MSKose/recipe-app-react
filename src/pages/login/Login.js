import React, { useEffect, useState } from 'react';
import { SiCodechef } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.js';
import './style.js';
import LoginContainer, { Header, Input, Form } from './style.js';


const Login = ({setNavbar, navbar}) => {
  const [pass, setPass]=useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // setNavbar(true)
    sessionStorage.setItem("pass", pass)
    // window.location.href="/home"
    navigate(-1)
  }


  return (

    <LoginContainer>
      <Form onSubmit={handleSubmit}>
          <SiCodechef size={150} />
          <Header>
            {'<MSKose/>' + ' Recipe'}
          </Header>
          
          <Input placeholder='Username' required></Input>
          <Input placeholder='Password' type="password" value={pass} onChange={(e)=>setPass(e.target.value)} required></Input>
          <Input type="submit" className='submit' ></Input>
      </Form>
    </LoginContainer>
  )
}

export default Login;