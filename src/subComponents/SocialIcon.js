import React from 'react'
import { NavLink } from 'react-router-dom'
import {Facebook, Github, Twitter, YouTube} from '../components/Allsvg'
import styled from 'styled-components'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;
`
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.theme.text};

`

const SocialIcon = () => {
  return (
    <Icons>
        <div>
            <NavLink to="/">
                <Github width={30} height={30} fill='currentColor' />
            </NavLink>
        </div>
        <div>
            <NavLink to="/">
                <Twitter width={30} height={30} fill='currentColor' />
            </NavLink>
        </div>
        <div>
            <NavLink to="/">
                <YouTube width={30} height={30} fill='currentColor' />
            </NavLink>
        </div>
        <div>
            <NavLink to="/">
                <Facebook width={30} height={30} fill='currentColor' />
            </NavLink>
        </div>
        <Line/>
    </Icons>
    )
}

export default SocialIcon