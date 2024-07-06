import React from 'react'
import { NavLink } from 'react-router-dom'
import {Instagram, Github, Twitter, Linkedin, Email} from '../components/Allsvg'
import styled from 'styled-components'
import {DarkTheme} from '../components/Themes'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;
    
    &>*:not(:last-child){
        margin: 0.3rem 0;
    }

`
const Line = styled.span`
  width: 2px;
  height: 6rem;
  background-color:${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body };
  transform: translate(-2px)

`
const SocialIcon = (props) => {
  return (
    <Icons>
        <div>
            <NavLink style={{color:'inherit' }} to="mailto:omghumre74@gmail.com">
                <Email width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to="https://github.com/omghumre">
                <Github width={28} height={28} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to="https://x.com/omghumre">
                <Twitter width={26} height={26} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to="https://linkedin.com/in/omghumre">
                <Linkedin width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to="https://instagram.com/omghumre.in/">
                <Instagram width={28} height={28} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </div>
        <Line color = {props.theme}/>
    </Icons>
    )
}

export default SocialIcon