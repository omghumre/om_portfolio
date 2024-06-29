import React from 'react'
import { NavLink } from 'react-router-dom'
import {Facebook, Github, Twitter, YouTube} from '../components/Allsvg'
const SocialIcon = () => {
  return (
    <div>
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
    </div>
  )
}

export default SocialIcon