import React from 'react'
import { NavLink } from 'react-router-dom'
import {Instagram, Github, Twitter, Linkedin, Email} from '../components/Allsvg'
import styled from 'styled-components'
import {DarkTheme} from '../components/Themes'
import {motion} from 'framer-motion'

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
const Line = styled(motion.span)`
  width: 2px;
  height: 6rem;
  background-color:${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body };
  transform: translate(-2px)

`
const SocialIcon = (props) => {
  return (
    <Icons>
        <motion.div
        
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1.4 }}
        
        >
            <NavLink style={{color:'inherit' }} to="mailto:omghumre74@gmail.com">
                <Email width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>
        <motion.div
        
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1.4 }}
        
        >
            <NavLink style={{color:'inherit'}} target="_blank" to="https://github.com/omghumre">
                <Github width={28} height={28} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>
        <motion.div
        
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1.4 }}
        
        >
            <NavLink style={{color:'inherit'}} target="_blank" to="https://x.com/omghumre">
                <Twitter width={26} height={26} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>
        <motion.div
        
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1.4 }}
        
        >
            <NavLink style={{color:'inherit'}} target="_blank" to="https://linkedin.com/in/omghumre">
                <Linkedin width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>
        <motion.div
        
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1.4 }}
        
        >
            <NavLink style={{color:'inherit'}} target="_blank" to="https://instagram.com/omghumre.in/">
                <Instagram width={28} height={28} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>
        <Line color = {props.theme}
        
        initial={
            {
                height: 0
            }
        }
        animate={{
            height: '8rem'
        }}
        transition={{
            type:'spring', duration:1, delay:0.8
        }}
        
        />
    </Icons>
    )
}

export default SocialIcon