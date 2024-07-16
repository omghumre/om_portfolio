import React from 'react'
import styled from 'styled-components'
import { PowerBtn } from '../components/Allsvg'
import { NavLink } from 'react-router-dom'

const Power = styled.button`
position: fixed;
top: 2rem;
left: 45%;
transform: translate(-50%,0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;
display: flex;
justify-content: center;
align-items: center;
z-index: 3;

cursor: pointer;

&:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);

&>*:first-child{
    text-decoration: none;
    color: inherit;
}

@media screen and (max-width: 700px) {
    width: 1rem;
    height: 1rem;
  }

    `



const PowerButton = () => {
  return (
    <Power>
        <NavLink style={{color:'inherit'}} to="/">
        <PowerBtn width={30} height={30} fill='currentColor'/>            
        </NavLink>
    </Power>
  )
}

export default PowerButton