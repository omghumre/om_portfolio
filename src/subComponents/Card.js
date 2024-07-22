import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import Github from "../assets/svg/github-brands.svg"
import {Github} from '../components/Allsvg'
import { motion } from 'framer-motion';
import jobsync from '../assets/Images/portfolio.png'

const Box = styled(motion.li)`
    width: 30rem;
    height: 30rem;
    // height: auto;  
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    padding: 1.5rem 2rem;
    margin-right: 8rem;

    border-radius: 0 50px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ;
    transition: all 0.2s ease;

    gap: 1rem;

    &:hover{
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
        transform: translateZ(-10px);
    }
    @media screen and (max-width: 700px) {
    margin-bottom: 2rem;
    margin-right: 0rem;
    width: 15rem;
    height: auto;

    & > div:last-child {
    margin-bottom: -10rem;
    padding-bottom: 2rem;
    }
}
`

const Title = styled.h2`
    font-size: calc(1em + 1vw);
`

const Description = styled.h2`
    font-size: calc(0.8em + 0.3vw);
    font-family: 'Karla',sans-serif;
    font-weight: 500;
`

const Tags = styled.div`
    border-top : 2px solid ${props => props.theme.body};
    padding-top: 0.5rem
    display: flex;
    flex-wrap: wrap;
    ${Box}:hover &{
        border-top: 2px solid ${props => props.theme.text};
    }
`

const Tag = styled.span`
    margin-right: 1rem;
    font-size: cals(0.8rem + 0.3vw);
`

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
`

const Link = styled(NavLink)`
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    border-radius: 0 0 0 50px;
    font-size: calc(1em + 0.5vw);

    ${Box}:hover &{
        background-color: ${props => props.theme.text};
        color: ${props => props.theme.body};
    }
`

const Git = styled(NavLink)`
    color: inherit;
    text-decoration: none;

    ${Box}:hover &{
        &>*{
            fill: ${props => props.theme.text};
        }
    }
`

const Item = {
    hidden: {
        scale: 0
    },
    show:{
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Image = styled.div`
    background-image: ${props => `url(${props.img})`};
    width: 100%;
    height: 25vh;
    background-size: cover;
    border: 1px solid transparent;
    border-radius: 10px;
    background-position: center center;
    transition: transform 0.3s ease;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    transform-style: preserve-3d;

    ${Box}:hover & {
        border:1px solid ${props => props.theme.text};
    }

    @media screen and (max-width: 700px) {
        height: 15vh;
    }
`;


const Card = (props) => {
  
  const {id, name, description, tags, demo, github, imgSrc} = props.data ;

    return (
    <Box key={id}  variants={Item}>
        <Title>{name}</Title>
        <Image>
            <img src={imgSrc} alt="thumbnail" />
            {/* <iframe style="border:0" src={imgSrc} allow="autoplay"></iframe> */}
        </Image>
        <Description>
            {description}
        </Description>
        <Tags>
            {
                tags.map((t,id) => {
                    return <Tag key={id}>#{t}</Tag>
                })
            }
        </Tags>
        {/* <Tags>
            {tags}
        </Tags> */}
        <Footer>
            <Link to={demo} target="_blank">
                Visit
            </Link>
            <Git to={github} target="_blank">
                <Github width={30} height={30} />
            </Git>
        </Footer>
    </Box>
  )
}

export default Card